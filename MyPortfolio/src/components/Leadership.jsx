function Leadership() {
  const responsibilities = [
    {
      title: "Class Representative",
      description:
        "Coordinated communication between students and faculty members."
    },

    {
      title: "Girl Coordinator",
      description:
        "Supported participant management and coordination during college events."
    },

    {
      title: "Escorting & Disciplinary Team Member",
      description:
        "Managed discipline and coordination during technical and cultural events."
    },

    {
      title: "Technical Event Volunteer",
      description:
        "Assisted in organizing and managing technical events and activities."
    }
  ];

  return (
    <section
      id="leadership"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Leadership & Activities
          </h2>

          <p className="mt-4 text-slate-600">
            Responsibilities that strengthened my communication,
            teamwork and leadership skills.
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

          {responsibilities.map((item) => (

            <div
              key={item.title}
              className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-8
              hover:shadow-lg
              transition
              "
            >

              <h3
                className="
                text-xl
                font-bold
                text-slate-900
                "
              >
                {item.title}
              </h3>

              <p
                className="
                mt-3
                text-slate-600
                leading-relaxed
                "
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Leadership;