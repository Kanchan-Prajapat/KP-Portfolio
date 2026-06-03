import {
  Award,
  ShieldCheck,
  Code,
  Database
} from "lucide-react";

function Certifications() {

  const certifications = [
    {
      title: "Linux RHCSA Training",
      issuer: "RedHat RCAT",
      icon: <ShieldCheck size={28} />
    },

    {
      title: "Git & GitHub",
      issuer: "LetsUpgrade",
     icon: <Award size={28} />
    },

    {
      title: "HTML & CSS",
      issuer: "LetsUpgrade",
      icon: <Code size={28} />
    },

    {
      title: "JavaScript",
      issuer: "LetsUpgrade",
      icon: <Code size={28} />
    },

    {
      title: "SQL Bootcamp",
      issuer: "LetsUpgrade",
      icon: <Database size={28} />
    }
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Certifications
          </h2>

          <p
            className="
            mt-4
            text-slate-600
            "
          >
            Courses and certifications that support
            my technical growth.
          </p>

        </div>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-16
          "
        >

          {certifications.map((cert) => (

            <div
              key={cert.title}
              className="
              bg-slate-50
              border
              border-slate-200
              rounded-3xl
              p-8
              hover:shadow-lg
              transition
              "
            >

              <div
                className="
                w-14
                h-14
                rounded-full
                bg-blue-100
                text-blue-600
                flex
                items-center
                justify-center
                "
              >
                {cert.icon}
              </div>

              <h3
                className="
                mt-5
                text-xl
                font-bold
                text-slate-900
                "
              >
                {cert.title}
              </h3>

              <p
                className="
                mt-2
                text-slate-600
                "
              >
                {cert.issuer}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;