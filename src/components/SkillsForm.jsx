import React from "react";
import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";

function SkillsForm({ data, onChange }) {
  const [skills, setSkills] = useState(data);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    setSkills(data);
  }, [data]);

  const addSkill = () => {
    const updatedSkill = [...skills, newSkill];
    const trimmed = newSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      const updated = [...skills, trimmed];
      setSkills(updated);
      onChange(updated);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    const updated = skills.filter((skill) => skill !== skillToRemove);
    setSkills(updated);
    onChange(updated);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <>
      <div className="space-y-6">
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
          <p className="text-sm text-gray-500 mt-0.5">Add your skills.</p>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. JavaScript"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <button
            type="button"
            onClick={addSkill}
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {skills.length === 0 ? (
            <p className="text-sm text-gray-400">No skills added yet</p>
          ) : (
            skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full border border-purple-200"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="hover:text-purple-900 transition-colors"
                >
                  <X className="size-3.5" />
                </button>
              </span>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default SkillsForm;
