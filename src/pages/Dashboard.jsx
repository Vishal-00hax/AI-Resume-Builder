import {
  FilePenLine,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloudIcon,
  XIcon,
  FileCheckIcon,
} from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
  const [allResume, setAllResume] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUpdateResume, setShowUpdateResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");
  const navigate = useNavigate();

  const loadAllResumes = async () => {
    setAllResume(dummyResumeData);
  };

  const createResume = async (event) => {
    event.preventDefault();
    setShowCreateResume(false);
    navigate(`/app/builder/res123`);
  };

  const uploadResume = async (event) => {
    event.preventDefault();
    setShowUpdateResume(false);
    navigate(`/app/builder/res123`);
  };

  const editTitle = async (event) => {
    event.preventDefault();
  };

  const deleteResume = async (resumeId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this resume ?",
    );
    if (confirm) {
      setAllResume((perv) => perv.filter((resume) => resume._id !== resumeId));
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Optional welcome message (visible only on mobile) */}
        <p className="text-2xl font-medium mb-6 bg-linear-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Welcome, JohonDoe
        </p>

        {/* This container shrinks to fit the buttons, so the <hr /> stays under them */}
        <div className="inline-flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setShowCreateResume(true)}
              className="relative w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer shrink-0"
            >
              <PlusIcon className="size-12 transition-all duration-300 p-2.5 bg-linear-to-br from-purple-500 to-green-600 text-white rounded-full shadow-md group-hover:shadow-lg group-hover:scale-105" />
              <p className="text-sm font-medium text-purple-600 group-hover:text-green-600 transition-all duration-300">
                Create Resume
              </p>
            </button>

            <button
              type="button"
              onClick={() => setShowUpdateResume(true)}
              className="relative w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer shrink-0"
            >
              <UploadCloudIcon className="size-12 transition-all duration-300 p-2.5 bg-linear-to-br from-purple-500 to-green-600 text-white rounded-full shadow-md group-hover:shadow-lg group-hover:scale-105" />
              <p className="text-sm font-medium text-purple-600 group-hover:text-green-600 transition-all duration-300">
                Upload Existing
              </p>
            </button>
          </div>

          {/* Divider now spans only the width of the buttons */}
          <hr className="border-slate-300 w-full" />
        </div>
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResume.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button
                key={index}
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer mt-5"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10,${baseColor}40)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLine
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />
                <p className="text-sm group-hover:scale-105 transition-all px-2 text-center">
                  {resume?.title}
                </p>
                <p
                  className="absolute bottom-1 text-11px text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center"
                  style={{ color: baseColor + "90" }}
                >
                  Update on {new Date(resume?.updatedAt).toLocaleDateString()}
                </p>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-1 right-1 group-hover:flex items-center hidden"
                >
                  <TrashIcon
                    onClick={() => deleteResume(resume?._id)}
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                  />
                  <PencilIcon
                    onClick={() => {
                      setEditResumeId(resume?._id);
                      setTitle(resume?.title);
                    }}
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                  />
                </div>
              </button>
            );
          })}
        </div>
        {showCreateResume && (
          <form
            className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center"
            onClick={() => setShowCreateResume(false)}
            onSubmit={createResume}
          >
            <div
              className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              />
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                Create a Resume
              </h2>

              <input
                className="w-full border mt-1 border-gray-500/30 focus:border-green-500 outline-none rounded py-2.5 px-4"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your resume title."
              />
              <button
                type="submit"
                className="w-full my-3 bg-green-700 active:scale-95 transition py-2.5 rounded text-white"
              >
                Create Resume
              </button>
            </div>
          </form>
        )}

        {showUpdateResume && (
          <form
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10 flex items-center justify-center p-4"
            onClick={() => setShowUpdateResume(false)}
            onSubmit={(e) => {
              uploadResume();
            }}
          >
            <div
              className="bg-white text-gray-600 max-w-lg w-full mx-auto md:p-8 p-6 text-left rounded-2xl shadow-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                onClick={() => {
                  setShowUpdateResume(false);
                  setTitle("");
                  setResume(null);
                }}
                aria-label="Close modal"
              >
                <XIcon className="size-5" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                  Update Resume
                </h2>
                <p className="text-sm text-gray-500 text-center mt-1">
                  Replace your existing resume with a new version
                </p>
              </div>

              {/* Title input */}
              <div className="mb-4">
                <label
                  htmlFor="resume-title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Resume Title
                </label>
                <input
                  id="resume-title"
                  className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none rounded-lg py-2.5 px-4 transition-colors"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Software Engineer – 2025"
                />
              </div>

              {/* File upload */}
              <div className="mb-5">
                <label
                  htmlFor="resume-input"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Resume File
                </label>
                <div
                  className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer
          ${
            resume
              ? "border-green-400 bg-green-50"
              : "border-gray-300 hover:border-green-400 hover:bg-green-50/50"
          }`}
                >
                  <input
                    id="resume-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setResume(file);
                    }}
                  />
                  <div className="flex flex-col items-center gap-2 pointer-events-none">
                    {resume ? (
                      <>
                        <FileCheckIcon className="size-8 text-green-600" />
                        <p className="text-green-700 font-medium">
                          {resume.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(resume.size / 1024).toFixed(0)} KB – click to change
                        </p>
                      </>
                    ) : (
                      <>
                        <UploadCloudIcon className="size-8 text-gray-400" />
                        <p className="text-gray-600">
                          Drop your resume here, or click to browse
                        </p>
                        <p className="text-xs text-gray-400">
                          Supports PDF, DOC, DOCX (max 5MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  className="flex-1 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition font-medium"
                  onClick={() => {
                    setShowUpdateResume(false);
                    setTitle("");
                    setResume(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-lg bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white font-medium transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!title.trim() || !resume}
                >
                  Update Resume
                </button>
              </div>
            </div>
          </form>
        )}

        {editResumeId && (
          <form
            className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center"
            onClick={() => setEditResumeId("")}
            onSubmit={editTitle}
          >
            <div
              className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                onClick={() => {
                  setEditResumeId("");
                  setTitle("");
                }}
              />
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                Edit Resume Title
              </h2>

              <input
                className="w-full border mt-1 border-gray-500/30 focus:border-green-500 outline-none rounded py-2.5 px-4"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your resume title."
              />
              <button
                type="submit"
                className="w-full my-3 bg-green-700 active:scale-95 transition py-2.5 rounded text-white"
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
