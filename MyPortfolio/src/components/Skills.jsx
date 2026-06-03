function Skills() {

  const skillGroups = [
    {
      title: "Frontend",
      emoji: "🎨",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Three.js"
      ]
    },

    {
      title: "Backend",
      emoji: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs"
      ]
    },

    {
      title: "Database",
      emoji: "🗄️",
      skills: [
        "MongoDB",
        "MySQL"
      ]
    },

    {
      title: "Tools",
      emoji: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Linux"
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-slate-900
            "
          >
            Skills
          </h2>

          <p
            className="
            mt-4
            text-slate-600
            "
          >
            Technologies and tools I use to build modern applications.
          </p>

        </div>

        {/* Skill Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          mt-16
          "
        >

          {skillGroups.map((group) => (

            <div
              key={group.title}
              className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-8
              hover:shadow-xl
              transition
              "
            >

              <div className="flex items-center gap-3">

                <span className="text-3xl">
                  {group.emoji}
                </span>

                <h3
                  className="
                  text-2xl
                  font-semibold
                  text-slate-900
                  "
                >
                  {group.title}
                </h3>

              </div>

              <div
                className="
                flex
                flex-wrap
                gap-3
                mt-6
                "
              >

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                    px-4
                    py-2
                    bg-blue-50
                    text-blue-700
                    rounded-full
                    text-sm
                    font-medium
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;