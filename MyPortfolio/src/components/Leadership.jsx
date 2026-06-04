import {
  Users,
  UserCheck,
  Shield,
  Lightbulb
} from "lucide-react";

function Leadership() {
  const responsibilities = [
    {
      icon: <Users size={28} />,
      title: "Class Representative",
      description:
        "Acted as the bridge between students and faculty, ensuring smooth communication and coordination."
    },

    {
      icon: <UserCheck size={28} />,
      title: "Girl Coordinator",
      description:
        "Managed student participation, engagement and coordination during academic and cultural events."
    },

    {
      icon: <Shield size={28} />,
      title: "Escorting & Discipline Team",
      description:
        "Maintained event discipline, attendee management and smooth execution of campus activities."
    },

    {
      icon: <Lightbulb size={28} />,
      title: "Technical Event Volunteer",
      description:
        "Supported planning and execution of technical workshops, competitions and innovation events."
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
            Leadership & Campus Impact
          </h2>

          <p className="mt-4 text-slate-600">
            Experiences that strengthened my leadership,
            communication, event management and teamwork skills.
          </p>

        </div>

        <div
          className="
          grid
         grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
          mt-16
          "
        >

          {responsibilities.map((item) => (

            <div
              key={item.title}
              className="
  group
  bg-white
  border
  border-slate-200
  rounded-3xl
  p-8
  hover:border-blue-300
  hover:shadow-xl
  hover:-translate-y-2
  transition-all
  duration-300
  hover:-translate-y-2
hover:border-blue-200
duration-300
  "
            >

             <div
  className="
  w-14
  h-14
  rounded-2xl
  bg-gradient-to-br
  from-blue-50
  to-blue-100
  text-blue-600
  flex
  items-center
  justify-center
  shadow-sm
  "
>
  {item.icon}
</div>

              <h3
                className="
    mt-6
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