import certificates from "../data/certificates";
import { Building2 } from "lucide-react";
function Certifications() {


  return (
    <section
      id="certifications"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900">
            Certifications & Achievements
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Professional certifications, hackathons and competitions
            that showcase my technical growth, problem-solving ability
            and continuous learning mindset.
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

          {certificates.map((cert) => (

            <div
              className="
bg-white
rounded-3xl
overflow-hidden
border
border-slate-200
shadow-md
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
"
            >
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
    w-full
    h-56
    object-cover
    cursor-pointer
    "
                />
              </a>

              <div className="p-6">

                <span
                  className={`
inline-block px-3 py-1 rounded-full text-xs font-medium
${cert.category === "Professional"
                      ? "bg-blue-100 text-emerald-700"
                      : "bg-violet-100 text-violet-700"}
`}
                >
                  {cert.category}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between mt-5">

  <div className="flex items-center gap-2 text-slate-500">
    <Building2 size={16} />
    <span>{cert.issuer}</span>
  </div>

  <a
    href={cert.image}
    target="_blank"
    rel="noopener noreferrer"
    className="
    inline-flex
    items-center
    px-4
    py-2
    bg-blue-500
    text-white
    rounded-xl
    text-sm
    font-medium
    hover:bg-blue-700
    transition
    "
  >
    View
  </a>

</div>
                </div>

              </div>


          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;