import profile from "../assets/images/profile.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Hero() {
  return (
    <section
      className="
min-h-screen
bg-gradient-to-r
from-white
via-sky-50
to-blue-50
"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-2
        gap-16
        items-center
        "
      >
        {/* Left Side */}

        <div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm
            <span className="block text-blue-600">
              Kanchan Prajapat
            </span>
          </h1>

          <p className="text-blue-600 font-semibold tracking-wide uppercase">
            Full Stack Developer
          </p>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Full Stack Developer and Computer Science student
            passionate about building scalable web applications,
            modern user interfaces, and real-world software
            solutions.
          </p>
          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <a
              href="#projects"
              className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-blue-700
              transition
              "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="
              border-2
              border-blue-600
              text-blue-600
              px-6
              py-3
              rounded-xl
              hover:bg-blue-50
              transition
              "
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}

          <div className="flex gap-10 mt-8  text-10x">

            <a
              href="https://github.com/Kanchan-Prajapat"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-600"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/kanchan-prajapat-829336327/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:kanchanprajapat208@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-600"
            >
              <FaEnvelope size={24} />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}

            <div className="
absolute
w-80
h-80
bg-blue-200
rounded-full
blur-3xl
opacity-30
"></div>

            {/* Border Ring */}

            <div className="
relative
w-80
h-80
rounded-full
overflow-hidden
border-4
border-blue-300
shadow-[0_0_50px_rgba(59,130,246,0.4)]
">
              <img
                src={profile}
                alt="Kanchan Prajapat"
                className="
                w-80
                h-80
                object-cover
rounded-full
border-4
border-blue-300
shadow-[0_0_60px_rgba(59,130,246,0.35)],         "
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;