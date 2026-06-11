import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
      bg-white
      border-t
      border-slate-200
      py-12
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        text-center
        "
      >

        <h3 className="text-2xl font-bold text-slate-900">
          Kanchan
          <span className="text-blue-600">.</span>
        </h3>

        <p className="mt-3 text-slate-600">
          Full Stack Developer • MERN Stack Developer
        </p>

        <div className="flex justify-center gap-5 mt-6">

          <a
            href="https://github.com/Kanchan-Prajapat"
            target="_blank"
            rel="noreferrer"
            className="
            text-slate-500
            hover:text-blue-600
            transition
            "
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/kanchan-prajapat92577/"
            target="_blank"
            rel="noreferrer"
            className="
            text-slate-500
            hover:text-blue-600
            transition
            "
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:kanchanprajapat208@gmail.com"
            className="
            text-slate-500
            hover:text-blue-600
            transition
            "
          >
            <FaEnvelope size={22} />
          </a>

        </div>

        <p
          className="
          mt-8
          text-sm
          text-slate-500
          "
        >
          © 2026 Kanchan Prajapat. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;