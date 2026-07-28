'use client';
import { useEffect } from 'react';

export default function CursorAura() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    var aura = document.createElement('div');
    aura.id = 'cursor-aura';
    document.body.appendChild(aura);
    var raf = null, tx = -1000, ty = -1000;

    function onMove(e) {
      tx = e.clientX; ty = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(function () {
          aura.style.transform = 'translate3d(' + tx + 'px,' + ty + 'px,0)';
          raf = null;
        });
      }
    }
    function onLeave() { aura.style.opacity = '0'; }
    function onEnter() { aura.style.opacity = '1'; }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      aura.remove();
    };
  }, []);

  return null;
}
