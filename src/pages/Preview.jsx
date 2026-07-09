import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { dummyResumeData } from "../assets/assets";
import ResumePreview from "../components/home/ResumePreview";
import Loader from "../components/Loader";

function Preview() {
  const { resumeId } = useParams();
  const [resumeData, setresumeData] = useState(null);
  const [loading, setLoaading] = useState(true);

  const loadResumeData = async () => {
    setresumeData(
      dummyResumeData.find((resume) => resume._id === resumeId || null),
    );
  };

  useEffect(() => {
    loadResumeData();
  }, [resumeId]);

  console.log(resumeData);

  return resumeData ? (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accent_color}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  ) : (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <p className="text-2xl font-medium text-gray-700 mb-2">
            Resume not found
          </p>
          <p className="text-sm text-gray-500">
            The resume you’re looking for doesn’t exist.
          </p>
        </div>
      )}
    </div>
  );
}

export default Preview;
