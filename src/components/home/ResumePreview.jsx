import React from "react";
import ModernTemplate from "../Templates/ModernTemplate";
import ClassicTemplate from "../Templates/ClassicTemplate";
import DeveloperTemplate from "../Templates/DeveloperTemplate";
import ProfessionalTemplate from "../Templates/ProfessionalTemplate";
import MinimalistTemplate from "../Templates/MinimalistTemplate";

function ResumePreview({ data, template, accentColor, classes = "" }) {
  const renderTemplate = () => {
    switch (template) {
      case "modren":
        return <ModernTemplate data={data} accentColor={accentColor} />;
        break;

      case "minimalist":
        return <MinimalistTemplate data={data} accentColor={accentColor} />;
        break;

      case "classic":
        return <ClassicTemplate data={data} accentColor={accentColor} />;
        break;

      case "developer":
        return <DeveloperTemplate data={data} accentColor={accentColor} />;
        break;

      default:
        return <ProfessionalTemplate data={data} accentColor={accentColor} />;
        break;
    }
  };
  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        className={
          "border border-gray-200 print:shadow-none print:border-none" + classes
        }
      >
        {renderTemplate()}
      </div>
      <style jsx="true">{`
        @page {
          size: letter;
          margin: 0;
        }
        @media print {
          html,
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          body > *:not(#resume-preview) {
            display: none !important;
          }
          #resume-preview,
          #resume-preview * {
            visibility: visible;
          }
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            box-shadow: none !important;
            border: none !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ResumePreview;
