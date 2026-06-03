import { GraduationCap } from "lucide-react";

function Education() {
  const education = [
    {
      year: "2024 - Present",
      title: "B.Tech Computer Science Engineering",
      institute: "Global Institute of Technology",
      score: "CGPA: 9.52"
    },

    {
      year: "2022 - 2023",
      title: "Senior Secondary Education",
      institute: "Kamal Deep Senior Secondary School",
      score: "95.80%"
    },

    {
      year: "2020 - 2021",
      title: "Secondary Education",
      institute: "Kamal Deep Senior Secondary School",
      score: "98.00%"
    }
  ];

  return (
    <section
      id="education"
      className="py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Education
          </h2>

          <p className="mt-4 text-slate-600">
            My academic journey and achievements.
          </p>

        </div>

        <div className="mt-16 space-y-8">

          {education.map((item) => (

            <div
              key={item.title}
              className="
              bg-slate-50
              border
              border-slate-200
              rounded-3xl
              p-6
              flex
              gap-5
              hover:shadow-lg
              transition
              "
            >

              <div
                className="
                h-14
                w-14
                rounded-full
                bg-blue-100
                flex
                items-center
                justify-center
                "
              >
                <GraduationCap
                  className="text-blue-600"
                />
              </div>

              <div>

                <span
                  className="
                  text-blue-600
                  font-medium
                  "
                >
                  {item.year}
                </span>

                <h3
                  className="
                  text-xl
                  font-bold
                  mt-2
                  "
                >
                  {item.title}
                </h3>

                <p className="text-slate-600">
                  {item.institute}
                </p>

                <p
                  className="
                  mt-2
                  font-semibold
                  text-slate-800
                  "
                >
                  {item.score}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;