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
          "border border-gray-200 print:shadow-none print:border-none bg-white" +
          classes
        }
      >
        {renderTemplate()}
      </div>
      <style>{`
  @page {
    size: letter;
    margin: 0;
  }
  @media print {
    /* Hide ALL text/elements by default */
    body * {
      visibility: hidden;
    }
    
    /* Make the resume and all its children visible */
    #resume-preview, #resume-preview * {
      visibility: visible;
    }
    
    /* Position the resume at the absolute top-left of the page */
    #resume-preview {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      margin: 0;
      padding: 0;
      border: none !important;
      box-shadow: none !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }
`}</style>
    </div>
  );
}

export default ResumePreview;
