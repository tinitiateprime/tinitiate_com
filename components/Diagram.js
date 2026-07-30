'use client';
import { useEffect, useRef, useState } from 'react';
import { createDiagram } from '../lib/diagram';

export default function Diagram({ spec, nodeDetails, legend, stageTitle }) {
  const mountRef = useRef(null);
  const diagramRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    diagramRef.current = createDiagram(mountRef.current, {
      ...spec,
      onSelect: (node) => setSelected(node),
    });
    return () => {
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = selected
    ? (Array.isArray(selected.label) ? selected.label.join(' ') : selected.label)
    : 'Click a node';

  return (
    <>
      <div className="stage-top">
        <h3>{stageTitle}</h3>
        <button className="dg-replay" type="button" onClick={() => diagramRef.current?.replay()}>Replay animation</button>
      </div>

      <div className="dg-layout">
        <div ref={mountRef} />
        <div className="dg-panel">
          <div className="dg-panel-eyebrow">Node detail</div>
          <h4>{title}</h4>
          {selected ? (
            <p>{nodeDetails[selected.id]}</p>
          ) : (
            <p className="dg-panel-hint">Select any box in the diagram to see what it does and how it connects.</p>
          )}
        </div>
      </div>

      {legend}
    </>
  );
}
