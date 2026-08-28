const projects = [
  {
    title: "Katalog UMKM",
    category: "Digital Catalog",
    description:
      "Katalog produk digital yang membantu pelanggan melihat produk dan menghubungi bisnis dengan lebih mudah.",
    type: "Food & Beverage",
  },
  {
    title: "Toko Lokal",
    category: "Business Website",
    description:
      "Website sederhana untuk memperkenalkan bisnis, layanan, lokasi, dan informasi kontak secara profesional.",
    type: "Local Business",
  },
  {
    title: "Jasa Profesional",
    category: "Landing Page",
    description:
      "Landing page yang dirancang untuk memperkenalkan layanan dan mengarahkan calon pelanggan untuk melakukan kontak.",
    type: "Service Business",
  },
];

export default function DemoProjects() {
  return (
    <section
      id="projects"
      className="bg-white px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Demo Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contoh digitalisasi untuk bisnis
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Beberapa contoh bagaimana bisnis sederhana dapat tampil lebih
            profesional di dunia digital.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600" />

                <div className="absolute inset-4 rounded-xl bg-white p-4 shadow-xl">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-3 w-20 rounded-full bg-gray-900" />
                    <div className="h-2 w-10 rounded-full bg-gray-200" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-4 w-3/4 rounded bg-gray-900" />
                    <div className="h-2 w-full rounded bg-gray-200" />
                    <div className="h-2 w-5/6 rounded bg-gray-200" />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="aspect-square rounded-lg bg-gray-100" />
                    <div className="aspect-square rounded-lg bg-gray-100" />
                    <div className="aspect-square rounded-lg bg-gray-100" />
                  </div>
                </div>

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
                  Demo
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    {project.type}
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 transition group-hover:text-blue-600"
                  >
                    Lihat Demo
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}