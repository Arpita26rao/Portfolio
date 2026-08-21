import { FaGithub, FaCode, FaLaptopCode } from "react-icons/fa";

function GithubStats() {
  const stats = [
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "arpita26rao",
    },
    {
      icon: <FaCode />,
      title: "Primary Stack",
      value: "MERN Stack",
    },
    {
      icon: <FaLaptopCode />,
      title: "Focus",
      value: "Full Stack + AI",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          GitHub Overview
        </h2>

        <p className="text-slate-400 text-center mb-12">
          My development profile and technical interests.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-purple-500 hover:-translate-y-2 transition"
            >
              <div className="text-5xl text-purple-400 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/arpita26rao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default GithubStats;