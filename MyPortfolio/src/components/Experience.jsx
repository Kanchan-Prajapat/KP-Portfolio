import { Briefcase, GraduationCap } from "lucide-react";

function Experience() {
  const experiences = [
    {
      year: "2026",
      title: "Linux RHCSA Training",
      organization: "RedHat RCAT",
      icon: <GraduationCap size={20} />,
      description:
        "Completed RHCSA training covering Linux administration, user management, networking, and system operations."
    },

    {
      year: "2025",
      title: "MERN Stack Intern",
      organization: "Zeetron Networks",
      icon: <Briefcase size={20} />,
      description:
        "Learned MERN stack development, Git/GitHub workflows, and built collaborative projects using modern web technologies."
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

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Experience
          </h2>

          <p className="mt-4 text-slate-600">
            My professional and learning journey.
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
                bg-slate-50
                border
                border-slate-200
                rounded-3xl
                p-6
                hover:shadow-lg
                transition
                "
              >

                <span className="text-blue-600 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2 text-slate-900">
                  {item.title}
                </h3>

                <h4 className="text-slate-600 mt-1">
                  {item.organization}
                </h4>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;