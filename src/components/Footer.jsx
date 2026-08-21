
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-purple-400">
          Arpita Rao
        </h2>

        <p className="text-slate-400 mt-3">
          Full Stack Developer | MERN Developer | AI Enthusiast
        </p>

        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://github.com/arpita26rao"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arpita-rao-1b018b277"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-8 text-slate-500 flex justify-center items-center gap-2">
          Made with <FaHeart className="text-red-500" /> by Arpita Rao
        </p>

      </div>
    </footer>
  );
}

export default Footer;