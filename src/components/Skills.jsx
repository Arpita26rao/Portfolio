
import { skills } from "../data/Skills";

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-purple-500 hover:-translate-y-2 transition"
              >
                {Icon ? (
                  <Icon className="text-4xl text-purple-400 mx-auto mb-4" />
                ) : (
                  <div className="text-4xl text-purple-400 mx-auto mb-4">
                    ✨
                  </div>
                )}

                <p className="text-slate-200 font-medium">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;