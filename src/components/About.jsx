function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Who am I?
            </h3>

            <p className="text-slate-300 leading-8">
              I am a passionate Full Stack Developer pursuing B.Tech in
              Computer Science Engineering. I enjoy building scalable web
              applications using the MERN stack and exploring AI-powered
              solutions. My goal is to create user-friendly, modern, and
              impactful applications while continuously improving my
              development skills.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-purple-400">3+</h3>
              <p className="mt-2">Projects</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-purple-400">10+</h3>
              <p className="mt-2">Technologies</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-purple-400">2026</h3>
              <p className="mt-2">Graduate</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-purple-400">AI</h3>
              <p className="mt-2">Enthusiast</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;