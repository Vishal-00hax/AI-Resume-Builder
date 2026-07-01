import React from "react";

const ClassicTemplate = ({ data, accentColor }) => {
  const { personal_info, professional_summary, skills, experience, education } =
    data;
  const themeColor = accentColor || "#4F46E5";

  return (
    <div
      className="max-w-4xl mx-auto p-12 bg-gray-50 text-gray-800 font-sans shadow-sm border-t-8"
      style={{ borderColor: themeColor }}
    >
      <header className="mb-10 flex flex-col items-center text-center">
        {personal_info.image && (
          <img
            src={personal_info.image}
            alt="Profile"
            className="w-28 h-28 rounded-full mb-5 object-cover border-4 shadow-sm"
            style={{ borderColor: themeColor }}
          />
        )}
        <h1 className="text-5xl font-semibold text-gray-900 tracking-tight mb-3">
          {personal_info.full_name}
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          {personal_info.profession}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            📍 {personal_info.location}
          </span>
          <span className="flex items-center gap-1">
            ✉️ {personal_info.email}
          </span>
          <span className="flex items-center gap-1">
            📱 {personal_info.phone}
          </span>
        </div>
      </header>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Profile Summary
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          {professional_summary}
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp._id} className="relative">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-md font-bold text-gray-900">
                    {exp.position}
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: themeColor }}
                  >
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  {exp.start_date} — {exp.is_current ? "Present" : exp.end_date}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Skills
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu._id} className="mb-4">
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
              <p className="text-xs text-gray-400 mt-1">
                {edu.start_date} — {edu.end_date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassicTemplate;
