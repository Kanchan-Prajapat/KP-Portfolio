import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-600 font-semibold">
            MY WORK
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
            Featured Projects
          </h2>

          <p
            className="
    mt-4
    text-slate-600
    max-w-2xl
    mx-auto
    "
          >
            A selection of projects showcasing my experience
            in full-stack development, educational platforms,
            business applications, and modern web solutions.
          </p>

        </div>
        <div className="mt-20 space-y-28">

          {projects.map((project, index) => (

            <div
              key={project.title}
              className="
              grid
              md:grid-cols-2
              gap-12
              items-center
              "
            >

              {/* Image */}

              <div
                className={`
                ${index % 2 !== 0 ? "md:order-2" : ""}
                `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
rounded-3xl
border
border-slate-200
shadow-xl
hover:scale-[1.02]
transition-all
duration-500
"
                />
              </div>

              {/* Content */}

              <div
                className={`
                ${index % 2 !== 0 ? "md:order-1" : ""}
                `}
              >

                <h3
                  className="
                  text-3xl
                  font-bold
                  text-slate-900
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  mt-5
                  text-slate-600
                  leading-relaxed
                  "
                >
                  {project.description}
                </p>

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-6
                  "
                >

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                      px-4
                      py-2
                     bg-white
border
border-blue-100
text-blue-700
font-medium
shadow-sm
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                {
  project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="
bg-blue-600
hover:bg-blue-700
text-white
font-medium
px-6
py-3
rounded-xl
transition
"
    >
      Live Demo
    </a>
  )
}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                   className="
border
border-slate-300
text-slate-700
hover:border-blue-600
hover:text-blue-600
font-medium
px-6
py-3
rounded-xl
transition
"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;