import { Code2 } from "lucide-react";
import resume from "../assets/resume.pdf";

function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/80
      backdrop-blur-lg
      border-b
      border-slate-200/60
      shadow-sm
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        h-20
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

      <a href="#home" className="flex items-center gap-2">
  <Code2 className="text-blue-600" size={28} />
  <span className="text-2xl font-bold">
    Kanchan<span className="text-blue-600">.</span>
  </span>
</a>

        {/* Menu */}

        <ul
          className="
          hidden
          md:flex
          items-center
          gap-10
          text-slate-700
          font-medium
          "
        >
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Experience",
            "Certifications",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                relative
                hover:text-blue-600
                transition
                after:absolute
                after:left-0
                after:-bottom-2
                after:w-0
                after:h-[2px]
                after:bg-blue-600
                after:transition-all
                hover:after:w-full
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume */}

        <a
         href={resume}
          target="_blank"
          rel="noreferrer"
          className="
          hidden
          md:inline-flex
          items-center
          px-6
          py-3
          rounded-xl
          bg-blue-600
          text-white
          font-medium
          shadow-md
          hover:bg-blue-700
          hover:shadow-lg
          hover:-translate-y-0.5
          transition-all
          "
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;