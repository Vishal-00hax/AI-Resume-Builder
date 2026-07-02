import React from "react";

const ModernTemplate = ({ data, accentColor }) => {
  const { personal_info, professional_summary, skills, experience, education } =
    data;
  const themeColor = accentColor || "#374151";

  return (
    <div className="max-w-4xl mx-auto bg-white flex min-h-264 shadow-sm font-sans">
      <aside
        className="w-1/3 p-8 text-white"
        style={{ backgroundColor: themeColor }}
      >
        <div className="mb-12">
          {personal_info.image && (
            <img
              src={personal_info.image}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/20"
            />
          )}
          <h1 className="text-3xl font-bold mb-2 leading-tight">
            {personal_info.full_name}
          </h1>
          <p className="text-white/80 text-sm">{personal_info.profession}</p>
        </div>

        <div className="mb-10 space-y-3 text-sm text-white/90">
          <p>{personal_info.email}</p>
          <p>{personal_info.phone}</p>
          <p>{personal_info.location}</p>
          <p>{personal_info.website}</p>
        </div>

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
      </aside>

      <main className="w-2/3 p-10 text-gray-800">
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: themeColor }}>
            Profile
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            {professional_summary}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-6" style={{ color: themeColor }}>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div
                key={exp._id}
                className="relative pl-4 border-l-2"
                style={{ borderColor: themeColor }}
              >
                <div
                  className="absolute w-3 h-3 rounded-full -left-1.75 top-1.5"
                  style={{ backgroundColor: themeColor }}
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

        <section>
          <h2 className="text-xl font-bold mb-6" style={{ color: themeColor }}>
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu._id} className="mb-4">
              <h3 className="text-md font-semibold">
                {edu.degree} in {edu.field_of_study}
              </h3>
              <p className="text-sm text-gray-500">
                {edu.institution} | {edu.graduation_date}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ModernTemplate;
