import React from "react";

const MinimalistTemplate = ({ data, accentColor }) => {
  const {
    personal_info,
    professional_summary,
    skills,
    experience,
    education,
    project,
  } = data;
  const themeColor = accentColor || "#111827";

  return (
    <div className="max-w-4xl mx-auto p-12 bg-white text-gray-800 font-sans shadow-sm">
      <header className="mb-10 flex flex-col items-center text-center">
        {personal_info.image && (
          <img
            src={personal_info.image}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-5 object-cover"
          />
        )}
        <h1
          className="text-4xl font-light tracking-wide mb-2"
          style={{ color: themeColor }}
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
          style={{ color: themeColor }}
        >
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp._id} className="grid grid-cols-12 gap-4">
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

      <section className="mb-10">
        <h2
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: themeColor }}
        >
          Projects
        </h2>
        <div className="space-y-6">
          {project.map((proj) => (
            <div key={proj._id}>
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
          style={{ color: themeColor }}
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
