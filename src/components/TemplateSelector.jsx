import { Check, Layout } from "lucide-react";
import React from "react";
import { useState } from "react";

function TemplateSelector({ selectedTemplate, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const templates = [
    {
      id: "modren",
      name: "Modren",
      preview:
        "A sleek, two-column layout featuring a dynamic sidebar and accent colors. Ideal for visually separating quick-read contact details and skills from in-depth work experience.",
    },
    {
      id: "minimalist",
      name: "Minimalist",
      preview:
        "A clean, lean design focused purely on typography and whitespace. Perfect for professionals who want a distraction-free, highly readable layout that lets their experience speak for itself.",
    },
    {
      id: "classic",
      name: "Classic",
      preview:
        "An elegant, timeless design utilizing subtle background structures and well-defined cards. This approach ensures pristine organization, providing clear visual boundaries for a highly professional presentation.",
    },
    {
      id: "developer",
      name: "Developer",
      preview:
        "Purpose-built for software engineers, this template prioritizes architecture and tech stacks. It features monospace technical accents and dedicated project sections to highlight coding proficiency.",
    },
    {
      id: "professional",
      name: "Professional",
      preview:
        "Highly structured with a clear visual hierarchy and subtle dividers. This formal, executive-tier layout is the industry standard for senior-level management and corporate applications.",
    },
  ];
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        <Layout size={16} className="text-gray-500" />
        <span>Template</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full w-64 p-2 mt-2 z-50 bg-white rounded-lg border border-gray-200 shadow-xl max-h-80 overflow-y-auto">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                onChange(template.id);
                setIsOpen(false);
              }}
              className={`relative p-3 border rounded-md cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? "border-blue-500 bg-blue-50 shadow-sm"
                  : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2">
                  <div className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                </div>
              )}

              <div className="pr-7">
                <h2
                  className={`text-xs font-semibold ${
                    selectedTemplate === template.id
                      ? "text-blue-900"
                      : "text-gray-900"
                  }`}
                >
                  {template.name}
                </h2>

                <div
                  className={`text-[10px] mt-1 leading-relaxed ${
                    selectedTemplate === template.id
                      ? "text-blue-700"
                      : "text-gray-500"
                  }`}
                >
                  {template.preview}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TemplateSelector;
