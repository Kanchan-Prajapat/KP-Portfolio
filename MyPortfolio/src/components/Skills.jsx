import {
  Code2,
  Server,
  Database,
  Wrench
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <Code2 size={28} />,
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS"
      ]
    },

    {
      title: "Backend",
      icon: <Server size={28} />,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs"
      ]
    },

    {
      title: "Database",
      icon: <Database size={28} />,
      skills: [
        "MongoDB",
        "MySQL"
      ]
    },

    {
      title: "Tools",
      icon: <Wrench size={28} />,
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

        <div className="text-center">

          <span className="text-blue-600 font-semibold">
            MY TECH STACK
          </span>

          <h2
            className="
            mt-3
            text-4xl
            md:text-5xl
            font-bold
            text-slate-900
            "
          >
            Skills & Technologies
          </h2>

          <p
            className="
            mt-4
            text-slate-600
            max-w-2xl
            mx-auto
            "
          >
            Technologies and tools I use to build
            scalable, responsive and modern web
            applications.
          </p>

        </div>

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
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-500
                  to-sky-400
                  text-white
                  flex
                  items-center
                  justify-center
                  "
                >
                  {group.icon}
                </div>

                <div>
                  <h3
                    className="
                    text-2xl
                    font-bold
                    text-slate-900
                    "
                  >
                    {group.title}
                  </h3>

                  <p className="text-slate-500 text-sm">
                    {group.skills.length} Technologies
                  </p>
                </div>

              </div>

              <div
                className="
                flex
                flex-wrap
                gap-3
                mt-8
                "
              >

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-blue-50
                    text-blue-700
                    font-medium
                    border
                    border-blue-100
                    hover:bg-blue-600
                    hover:text-white
                    transition
                    cursor-default
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