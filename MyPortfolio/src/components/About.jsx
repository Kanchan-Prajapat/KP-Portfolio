function About() {
  const infoCards = [
    {
      icon: "📍",
      title: "Location",
      value: "Jaipur, Rajasthan"
    },
    {
      icon: "🎓",
      title: "Education",
      value: "B.Tech CSE | CGPA 9.52"
    },
    {
      icon: "💼",
      title: "Role",
      value: "MERN Stack Developer"
    },
    {
      icon: "🚀",
      title: "Status",
      value: "Open to Opportunities"
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center">

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-slate-900
            "
          >
            About Me
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
            I'm a Computer Science student and Full
            Stack Developer passionate about building
            scalable web applications, solving
            real-world problems, and continuously
            learning modern technologies.
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
              bg-slate-50
              border
              border-slate-200
              rounded-3xl
              p-6
              text-center
              hover:shadow-lg
              transition
              "
            >

              <div className="text-4xl">
                {item.icon}
              </div>

              <h3
                className="
                mt-4
                font-semibold
                text-lg
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