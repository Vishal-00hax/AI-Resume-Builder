import React from "react";

const DeveloperTemplate = ({ data, accentColor }) => {
  const {
    personal_info,
    professional_summary,
    skills,
    experience,
    project,
    education,
  } = data;
  const themeColor = accentColor || "#3B82F6";

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white text-slate-800 shadow-sm">
      <header className="mb-8 flex justify-between items-end border-b-2 border-slate-200 pb-6">
        <div className="flex items-center gap-6">
          {personal_info.image && (
            <img
              src={personal_info.image}
              alt="Profile"
              className="w-24 h-24 rounded-lg object-cover border-2 border-slate-100"
            />
          )}
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              {personal_info.full_name}
            </h1>
            <p
              className="text-lg font-medium mt-1"
              style={{ color: themeColor }}
            >
              {personal_info.profession}
            </p>
          </div>
        </div>
        <div className="text-right text-sm text-slate-500 font-mono space-y-1">
          <p>{personal_info.email}</p>
          <p>{personal_info.phone}</p>
          <p>{personal_info.website}</p>
          <p>{personal_info.linkedin}</p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span style={{ color: themeColor }}>{"//"}</span> Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp._id}>
                  <h3 className="font-bold text-slate-800 text-lg">
                    {exp.company}
                  </h3>
                  <div className="text-sm font-medium text-slate-600 mb-2">
                    {exp.position} | {exp.start_date} -{" "}
                    {exp.is_current ? "Present" : exp.end_date}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span style={{ color: themeColor }}>{"//"}</span> Architecture &
              Projects
            </h2>
            <div className="space-y-5">
              {project.map((proj) => (
                <div
                  key={proj._id}
                  className="bg-slate-50 p-4 rounded-md border border-slate-100"
                >
                  <h3 className="font-bold text-slate-800">{proj.title}</h3>
                  <p
                    className="text-xs font-mono mb-2 mt-1"
                    style={{ color: themeColor }}
                  >
                    {proj.technologies.join(" ")}
                  </p>
                  <p className="text-sm text-slate-600">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-1 space-y-8">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              About
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {professional_summary}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-slate-100 text-slate-700 text-xs font-mono px-2 py-1 rounded border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu._id} className="mb-3">
                <h3 className="text-sm font-bold text-slate-800">
                  {edu.degree}
                </h3>
                <p className="text-xs text-slate-500">{edu.field_of_study}</p>
                <p className="text-xs text-slate-400 mt-1">{edu.institution}</p>
                <p className="text-xs text-slate-400 mt-1">
                  Start : {edu.start_date}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  End : {edu.end_date}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTemplate;
