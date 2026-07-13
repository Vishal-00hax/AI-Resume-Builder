import React from "react";

const ClassicTemplate = ({ data, accentColor, isBgRemoved }) => {
  const {
    personal_info,
    professional_summary,
    skills,
    experience,
    education,
    project, // Destructured project array
  } = data;

  return (
    <div
      className="max-w-4xl mx-auto p-12 bg-gray-50 text-gray-800 font-sans shadow-sm border-t-8"
      style={{ borderColor: accentColor }}
    >
      <header className="mb-10 flex flex-col items-center text-center">
        {personal_info?.image && (
          <div
            className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white/20"
            style={{
              backgroundColor: isBgRemoved ? accentColor : "transparent",
            }}
          >
            <img
              src={personal_info.image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="text-5xl font-semibold text-gray-900 tracking-tight mb-3">
          {personal_info?.full_name}
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          {personal_info?.profession}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            📍 {personal_info?.location}
          </span>
          <span className="flex items-center gap-1">
            ✉️ {personal_info?.email}
          </span>
          <span className="flex items-center gap-1">
            📱 {personal_info?.phone}
          </span>
        </div>
      </header>

      {professional_summary && (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Profile Summary
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            {professional_summary}
          </p>
        </div>
      )}

      {experience?.length > 0 && (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp._id || index} className="relative">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-md font-bold text-gray-900">
                      {exp.position}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: accentColor }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {exp.start_date} —{" "}
                    {exp.is_current ? "Present" : exp.end_date}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* NEW: Projects Section */}
      {project?.length > 0 && (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Projects
          </h2>
          <div className="space-y-6">
            {project.map((proj, index) => (
              <div
                key={proj._id || index}
                className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-md font-bold text-gray-900">
                    {proj.title}
                  </h3>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold hover:underline"
                      style={{ color: accentColor }}
                    >
                      View Project ↗
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {proj.description}
                </p>
                {proj.technologies && proj.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {skills?.length > 0 && (
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
        )}

        {education?.length > 0 && (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={edu._id || index} className="mb-4 last:mb-0">
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Graduation Date : {edu.graduation_date}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassicTemplate;
