import { MapPin, GraduationCap, Briefcase, Rocket } from "lucide-react";

function About() {
  const infoCards = [
    {
      icon: <MapPin size={28} />,
      title: "Location",
      value: "Jaipur, Rajasthan",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Education",
      value: "B.Tech CSE • CGPA 9.52",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Specialization",
      value: "MERN Stack Development",
    },
    {
      icon: <Rocket size={28} />,
      title: "Goal",
      value: "Software Engineer",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span
            className="
            text-blue-600
            font-semibold
            uppercase
            tracking-wider
            "
          >
            About Me
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
            Passionate About Building
            <span className="text-blue-600">
              {" "}Digital Solutions
            </span>
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            max-w-3xl
            mx-auto
            leading-relaxed
            "
          >
            I'm Kanchan Prajapat, a Computer Science Engineering
            student and aspiring Full Stack Developer. I enjoy
            transforming ideas into responsive web applications,
            solving real-world problems, and continuously learning
            new technologies to create impactful digital experiences.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          mt-16
          "
        >
          {infoCards.map((item) => (
            <div
              key={item.title}
              className="
              group
              bg-gradient-to-b
              from-white
              to-blue-50
              border
              border-blue-100
              rounded-3xl
              p-8
              text-center
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
              "
            >

              <div
                className="
                w-14
                h-14
                mx-auto
                rounded-2xl
                bg-blue-100
                text-blue-600
                flex
                items-center
                justify-center
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                mt-5
                text-xl
                font-bold
                text-slate-900
                "
              >
                {item.title}
              </h3>

              <p
                className="
                mt-2
                text-slate-600
                "
              >
                {item.value}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;