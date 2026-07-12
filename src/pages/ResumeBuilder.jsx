import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import PersonalInfoForm from "../components/PersonalInfoForm";
import ProfessionalSummary from "../components/PrfessionalSummary";
import ExperienceForm from "../components/ExperienceForm";
import EducationForm from "../components/EducationForm";
import ResumePreview from "../components/home/ResumePreview";
import TemplateSelector from "../components/TemplateSelector";
import ProjectsForm from "../components/ProjectsForm";
import SkillsForm from "../components/SkillsForm";
import ColorPicker from "../components/ColorPicker";
import api from "../components/utils/axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  ArrowLeftIcon,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderIcon,
  GraduationCap,
  Sparkle,
  User,
  Share2,
  Download,
  EyeOffIcon,
  EyeIcon,
  ToyBrick,
} from "lucide-react";

function ResumeBuilder() {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState({
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "minimalist",
    accent_color: "#3B82F6",
    public: true,
  });

  console.log("Resume Data", resumeData);

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((store) => store.auth);

  const loadExistingResume = async () => {
    try {
      const resume = await api.get(`/api/resume/get/${resumeId}`, {
        headers: { Authorization: `Brare ${token}` },
      });

      const apiResumeData = resume.data.resume;

      setResumeData({
        ...apiResumeData,
        personal_info: apiResumeData.personal_info || {},
        professional_summary: apiResumeData.professional_summary || "",
        experience: apiResumeData.experience || [],
        education: apiResumeData.education || [],
        project: apiResumeData.project || [],
        skills: apiResumeData.skills || [],
        template: apiResumeData.template || "minimalist",
        accent_color: apiResumeData.accent_color || "#3B82F6",
        public: apiResumeData.public || true,
      });

      setRemoveBackground(
        apiResumeData.personal_info?.removeBackground ?? false,
      );

      //Share pdf title
      document.title = apiResumeData.title;
    } catch (err) {
      const errText =
        err.response.message || err.response || "Something went wrong";
      toast.error(errText);
    }
  };

  useEffect(() => {
    loadExistingResume();
  }, [resumeId]);

  const changeResumeVisibility = async () => {
    setResumeData({ ...resumeData, public: !resumeData.public });
  };

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Summary", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Projects", icon: FolderIcon },
    { id: "skills", name: "Skills", icon: Sparkle },
  ];

  const activeSection = sections[activeSectionIndex];

  const progressPercent =
    sections.length > 1
      ? (activeSectionIndex / (sections.length - 1)) * 100
      : 0;

  const handleShare = () => {
    const baseUrl = window.location.href.split("/app")[0];
    const resumeUrl = `${baseUrl}/view/${resumeId}`;

    if (navigator.share) {
      navigator
        .share({
          title: document.title || "My Resume",
          text: "Check out my resume!",
          url: resumeUrl,
        })
        .catch((error) => {
          if (error.name !== "AbortError") {
            prompt("Copy this link:", resumeUrl);
          }
        });
    } else {
      prompt("Copy this link:", resumeUrl);
    }
  };

  const downloadResume = () => {
    window.print();
  };

  const saveChanges = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("resumeId", resumeId);
      formData.append("removeBackground", String(removeBackground));

      const image = resumeData?.personal_info?.image;
      const senitizedData = JSON.parse(JSON.stringify(resumeData));

      if (senitizedData.personal_info) {
        delete senitizedData.personal_info.image;
      }
      formData.append("resumeData", JSON.stringify(resumeData));

      formData.append("image", image);

      const response = await api.patch("/api/resume/update", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const apiResumeData = response.data.resume;

      setResumeData({
        ...apiResumeData,
        personal_info: apiResumeData.personal_info || {},
        professional_summary: apiResumeData.professional_summary || "",
        experience: apiResumeData.experience || [],
        education: apiResumeData.education || [],
        project: apiResumeData.project || [],
        skills: apiResumeData.skills || [],
        template: apiResumeData.template || "minimalist",
        accent_color: apiResumeData.accent_color || "#3B82F6",
        public: apiResumeData.public || true,
      });

      if (response.data.success === true) {
        toast.success("Saved Changes");
      }
    } catch (err) {
      const errText =
        err.response?.data?.message || err.message || "Something went wrong";
      toast.error(errText);
    } finally {
      setLoading(false);
    }
  };

  const handleBgToggle = (newValue) => {
    setRemoveBackground(newValue);
    setResumeData((prev) => ({
      ...prev,
      personal_info: {
        ...prev.personal_info,
        removeBackground: newValue,
      },
    }));
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6 print:hidden">
        <Link
          to={"/app"}
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
        >
          <ArrowLeftIcon className="size-4" /> Back to Dashboard
        </Link>
        {/* Toolbar: Share & Download */}
        <div className="flex flex-wrap items-center justify-end gap-3 mt-4">
          {resumeData.public && (
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              <Share2 className="size-4" />
              Share
            </button>
          )}
          <button
            type="button"
            onClick={changeResumeVisibility}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-500 border border-transparent rounded-lg shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
          >
            {resumeData.public === true ? (
              <EyeIcon className="size-4" />
            ) : (
              <EyeOffIcon className="size-4" />
            )}
            {resumeData.public === true ? "Public" : "Private"}
          </button>
          <button
            type="button"
            onClick={downloadResume}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            <Download className="size-4" />
            Download PDF
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* ----Left Panel---- */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden print:hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-6">
              {/* Step Indicator */}
              <div className="relative mb-6">
                {/* Background track (full width) */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 bg-gray-200" />

                {/* Progress fill */}
                <div
                  className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 bg-linear-to-r from-green-500 to-green-600 transition-all duration-500"
                  style={{
                    width: `${progressPercent}%`,
                  }}
                />
              </div>

              {/* Optional: show current section name */}
              <div className="text-center mt-2">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Navigation buttons */}
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveSectionIndex((prev) => Math.max(prev - 1))
                      }
                      disabled={activeSectionIndex === 0}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border transition-all duration-200 ${
                        activeSectionIndex === 0
                          ? "text-gray-400 bg-gray-100 border-gray-200 cursor-not-allowed shadow-none"
                          : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-400 shadow-sm hover:shadow active:scale-95"
                      }`}
                    >
                      <ChevronLeft className="size-4" />
                      Back
                    </button>

                    <TemplateSelector
                      selectedTemplate={resumeData.template}
                      onChange={(template) =>
                        setResumeData((prev) => ({ ...prev, template }))
                      }
                    />

                    <ColorPicker
                      selectedColor={resumeData.accent_color}
                      onChange={(color) =>
                        setResumeData((prev) => ({
                          ...prev,
                          accent_color: color,
                        }))
                      }
                    />
                    {activeSectionIndex < sections.length - 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSectionIndex((prev) => Math.max(prev + 1))
                        }
                        className="flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-md text-white shadow-md hover:shadow-lg hover:shadow-green-500/25 active:scale-95 bg-linear-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 border-0 transition-all duration-200"
                      >
                        Next
                        <ChevronRight className="size-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Form Content */}
                <div className="space-y-6">
                  {activeSection.id === "personal" && (
                    <PersonalInfoForm
                      data={resumeData.personal_info}
                      accent_color={resumeData.accent_color}
                      onChange={(data) =>
                        setResumeData((perv) => ({
                          ...perv,
                          personal_info: data,
                        }))
                      }
                      loading={loading}
                      removeBackground={removeBackground}
                      onRemoveBackgroundToggle={handleBgToggle}
                    />
                  )}
                  {activeSection.id === "summary" && (
                    <ProfessionalSummary
                      data={resumeData.professional_summary}
                      onChange={(data) =>
                        setResumeData((perv) => ({
                          ...perv,
                          professional_summary: data,
                        }))
                      }
                      setResumeData={setResumeData}
                    />
                  )}
                  {activeSection.id === "experience" && (
                    <ExperienceForm
                      data={resumeData.experience}
                      onChange={(data) =>
                        setResumeData((perv) => ({
                          ...perv,
                          experience: data,
                        }))
                      }
                    />
                  )}
                  {activeSection.id === "education" && (
                    <EducationForm
                      data={resumeData.education}
                      onChange={(data) =>
                        setResumeData((perv) => ({
                          ...perv,
                          education: data,
                        }))
                      }
                    />
                  )}
                  {activeSection.id === "projects" && (
                    <ProjectsForm
                      data={resumeData.project}
                      onChange={(data) =>
                        setResumeData((perv) => ({
                          ...perv,
                          project: data,
                        }))
                      }
                    />
                  )}
                  {activeSection.id === "skills" && (
                    <SkillsForm
                      data={resumeData.skills}
                      onChange={(data) =>
                        setResumeData((perv) => ({
                          ...perv,
                          skills: data,
                        }))
                      }
                    />
                  )}
                </div>
                <button
                  onClick={saveChanges}
                  disabled={loading}
                  className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium mt-4"
                >
                  {loading === true ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
          {/* Right Panel */}
          <div className="lg:col-span-7 max-lg:mt-6">
            <div>{/* Buttons */}</div>
            {/* Resume Preview */}
            <ResumePreview
              data={resumeData}
              template={resumeData.template}
              accentColor={resumeData.accent_color}
              removeBackground={
                resumeData.personal_info?.removeBackground || false
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
