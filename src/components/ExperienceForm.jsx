import { Briefcase, Plus, Trash2, Sparkles } from "lucide-react";
import React from "react";

function ExperienceForm({ data, onChange }) {
  const addExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      is_current: false,
      description: "",
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Professional Experience
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">Add your job experience.</p>
      </div>

      <button
        type="button"
        onClick={addExperience}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-purple-700 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors"
      >
        <Plus className="size-4" />
        Add Experience
      </button>

      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <Briefcase className="size-12 mb-3 opacity-50" />
          <p className="text-sm">No experience added yet</p>
        </div>
      ) : (
        <div className="space-y-6">
          {data.map((experience, index) => (
            <div
              key={experience._id}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-700">
                  Experience #{index + 1}
                </h4>
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={experience.company || ""}
                  onChange={(e) =>
                    updateExperience(index, "company", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={experience.position || ""}
                  onChange={(e) =>
                    updateExperience(index, "position", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="month"
                  placeholder="Start Date"
                  value={experience.start_date || ""}
                  onChange={(e) =>
                    updateExperience(index, "start_date", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="month"
                  placeholder="End Date"
                  disabled={experience.is_current}
                  value={experience.end_date || ""}
                  onChange={(e) =>
                    updateExperience(index, "end_date", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-purple-700 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors"
                >
                  <Sparkles className="size-3" />
                  AI Enhance
                </button>
              </div>
              <textarea
                placeholder="Description"
                value={experience.description || ""}
                onChange={(e) =>
                  updateExperience(index, "description", e.target.value)
                }
                rows={4}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
              />
              <label className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={experience.is_current || false}
                  onChange={(e) =>
                    updateExperience(
                      index,
                      "is_current",
                      e.target.checked ? true : false,
                    )
                  }
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                />
                <span className="text-sm text-gray-700">
                  Currently working here
                </span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperienceForm;
