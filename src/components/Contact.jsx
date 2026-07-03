
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>

        <p className="text-slate-400 mb-10">
          I am open to internship and full-time opportunities.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:yourmail@gmail.com"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500 transition"
          >
            <FaEnvelope className="text-3xl text-purple-400 mx-auto mb-4" />
            <p>Email</p>
          </a>

          <a
            href="https://github.com/arpita26rao"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500 transition"
          >
            <FaGithub className="text-3xl text-purple-400 mx-auto mb-4" />
            <p>GitHub</p>
          </a>

          <a
            href="https://www.linkedin.com/in/arpita-rao-1b018b277"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500 transition"
          >
            <FaLinkedin className="text-3xl text-purple-400 mx-auto mb-4" />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;