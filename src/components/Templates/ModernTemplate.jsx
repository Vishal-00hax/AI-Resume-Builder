import React from "react";

const ModernTemplate = ({ data, accentColor, isBgRemoved }) => {
  const {
    personal_info,
    professional_summary,
    skills,
    experience,
    education,
    project, // Destructured project array
  } = data;

  return (
    <div className="max-w-4xl mx-auto bg-white flex min-h-264 shadow-sm font-sans">
      <aside
        className="w-1/3 p-8 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <div className="mb-12">
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
          <h1 className="text-3xl font-bold mb-2 leading-tight">
            {personal_info?.full_name}
          </h1>
          <p className="text-white/80 text-sm">{personal_info?.profession}</p>
        </div>

        <div className="mb-10 space-y-3 text-sm text-white/90">
          <p>{personal_info?.email}</p>
          <p>{personal_info?.phone}</p>
          <p>{personal_info?.location}</p>
          <p>{personal_info?.website}</p>
        </div>

        {skills?.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white/20 px-3 py-1 rounded text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </aside>

      <main className="w-2/3 p-10 text-gray-800">
        {professional_summary && (
          <section className="mb-10">
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: accentColor }}
            >
              Profile
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              {professional_summary}
            </p>
          </section>
        )}

        {experience?.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: accentColor }}
            >
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={exp._id || index}
                  className="relative pl-4 border-l-2"
                  style={{ borderColor: accentColor }}
                >
                  <div
                    className="absolute w-3 h-3 rounded-full -left-1.75 top-1.5"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  <h3 className="text-md font-semibold text-gray-900">
                    {exp.position}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{exp.company}</span>
                    <span>
                      {exp.start_date} -{" "}
                      {exp.is_current ? "Present" : exp.end_date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NEW: Projects Section */}
        {project?.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: accentColor }}
            >
              Projects
            </h2>
            <div className="space-y-6">
              {project.map((proj, index) => (
                <div
                  key={proj._id || index}
                  className="relative pl-4 border-l-2"
                  style={{ borderColor: accentColor }}
                >
                  <div
                    className="absolute w-3 h-3 rounded-full -left-1.75 top-1.5"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-md font-semibold text-gray-900">
                      {proj.title}
                    </h3>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium hover:underline"
                        style={{ color: accentColor }}
                      >
                        View Project ↗
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {proj.description}
                  </p>
                  {proj.technologies && proj.technologies.length > 0 && (
                    <p className="text-xs font-medium text-gray-500">
                      <span className="text-gray-700 font-semibold">
                        Tech Stack:{" "}
                      </span>
                      {proj.technologies.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {education?.length > 0 && (
          <section>
            <h2
              className="text-xl font-bold mb-6"
              style={{ color: accentColor }}
            >
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={edu._id || index} className="mb-4 last:mb-0">
                <h3 className="text-md font-semibold">
                  {edu.degree}{" "}
                  {edu.field_of_study ? `in ${edu.field_of_study}` : ""}
                </h3>
                <p className="text-sm text-gray-500">
                  {edu.institution} | {edu.graduation_date}
                </p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default ModernTemplate;
