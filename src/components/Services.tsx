const services = [
  {
    number: "01",
    title: "Katalog Digital",
    description:
      "Ubah daftar produk yang masih tersebar di chat menjadi katalog digital yang rapi, mudah dibagikan, dan bisa diakses pelanggan kapan saja.",
    features: [
      "Daftar produk & harga",
      "Foto produk",
      "Tombol WhatsApp",
    ],
  },
  {
    number: "02",
    title: "Website Bisnis",
    description:
      "Website profesional untuk membuat bisnis lebih mudah ditemukan dan memberikan informasi penting kepada calon pelanggan.",
    features: [
      "Tampilan mobile-friendly",
      "Informasi bisnis",
      "Kontak & lokasi",
    ],
  },
  {
    number: "03",
    title: "Digitalisasi Bisnis",
    description:
      "Bantu merapikan proses bisnis yang masih manual agar informasi, produk, dan pelayanan pelanggan lebih terstruktur.",
    features: [
      "Struktur informasi",
      "Alur pemesanan",
      "Solusi sesuai kebutuhan",
    ],
  },
  {
    number: "04",
    title: "Optimasi Online",
    description:
      "Bantu bisnis meningkatkan kehadiran online agar calon pelanggan lebih mudah menemukan dan mengenali bisnis Anda.",
    features: [
      "Profil bisnis",
      "Informasi kontak",
      "Kehadiran online",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="layanan"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Layanan
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            Digitalisasi yang
            <span className="block text-gray-400">
              benar-benar berguna.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Kami membantu UMKM membangun fondasi digital yang sederhana,
            profesional, dan sesuai dengan kebutuhan bisnis sebenarnya.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">

          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-gray-400">
                  {service.number}
                </span>

                <span className="text-xl text-gray-300 transition duration-300 group-hover:translate-x-1 group-hover:text-black">
                  →
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-black">
                {service.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-3xl bg-black p-7 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="max-w-xl">
              <p className="text-xl font-semibold tracking-tight">
                Tidak yakin harus mulai dari mana?
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Ceritakan kondisi bisnis Anda. Kami bantu menentukan
                solusi digital yang paling masuk akal untuk kebutuhan Anda.
              </p>
            </div>

            <a
              href="#kontak"
              className="inline-flex w-fit shrink-0 items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Konsultasi Gratis
              <span className="ml-2">→</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}