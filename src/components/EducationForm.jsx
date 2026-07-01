import React from "react";
import { Briefcase, Plus, Trash2, Sparkles } from "lucide-react";

function EducationForm({ data, onChange }) {
  const addEducation = () => {
    const newEducation = {
      _id: Date.now() + "_" + Math.random(),
      institution: "",
      degree: "",
      field_of_study: "",
      start_date: "",
      end_date: "",
      description: "",
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Education</h3>
        <p className="text-sm text-gray-500 mt-0.5">Add your Education.</p>
      </div>

      <button
        type="button"
        onClick={addEducation}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-purple-700 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors"
      >
        <Plus className="size-4" />
        Add Education
      </button>

      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <Briefcase className="size-12 mb-3 opacity-50" />
          <p className="text-sm">No education added yet</p>
        </div>
      ) : (
        <div className="space-y-6">
          {data.map((education, index) => (
            <div
              key={education._id}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-700">
                  Education #{index + 1}
                </h4>
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={education.institution || ""}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={education.degree || ""}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={education.field_of_study || ""}
                  onChange={(e) =>
                    updateEducation(index, "field_of_study", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="month"
                  placeholder="Start Date"
                  value={education.start_date || ""}
                  onChange={(e) =>
                    updateEducation(index, "start_date", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="month"
                  placeholder="End Date"
                  disabled={education.is_current}
                  value={education.end_date || ""}
                  onChange={(e) =>
                    updateEducation(index, "end_date", e.target.value)
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
                value={education.description || ""}
                onChange={(e) =>
                  updateEducation(index, "description", e.target.value)
                }
                rows={4}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EducationForm;
