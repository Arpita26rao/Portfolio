function Experience() {
  const timeline = [
    {
      year: "2023 - 2026",
      title: "B.Tech - Computer Science Engineering",
      company: "Modi Institute of Technology, Kota",
    },
    {
      year: "2020 - 2023",
      title: "Bachelor of Science",
      company: "Allahabad State University",
    },
    {
      year: "2025",
      title: "Full Stack Development",
      company: "Apna College",
    },
    {
      year: "2025",
      title: "Prompt Engineering Workshop",
      company: "IIT Bombay Techfest",
    },
    {
      year: "2025",
      title: "AI Tools Mastery",
      company: "IIT Delhi Tryst",
    },
  ];

  return (
    <section id="experience" className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Education & Experience
        </h2>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500 transition"
            >
              <p className="text-purple-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.company}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;