import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload
} from "react-icons/fa";
import resume from "../assets/resume.pdf";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope size={22} />,
      title: "Email",
      value: "kanchanprajapat208@gmail.com",
      link: "mailto:kanchanprajapat208@gmail.com"
    },

    {
      icon: <FaGithub size={22} />,
      title: "GitHub",
      value: "Kanchan-Prajapat",
      link: "https://github.com/Kanchan-Prajapat"
    },

    {
      icon: <FaLinkedin size={22} />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/kanchan-prajapat-829336327/"
    },

    {
      icon: <FaDownload size={22} />,
      title: "Resume",
      value: "Download CV",
      link: resume
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-slate-900
            "
          >
            Let's Connect
          </h2>

          <p
            className="
            mt-4
            text-slate-600
            max-w-2xl
            mx-auto
            "
          >
            I'm always open to discussing
            new opportunities, projects,
            and collaborations.
          </p>

        </div>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          mt-16
          "
        >

          {contacts.map((item) => (

            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-6
              hover:shadow-lg
              transition
              "
            >

             <div
  className="
  w-14
  h-14
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
                font-semibold
                text-lg
                "
              >
                {item.title}
              </h3>

              <p
                className="
                mt-2
                text-slate-600
                text-sm
                "
              >
                {item.value}
              </p>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Contact;