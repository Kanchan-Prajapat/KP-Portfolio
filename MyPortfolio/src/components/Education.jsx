import { GraduationCap } from "lucide-react";

function Education() {
  const education = [
  {
    year: "2024 - Present",
    title: "B.Tech Computer Science Engineering",
    institute: "Global Institute of Technology",
    score: "CGPA 9.52",
    highlight: "Computer Science and Engineering"
  },

  {
    year: "2022 - 2023",
    title: "Senior Secondary Education",
    institute: "Kamal Deep Senior Secondary School",
    score: "95.80%",
    highlight: "Science Stream"
  },

  {
    year: "2020 - 2021",
    title: "Secondary Education",
    institute: "Kamal Deep Senior Secondary School",
    score: "98.00%",
    highlight: "School Top Performer"
  }
];

  return (
    <section
      id="education"
      className="py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">

      <div className="text-center">

  <span className="text-blue-600 font-semibold">
    ACADEMIC JOURNEY
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
    Education
  </h2>

  <p className="mt-4 text-slate-600">
    Building a strong foundation in computer science and technology.
  </p>

</div>

        <div className="mt-16 space-y-8">

          {education.map((item) => (

           <div
  key={item.title}
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

  <div className="flex items-center justify-between">

    <span
      className="
      text-blue-600
      font-semibold
      "
    >
      {item.year}
    </span>

    <span
      className="
      px-4
      py-1
      rounded-full
      bg-blue-50
      text-blue-700
      text-sm
      font-medium
      "
    >
      {item.score}
    </span>

  </div>

  <h3
    className="
    mt-4
    text-2xl
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
    {item.institute}
  </p>

  <div
    className="
    mt-5
    inline-block
    px-4
    py-2
    bg-slate-100
    rounded-xl
    text-slate-700
    text-sm
    "
  >
    {item.highlight}
  </div>

</div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;