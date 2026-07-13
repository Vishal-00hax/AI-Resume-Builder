import React from "react";

const MinimalistTemplate = ({ data, accentColor, isBgRemoved }) => {
  const {
    personal_info,
    professional_summary,
    skills,
    experience,
    education,
    project,
  } = data;

  return (
    <div className="max-w-4xl mx-auto p-12 bg-white text-gray-800 font-sans shadow-sm">
      <header className="mb-10 flex flex-col items-center text-center">
        {personal_info.image && (
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
        <h1
          className="text-4xl font-light tracking-wide mb-2"
          style={{ color: accentColor }}
        >
          {personal_info.full_name}
        </h1>
        <p className="text-sm text-gray-500 tracking-widest uppercase">
          {personal_info.profession}
        </p>
        <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
          <span>{personal_info.email}</span>
          <span>•</span>
          <span>{personal_info.phone}</span>
          <span>•</span>
          <span>{personal_info.location}</span>
        </div>
      </header>

      {professional_summary && (
        <section className="mb-10">
          <p className="text-sm leading-relaxed text-gray-600">
            {professional_summary}
          </p>
        </section>
      )}

      <section className="mb-10">
        <h2
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: accentColor }}
        >
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={exp._id || index} className="grid grid-cols-12 gap-4">
              <div className="col-span-3 text-xs text-gray-500 mt-1">
                {exp.start_date} — {exp.is_current ? "Present" : exp.end_date}
              </div>
              <div className="col-span-9">
                <h3 className="text-sm font-semibold text-gray-900">
                  {exp.position}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Education Section */}
      <section className="mb-10">
        <h2
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: accentColor }}
        >
          Education
        </h2>
        <div className="space-y-6">
          {education?.map((edu, index) => (
            <div key={edu._id || index} className="grid grid-cols-12 gap-4">
              <div className="col-span-3 text-xs text-gray-500 mt-1">
                {edu.graduation_date}
              </div>
              <div className="col-span-9">
                <h3 className="text-sm font-semibold text-gray-900">
                  {edu.field_of_study}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{edu.institution}</p>
                {edu.score && (
                  <p className="text-xs text-gray-500">
                    Grade / Score: {edu.gpa}
                  </p>
                )}
                {edu.description && (
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: accentColor }}
        >
          Projects
        </h2>
        <div className="space-y-6">
          {project.map((proj, index) => (
            <div key={proj._id || index}>
              <h3 className="text-sm font-semibold text-gray-900">
                {proj.title}
              </h3>
              <p className="text-xs text-gray-500 mb-1">
                {proj.technologies.join(", ")}
              </p>
              <p className="text-sm text-gray-600">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: accentColor }}
        >
          Skills
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {skills.map((skill, index) => (
            <span key={index} className="text-sm text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MinimalistTemplate;
