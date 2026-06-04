function Stats() {
  const stats = [
    {
      number: "4+",
      title: "Projects Completed",
    },
    {
      number: "1",
      title: "Internship",
    },
    {
      number: "9.52",
      title: "CGPA",
    },
    {
      number: "10+",
      title: "Technologies",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item) => (
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
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-extrabold
                  text-blue-600
                "
              >
                {item.number}
              </h2>

              <div
                className="
                  w-12
                  h-1
                  bg-blue-500
                  mx-auto
                  mt-3
                  rounded-full
                "
              />

              <p
                className="
                  mt-4
                  text-slate-700
                  font-medium
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