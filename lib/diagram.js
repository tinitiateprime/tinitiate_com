/*
 * Diagram — small vanilla-JS component for code-generated, animated architecture diagrams.
 * Nodes/edges are declared as plain data; this renders inline SVG and plays a staged
 * reveal + flowing-connector animation via anime.js, with click-to-inspect nodes.
 *
 * Usage:
 *   createDiagram(document.getElementById('mount'), {
 *     width: 960, height: 360,
 *     nodes: [{ id, x, y, w, h, label, lines, desc, accent, icon, iconSize, plain }],
 *     edges: [{ from, to, label, dashed }],
 *     groups: [{ id, label, nodes: [ids], padding }],  // optional: dashed section
 *                                                       // container drawn behind a set of nodes
 *     onSelect: (node) => { ... }   // optional
 *   });
 *
 * `plain: true` on a node drops its permanent box border — icon/label only,
 * with the box reappearing just as hover/click affordance. Pairs with `groups`
 * so several plain nodes read as steps inside one labelled section instead of
 * each needing its own visible box.
 */
import anime from 'animejs';

const SVG_NS = 'http://www.w3.org/2000/svg';

function el(tag, attrs, children) {
  const node = document.createElementNS(SVG_NS, tag);
  if (attrs) for (const k in attrs) node.setAttribute(k, attrs[k]);
  if (children) children.forEach((c) => c && node.appendChild(c));
  return node;
}

function text(x, y, lines, opts) {
  opts = opts || {};
  const t = el('text', {
    x, y,
    'text-anchor': 'middle',
    class: opts.class || 'dg-label'
  });
  const arr = Array.isArray(lines) ? lines : [lines];
  const lineHeight = opts.lineHeight || 15;
  const startY = y - ((arr.length - 1) * lineHeight) / 2;
  arr.forEach((line, i) => {
    const tspan = document.createElementNS(SVG_NS, 'tspan');
    tspan.setAttribute('x', x);
    tspan.setAttribute('y', startY + i * lineHeight);
    tspan.textContent = line;
    t.appendChild(tspan);
  });
  return t;
}

// Attachment point: where a straight line from node A's center to node B's
// center crosses A's rectangle boundary.
function attach(node, towardX, towardY) {
  const cx = node.x + node.w / 2;
  const cy = node.y + node.h / 2;
  const dx = towardX - cx;
  const dy = towardY - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const halfW = node.w / 2;
  const halfH = node.h / 2;
  const scale = Math.min(
    dx !== 0 ? Math.abs(halfW / dx) : Infinity,
    dy !== 0 ? Math.abs(halfH / dy) : Infinity
  );
  return { x: cx + dx * scale, y: cy + dy * scale };
}

function makeEdgePath(from, to) {
  const fromCenter = { x: from.x + from.w / 2, y: from.y + from.h / 2 };
  const toCenter = { x: to.x + to.w / 2, y: to.y + to.h / 2 };
  const p1 = attach(from, toCenter.x, toCenter.y);
  const p2 = attach(to, fromCenter.x, fromCenter.y);
  return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
}

