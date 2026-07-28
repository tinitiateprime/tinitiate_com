'use client';
import { useEffect, useRef } from 'react';

export default function HeroNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var wrap = canvas.parentElement;
    var w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var nodes = [];
    var NODE_COUNT = 34;
    var LINK_DIST = 150;
    var mouse = { x: -9999, y: -9999 };
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var rafId = null;

    function resize() {
      w = wrap.clientWidth; h = wrap.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeNodes() {
      nodes = [];
      for (var i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() < 0.18 ? (Math.random() * 2.6 + 2.6) : (Math.random() * 1.6 + 1.2),
          c: Math.random() < 0.5 ? '79,70,229' : '8,145,178'
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (!reduced) { n.x += n.vx; n.y += n.vy; }
        if (n.x < -10) n.x = w + 10; if (n.x > w + 10) n.x = -10;
        if (n.y < -10) n.y = h + 10; if (n.y > h + 10) n.y = -10;
      }
      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            var op = (1 - d / LINK_DIST) * 0.42;
            ctx.strokeStyle = 'rgba(100,105,160,' + op + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.stroke();
          }
        }
        var mdx = nodes[a].x - mouse.x, mdy = nodes[a].y - mouse.y;
        var md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < LINK_DIST * 1.3) {
          var mop = (1 - md / (LINK_DIST * 1.3)) * 0.55;
          ctx.strokeStyle = 'rgba(79,70,229,' + mop + ')';
          ctx.beginPath();
          ctx.moveTo(nodes[a].x, nodes[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      for (var j = 0; j < nodes.length; j++) {
        var nd = nodes[j];
        ctx.beginPath();
        ctx.fillStyle = 'rgba(' + nd.c + ',0.92)';
        ctx.shadowColor = 'rgba(' + nd.c + ',0.55)';
        ctx.shadowBlur = 6;
        ctx.arc(nd.x, nd.y, nd.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      rafId = requestAnimationFrame(step);
    }

    function onMouseMove(e) {
      var rect = wrap.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onMouseLeave() { mouse.x = -9999; mouse.y = -9999; }
    function onResize() { resize(); }

    wrap.addEventListener('mousemove', onMouseMove);
    wrap.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    resize();
    makeNodes();
    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      wrap.removeEventListener('mousemove', onMouseMove);
      wrap.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="hero-network"></canvas>;
}
