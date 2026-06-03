function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      bg-white/90
      backdrop-blur-md
      border-b
      border-slate-200
      z-50
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="
          text-2xl
          font-bold
          text-slate-900
          "
        >
          Kanchan<span className="text-blue-600">.</span>
        </a>

        {/* Navigation */}

        <ul
          className="
          hidden
          md:flex
          items-center
          gap-8
          text-slate-700
          font-medium
          "
        >
          <li>
            <a
              href="#home"
              className="hover:text-blue-600 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-blue-600 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button */}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="
          hidden
          md:inline-flex
          items-center
          px-5
          py-2.5
          rounded-xl
          bg-blue-600
          text-white
          font-medium
          hover:bg-blue-700
          transition
          "
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;