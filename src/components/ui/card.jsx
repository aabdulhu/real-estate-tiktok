// components/ui/card.jsx
import React from 'react';

export function Card({ children }) {
  return (
    <div className="rounded-lg border p-4 shadow-sm bg-white">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-2 text-gray-700">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="font-bold text-lg mb-2">{children}</div>;
}
