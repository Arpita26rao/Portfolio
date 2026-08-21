import { certificates } from "../data/Certifications";
function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Certifications
        </h2>

        <p className="text-slate-400 text-center mb-12">
          My workshops and technical certifications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-purple-500 hover:-translate-y-2 transition duration-300 shadow-lg"
            >

              {/* Clickable Certificate Image */}
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </a>

              <div className="p-5">

                <h3 className="text-lg font-bold">
                  {certificate.title}
                </h3>

                <p className="text-purple-400 mt-2">
                  {certificate.organization}
                </p>

                <p className="text-slate-400 mt-2">
                  {certificate.year}
                </p>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg transition duration-300"
                >
                  View Certificate
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;