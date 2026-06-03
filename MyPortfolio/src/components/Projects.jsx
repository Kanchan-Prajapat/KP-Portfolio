import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-slate-600">
            Some of my recent work.
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
                  shadow-lg
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
                      bg-blue-50
                      text-blue-700
                      rounded-full
                      text-sm
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    bg-blue-600
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    "
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    border
                    border-blue-600
                    text-blue-600
                    px-5
                    py-3
                    rounded-xl
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