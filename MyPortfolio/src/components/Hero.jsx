import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      bg-white
      pt-24
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

          <p
            className="
            text-blue-600
            font-semibold
            mb-3
            "
          >
            Hello, I'm
          </p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            text-slate-900
            leading-tight
            "
          >
            Kanchan
            <br />
            Prajapat
          </h1>

          <h2
            className="
            mt-5
            text-2xl
            md:text-3xl
            font-medium
            text-slate-700
            "
          >
            Full Stack Developer &
            <br />
            Computer Science Student
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            max-w-xl
            "
          >
            Passionate about building scalable web
            applications using MERN Stack and
            solving real-world problems through
            technology.
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

          <div className="flex gap-5 mt-8">

            <a
              href="https://github.com/Kanchan-Prajapat"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-blue-600"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-slate-600 hover:text-blue-600"
            >
              LinkedIn
            </a>

            <a
              href="mailto:kanchanprajapat208@gmail.com"
              className="text-slate-600 hover:text-blue-600"
            >
              Email
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}

            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-blue-300
              blur-3xl
              opacity-40
              "
            />

            {/* Border Ring */}

            <div
              className="
              p-3
              rounded-full
              bg-gradient-to-r
              from-blue-400
              to-blue-600
              "
            >
              <img
                src={profile}
                alt="Kanchan Prajapat"
                className="
                w-80
                h-80
                object-cover
                rounded-full
                border-4
                border-white
                shadow-2xl
                "
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;