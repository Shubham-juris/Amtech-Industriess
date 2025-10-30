import React, { useState } from "react";

export function Tabs({ value, onValueChange, children }) {
  const [activeValue, setActiveValue] = useState(value);

  const handleValueChange = (newValue) => {
    setActiveValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  // Inject active value into children
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { activeValue, onValueChange: handleValueChange })
  );
}

export function TabsList({ children, className, onValueChange }) {
  return <div className={`flex flex-wrap gap-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({ value, children, activeValue, onValueChange }) {
  const isActive = value === activeValue;
  return (
    <button
      className={`px-4 py-2 rounded-md border ${
        isActive ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"
      }`}
      onClick={() => onValueChange(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, activeValue, children }) {
  if (value !== activeValue) return null;
  return <div className="mt-4">{children}</div>;
}
