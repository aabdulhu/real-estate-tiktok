// src/components/ui/card.jsx
import React from 'react';

export function Card(props) {
  return (
    <div className="card">
      {/* Your card UI */}
      {props.children}
    </div>
  );
}
