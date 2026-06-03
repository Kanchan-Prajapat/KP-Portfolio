function Stats() {
  const stats = [
    {
      number: "4+",
      title: "Projects"
    },
    {
      number: "1",
      title: "Internship"
    },
    {
      number: "9.52",
      title: "CGPA"
    },
    {
      number: "10+",
      title: "Technologies"
    }
  ];

  return (
    <section
      className="
      py-16
      bg-slate-50
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        "
      >
        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          "
        >
          {stats.map((item) => (

            <div
              key={item.title}
              className="
              bg-white
              rounded-3xl
              p-8
              text-center
              border
              border-slate-200
              shadow-sm
              hover:shadow-lg
              transition
              "
            >

              <h2
                className="
                text-4xl
                font-bold
                text-blue-600
                "
              >
                {item.number}
              </h2>

              <p
                className="
                mt-2
                text-slate-600
                "
              >
                {item.title}
              </p>

            </div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;