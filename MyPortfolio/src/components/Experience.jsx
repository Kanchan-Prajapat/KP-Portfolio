import { Briefcase, GraduationCap } from "lucide-react";

function Experience() {
 const experiences = [
  {
    year: "2025",
    title: "MERN Stack Developer Intern",
    organization: "Zeetron Networks",
    icon: <Briefcase size={20} />,
    skills: ["React", "Node.js", "MongoDB", "Git"],
    description:
      "Worked on MERN stack applications, collaborated using Git/GitHub workflows, and contributed to responsive web projects."
  },

  {
    year: "2026",
    title: "Linux RHCSA Training",
    organization: "RedHat RCAT",
    icon: <GraduationCap size={20} />,
    skills: ["Linux", "Networking", "Shell", "System Admin"],
    description:
      "Completed RHCSA training covering Linux administration, networking, user management, and troubleshooting."
  }
];

  return (
    <section
      id="experience"
      className="py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">


  <span className="text-blue-600 font-semibold">
    MY JOURNEY
  </span>

  <h2
    className="
    mt-3
    text-4xl
    md:text-5xl
    font-bold
    "
  >
    Experience & Learning
  </h2>

  <p className="mt-4 text-slate-600">
    My professional growth, internships and technical learning path.
  </p>

</div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div
            className="
            absolute
            left-5
            top-0
            bottom-0
            w-1
            bg-blue-200
            "
          />

          {experiences.map((item, index) => (

            <div
              key={index}
              className="
              relative
              pl-16
              mb-12
              "
            >

              {/* Dot */}

              <div
                className="
                absolute
                left-0
                top-2
                w-10
                h-10
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                shadow-md
                "
              >
                {item.icon}
              </div>

              {/* Card */}

              <div
  className="
  bg-white
  border
  border-slate-200
  rounded-3xl
  p-8
  shadow-sm
  hover:shadow-xl
  hover:-translate-y-1
  transition-all
  duration-300
  "
>
  <span className="text-blue-600 font-semibold">
    {item.year}
  </span>

  <h3
    className="
    text-2xl
    font-bold
    mt-2
    text-slate-900
    "
  >
    {item.title}
  </h3>

  <p
    className="
    text-slate-500
    mt-1
    "
  >
    {item.organization}
  </p>

  <p
    className="
    mt-4
    text-slate-600
    leading-relaxed
    "
  >
    {item.description}
  </p>

  <div className="flex flex-wrap gap-2 mt-5">
    {item.skills.map((skill) => (
      <span
        key={skill}
        className="
        px-3
        py-1
        rounded-full
        bg-blue-50
        text-blue-700
        text-sm
        border
        border-blue-100
        "
      >
        {skill}
      </span>
    ))}
  </div>
</div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;