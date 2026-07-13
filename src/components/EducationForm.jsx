import React from "react";
import { Plus, Trash2, Sparkles, GraduationCap } from "lucide-react";
import api from "./utils/axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";

function EducationForm({ data, onChange }) {
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((store) => store.auth);

  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field_of_study: "",
      graduation_date: "",
      gpa: "",
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

  const enhanceEducationDescription = async (index) => {
    try {
      setLoading(true);
      const currentEducation = data[index]?.description;
      const userPrompt = `enhance my eduction description: ${currentEducation}`;
      const res = await api.post(
        "/api/ai/enhance-job-disc",
        {
          userContent: userPrompt,
        },
        { headers: { Authorization: `Berar ${token}` } },
      );
      updateEducation(index, "description", res.data.data);
      toast.success("Education Description Enhanced");
    } catch (err) {
      const errText =
        err.response.message || err.response || "Something Went Wrong";
      toast.error(errText);
    } finally {
      setLoading(false);
    }
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
          <GraduationCap className="size-12 mb-3 opacity-50" />
          <p className="text-sm">No education added yet</p>
        </div>
      ) : (
        <div className="space-y-6">
          {data.map((education, index) => (
            <div
              key={education._id || index}
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
                  placeholder="Institution Name"
                  value={education.institution || ""}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={education.degree || ""}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Course of study"
                  value={education.field_of_study || ""}
                  onChange={(e) =>
                    updateEducation(index, "field_of_study", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="month"
                  placeholder="Graduation Date"
                  value={education.graduation_date || ""}
                  onChange={(e) =>
                    updateEducation(index, "graduation_date", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="GPA (e.g., 8.5)"
                  value={education.gpa || ""}
                  onChange={(e) =>
                    updateEducation(index, "gpa", e.target.value)
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
                  onClick={() => enhanceEducationDescription(index)}
                  disabled={loading}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-purple-700 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors"
                >
                  <Sparkles className="size-3" />
                  {!loading ? "AI Enhance" : "Enhanceing..."}
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