export function createDiagram(container, spec) {
  container.classList.add('dg-root');
  const width = spec.width || 960;
  const height = spec.height || 360;

  const svg = el('svg', {
    viewBox: `0 0 ${width} ${height}`,
    class: 'dg-svg',
    role: 'img',
    'aria-label': spec.title || 'Architecture diagram'
  });

  // Arrowhead marker
  const defs = el('defs', {}, [
    el('marker', {
      id: 'dg-arrow-' + Math.random().toString(36).slice(2, 8),
      markerWidth: 10, markerHeight: 10, refX: 8, refY: 3, orient: 'auto'
    }, [el('path', { d: 'M0,0 L8,3 L0,6 Z', class: 'dg-arrowhead' })])
  ]);
  const markerId = defs.firstChild.id;
  svg.appendChild(defs);

  const byId = {};
  spec.nodes.forEach((n) => (byId[n.id] = n));

  const groupGroup = el('g', { class: 'dg-groups' });
  const edgeGroup = el('g', { class: 'dg-edges' });
  const nodeGroup = el('g', { class: 'dg-nodes' });

  (spec.groups || []).forEach((grp) => {
    const members = (grp.nodes || []).map((id) => byId[id]).filter(Boolean);
    if (!members.length) return;
    const pad = grp.padding != null ? grp.padding : 18;
    const topPad = pad + (grp.label ? 22 : 0);
    const minX = Math.min(...members.map((m) => m.x)) - pad;
    const minY = Math.min(...members.map((m) => m.y)) - topPad;
    const maxX = Math.max(...members.map((m) => m.x + m.w)) + pad;
    const maxY = Math.max(...members.map((m) => m.y + m.h)) + pad;
    groupGroup.appendChild(el('rect', {
      x: minX, y: minY, width: maxX - minX, height: maxY - minY,
      rx: 16, ry: 16, class: 'dg-group-rect'
    }));
    if (grp.label) {
      const label = el('text', { x: minX + 16, y: minY + 22, 'text-anchor': 'start', class: 'dg-group-label' });
      label.textContent = grp.label;
      groupGroup.appendChild(label);
    }
  });

  const edgeEls = (spec.edges || []).map((e) => {
    const from = byId[e.from], to = byId[e.to];
    if (!from || !to) return null;
    const path = el('path', {
      d: makeEdgePath(from, to),
      class: 'dg-edge' + (e.dashed ? ' dg-edge-dashed' : ''),
      'marker-end': `url(#${markerId})`,
      'data-from': e.from,
      'data-to': e.to
    });
    edgeGroup.appendChild(path);
    let labelEl = null;
    if (e.label) {
      const fromCenter = { x: from.x + from.w / 2, y: from.y + from.h / 2 };
      const toCenter = { x: to.x + to.w / 2, y: to.y + to.h / 2 };
      labelEl = text((fromCenter.x + toCenter.x) / 2, (fromCenter.y + toCenter.y) / 2 - 8, e.label, { class: 'dg-edge-label' });
      edgeGroup.appendChild(labelEl);
    }
    return { edge: e, path, labelEl };
  }).filter(Boolean);

  const nodeEls = spec.nodes.map((n) => {
    const g = el('g', {
      class: 'dg-node' + (n.accent ? ' dg-accent-' + n.accent : '') + (n.plain ? ' dg-plain' : ''),
      tabindex: '0', 'data-id': n.id
    });
    const rect = el('rect', {
      x: n.x, y: n.y, width: n.w, height: n.h, rx: 12, ry: 12, class: 'dg-node-rect'
    });
    g.appendChild(rect);

    let label;
    let icon = null;
    const lines = n.lines || n.label;
    if (n.icon) {
      // Icon + left-aligned label — used for "by technology" nodes (AWS, Kafka, Postgres, ...).
      const size = n.iconSize || 26;
      const pad = 14;
      icon = el('image', {
        x: n.x + pad, y: n.y + n.h / 2 - size / 2, width: size, height: size,
        class: 'dg-node-icon', preserveAspectRatio: 'xMidYMid meet'
      });
      icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', n.icon);
      icon.setAttribute('href', n.icon);
      const textX = n.x + pad + size + 10;
      const arr = Array.isArray(lines) ? lines : [lines];
      const lineHeight = 15;
      const startY = n.y + n.h / 2 - ((arr.length - 1) * lineHeight) / 2;
      label = el('text', { x: textX, y: startY, 'text-anchor': 'start', class: 'dg-label' });
      arr.forEach((line, i) => {
        const tspan = document.createElementNS(SVG_NS, 'tspan');
        tspan.setAttribute('x', textX);
        tspan.setAttribute('y', startY + i * lineHeight);
        tspan.textContent = line;
        label.appendChild(tspan);
      });
    } else {
      label = text(n.x + n.w / 2, n.y + n.h / 2, lines, { class: 'dg-label' });
    }

    if (icon) g.appendChild(icon);
    g.appendChild(label);
    nodeGroup.appendChild(g);

    function select() {
      const isActive = g.classList.contains('dg-active');
      nodeGroup.querySelectorAll('.dg-node').forEach((el2) => el2.classList.remove('dg-active', 'dg-dim'));
      edgeGroup.querySelectorAll('.dg-edge').forEach((el2) => el2.classList.remove('dg-edge-active'));
      edgeGroup.querySelectorAll('.dg-edge-label').forEach((el2) => el2.classList.remove('dg-edge-label-active'));

      if (isActive) {
        if (typeof spec.onSelect === 'function') spec.onSelect(null);
        return;
      }

      g.classList.add('dg-active');
      nodeGroup.querySelectorAll('.dg-node').forEach((el2) => {
        if (el2 !== g) el2.classList.add('dg-dim');
      });
      edgeEls.forEach(({ edge, path, labelEl }) => {
        if (edge.from === n.id || edge.to === n.id) {
          path.classList.add('dg-edge-active');
          if (labelEl) labelEl.classList.add('dg-edge-label-active');
        }
      });
      if (typeof spec.onSelect === 'function') spec.onSelect(n);
    }

    g.addEventListener('click', select);
    g.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); select(); }
    });

    return { node: n, g, rect, label };
  });

  svg.appendChild(groupGroup);
  svg.appendChild(edgeGroup);
  svg.appendChild(nodeGroup);
  container.appendChild(svg);

  let played = false;
  function play() {
    if (played) return;
    played = true;

    nodeEls.forEach(({ g }) => { g.style.opacity = 0; });
    edgeEls.forEach(({ path }) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.style.opacity = 1;
    });

    const tl = anime.timeline({ easing: 'easeOutQuad' });
    tl.add({
      targets: nodeEls.map((n) => n.g),
      opacity: [0, 1],
      translateY: [10, 0],
      delay: anime.stagger(140),
      duration: 420
    });
    edgeEls.forEach(({ path }, i) => {
      tl.add({
        targets: path,
        strokeDashoffset: [path.getTotalLength(), 0],
        duration: 380,
        easing: 'easeInOutSine'
      }, i === 0 ? '-=120' : '-=260');
    });
    tl.finished.then(() => {
      edgeEls.forEach(({ edge, path }) => {
        if (!edge.dashed) path.classList.add('dg-edge-flow');
      });
    });
  }

  function reset() {
    played = false;
    nodeEls.forEach(({ g }) => { g.style.opacity = ''; g.style.transform = ''; });
    edgeEls.forEach(({ path }) => {
      path.classList.remove('dg-edge-flow');
      path.style.strokeDasharray = '';
      path.style.strokeDashoffset = '';
    });
  }

  if (spec.autoplay !== false) {
    if (typeof IntersectionObserver !== 'undefined') {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { play(); io.disconnect(); } });
      }, { threshold: 0.4 });
      io.observe(svg);
    } else {
      play();
    }
  }

  return { svg, play, replay: () => { reset(); play(); }, nodes: nodeEls, edges: edgeEls };
}
