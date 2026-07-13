import React from "react";

const ProfessionalTemplate = ({ data, accentColor, isBgRemoved }) => {
  const { personal_info, professional_summary, skills, experience, project } =
    data;

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white font-serif text-gray-900 shadow-sm">
      <header
        className="mb-6 border-b-2 pb-6 flex justify-between items-center"
        style={{ borderBottomColor: accentColor }}
      >
        <div>
          <h1
            className="text-3xl font-bold uppercase tracking-wider mb-2"
            style={{ color: accentColor }}
          >
            {personal_info.full_name}
          </h1>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
            <span>{personal_info.location}</span>
            <span>|</span>
            <span>{personal_info.phone}</span>
            <span>|</span>
            <span>{personal_info.email}</span>
            {personal_info.linkedin && (
              <>
                <span>|</span>
                <span>{personal_info.linkedin}</span>
              </>
            )}
          </div>
        </div>

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
      </header>

      {professional_summary && (
        <section className="mb-6">
          <p className="text-sm leading-relaxed">{professional_summary}</p>
        </section>
      )}

      <section className="mb-6">
        <h2
          className="text-lg font-bold uppercase border-b mb-4 pb-1"
          style={{ borderBottomColor: accentColor }}
        >
          Technical Skills
        </h2>
        <p className="text-sm leading-relaxed">
          <strong>Core Technologies:</strong> {skills.join(", ")}
        </p>
      </section>

      <section className="mb-6">
        <h2
          className="text-lg font-bold uppercase border-b mb-4 pb-1"
          style={{ borderBottomColor: accentColor }}
        >
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={exp._id || index}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-md">{exp.position}</h3>
                <span className="text-sm font-semibold">
                  {exp.start_date} – {exp.is_current ? "Present" : exp.end_date}
                </span>
              </div>
              <div className="text-sm italic mb-2">{exp.company}</div>
              <p className="text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2
          className="text-lg font-bold uppercase border-b mb-4 pb-1"
          style={{ borderBottomColor: accentColor }}
        >
          Key Projects
        </h2>
        <div className="space-y-4">
          {project.map((proj, index) => (
            <div key={proj._id || index}>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm">{proj.title}</h3>
                <span className="text-xs text-gray-600">
                  {proj.technologies.join(" • ")}
                </span>
              </div>
              <p className="text-sm leading-relaxed mt-1">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfessionalTemplate;
