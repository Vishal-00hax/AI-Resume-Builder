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
import ColorPicker from "../components/ColorPicker";
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
} from "lucide-react";

function ResumeBuilder() {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "minimalist",
    accent_color: "#3B82F6",
    public: false,
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const loadExistingResume = async () => {
    const resume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.title;
    }
  };

  useEffect(() => {
    loadExistingResume();
  }, [resumeId]);

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

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to={"/app"}
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
        >
          <ArrowLeftIcon className="size-4" /> Back to Dashboard
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* ----Left Panel---- */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
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
                <div className="flex flex-wrap items-center gap-4">
                  <TemplateSelector
                    selectedTemplate={resumeData.template}
                    onChange={(template) =>
                      setResumeData((prev) => ({ ...prev, template }))
                    }
                  />
                  {
                    <ColorPicker
                      selectedColor={resumeData.accent_color}
                      onChange={(color) =>
                        setResumeData((prev) => ({
                          ...prev,
                          accent_color: color,
                        }))
                      }
                    />
                  }
                </div>
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSectionIndex((prev) => Math.max(prev - 1))
                    }
                    disabled={activeSectionIndex === 0}
                    className={`
      flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
      ${
        activeSectionIndex === 0
          ? "text-gray-400 cursor-not-allowed bg-gray-100 border border-gray-200"
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 active:scale-95 border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow"
      }
    `}
                  >
                    <ChevronLeft className="size-4" />
                    Back
                  </button>

                  {activeSectionIndex < sections.length - 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveSectionIndex((prev) => Math.max(prev + 1))
                      }
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 bg-linear-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                    >
                      Next
                      <ChevronRight className="size-4" />
                    </button>
                  )}
                </div>
                {/* Form Content */}
                <div className="space-y-6">
                  {activeSection.id === "personal" && (
                    <PersonalInfoForm
                      data={resumeData.personal_info}
                      onChange={(data) =>
                        setResumeData((perv) => ({
                          ...perv,
                          personal_info: data,
                        }))
                      }
                      removeBackground={removeBackground}
                      setRemoveBackground={setRemoveBackground}
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
                </div>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
