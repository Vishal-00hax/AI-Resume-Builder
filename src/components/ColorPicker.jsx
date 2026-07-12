import { Palette, Check } from "lucide-react"; // Imported Check here
import React, { useState } from "react"; // Consolidated React imports

function ColorPicker({ selectedColor, onChange }) {
  const colors = [
    { name: "Red", value: "#ef4444" },
    { name: "Orange", value: "#f97316" },
    { name: "Amber", value: "#f59e0b" },
    { name: "Yellow", value: "#eab308" },
    { name: "Lime", value: "#84cc16" },
    { name: "Green", value: "#22c55e" },
    { name: "Emerald", value: "#10b981" },
    { name: "Teal", value: "#14b8a6" },
    { name: "Cyan", value: "#06b6d4" },
    { name: "Sky", value: "#0ea5e9" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Indigo", value: "#6366f1" },
    { name: "Violet", value: "#8b5cf6" },
    { name: "Purple", value: "#a855f7" },
    { name: "Fuchsia", value: "#d946ef" },
    { name: "Pink", value: "#ec4899" },
    { name: "Rose", value: "#f43f5e" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {" "}
      {/* Fixed typo: relaive -> relative */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-500 border border-purple-500 rounded-md shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
      >
        <Palette size={16} className="tex-color" />
        <span>Accent</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full w-56 p-2 mt-2 z-50 bg-white rounded-lg border border-gray-200 shadow-xl max-h-60 overflow-y-auto">
          <div className="grid grid-cols-4 gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => {
                  onChange(color.value);
                  setIsOpen(false);
                }}
                className={`relative w-full aspect-square rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedColor === color.value
                    ? "border-blue-500 ring-2 ring-blue-500 ring-offset-1"
                    : "border-gray-200 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              >
                {selectedColor === color.value && (
                  <Check className="absolute inset-0 m-auto w-4 h-4 text-white drop-shadow-md" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
