// components/ui/tabs.jsx
import React, { useState, createContext, useContext } from 'react';

const TabsContext = createContext();

export function Tabs({ children, initialIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }) {
  return <div className="flex border-b border-gray-300">{children}</div>;
}

export function TabsTrigger({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;
  return (
    <button
      className={`px-4 py-2 -mb-px font-medium border-b-2 ${
        isActive ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-500'
      }`}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ index, children }) {
  const { activeIndex } = useContext(TabsContext);
  return activeIndex === index ? <div className="p-4">{children}</div> : null;
}
