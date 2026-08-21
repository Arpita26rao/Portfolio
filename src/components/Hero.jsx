import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white flex items-center pt-24 px-6 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 text-lg mb-3">👋 Hello, I'm</p>

          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-6 border border-green-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for Internship & Full-Time
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Arpita Rao
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "AI Enthusiast",
              2000,
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-purple-400 font-semibold"
          />

          <p className="text-slate-400 mt-6 leading-8 max-w-xl">
            Passionate Full Stack Developer specializing in React, Node.js,
            Express.js, MongoDB and AI-powered applications. I enjoy building
            modern, responsive, and scalable web applications that solve
            real-world problems.
          </p>

          <div className="flex flex-wrap gap-8 mt-8">
            <div>
              <h2 className="text-3xl font-bold text-purple-400">3+</h2>
              <p className="text-slate-400">Projects</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-400">12+</h2>
              <p className="text-slate-400">Technologies</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-400">3+</h2>
              <p className="text-slate-400">Certificates</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition">
              View Projects
            </a>

            <a href="/images/Arpita_Resume.jpg" target="_blank" rel="noopener noreferrer" className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl transition">
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 text-3xl mt-8">
            <a href="https://github.com/arpita26rao" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/arpita-rao-1b018b277" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/raoarpita.jpg"
            alt="Arpita Rao"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;