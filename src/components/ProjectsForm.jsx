import React from "react";
import { Briefcase, Plus, Trash2, Sparkles } from "lucide-react";
import { useState } from "react";
import api from "../components/utils/axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function ProjectsForm({ data, onChange }) {
  const [technologiesInput, setTechnologiesInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [enhanceIndex, setEnhanceIndex] = useState(-1);
  const { token } = useSelector((store) => store.auth);
  const addProject = () => {
    const newProject = {
      title: "",
      technologies: [],
      link: "",
      description: "",
    };
    onChange([...data, newProject]);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const enhanceProjectDescription = async (index) => {
    try {
      setLoading(true);
      setEnhanceIndex(index);
      const currentDescription = data[index]?.description;
      if (!currentDescription || currentDescription === "") {
        return toast.error("Education Description Enhanced");
      }
      const userprompt = `enhance my project description: ${currentDescription}`;
      const res = await api.post(
        "/api/ai/enhance-job-disc",
        { userContent: userprompt },
        { headers: { Authorization: `Berara ${token}` } },
      );
      updateProject(index, "description", res.data.data);
      toast.success("Education Description Enhanced");
    } catch (err) {
      const errText =
        err.response.message || err.response || "Something Went Wrong";
      toast.error(errText);
    } finally {
      setLoading(false);
      setEnhanceIndex(-1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Project</h3>
        <p className="text-sm text-gray-500 mt-0.5">Add your Project.</p>
      </div>

      <button
        type="button"
        onClick={addProject}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-purple-700 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors"
      >
        <Plus className="size-4" />
        Add Project
      </button>

      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
          <Briefcase className="size-12 mb-3 opacity-50" />
          <p className="text-sm">No Project added yet</p>
        </div>
      ) : (
        <div className="space-y-6">
          {data.map((project, index) => (
            <div
              key={project._id || index}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-700">
                  Project #{index + 1}
                </h4>
                <button
                  type="button"
                  onClick={() => removeProject(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={project.title || ""}
                  onChange={(e) =>
                    updateProject(index, "title", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Technologies"
                  value={
                    Array.isArray(project.technologies)
                      ? project.technologies.join(", ")
                      : ""
                  }
                  onChange={(e) => {
                    const lines = e.target.value
                      .split("\n")
                      .map((t) => t.trim())
                      .filter(Boolean);
                    updateProject(index, "technologies", lines);
                  }}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Project Link"
                  value={project.link || ""}
                  onChange={(e) => updateProject(index, "link", e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <button
                  type="button"
                  onClick={() => enhanceProjectDescription(index)}
                  disabled={enhanceIndex === index || loading}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-purple-700 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors"
                >
                  <Sparkles className="size-3" />
                  {enhanceIndex === index ? "Enhanceing..." : "AI Enhance"}
                </button>
              </div>
              <textarea
                placeholder="Description"
                value={project.description || ""}
                onChange={(e) =>
                  updateProject(index, "description", e.target.value)
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

export default ProjectsForm;
