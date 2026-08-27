export default function ProblemSection() {
  const problems = [
    {
      number: "01",
      title: "Pelanggan Sulit Menemukan Bisnis Anda",
      description:
        "Informasi bisnis hanya berputar dari WhatsApp ke WhatsApp. Calon pelanggan baru kesulitan menemukan produk, lokasi, dan informasi penting.",
    },
    {
      number: "02",
      title: "Katalog Masih Serba Manual",
      description:
        "Foto dan harga produk sering dikirim satu per satu. Ketika harga berubah, katalog lama bisa tetap beredar.",
    },
    {
      number: "03",
      title: "Bisnis Terlihat Kurang Profesional",
      description:
        "Produk bagus saja belum cukup. Tampilan bisnis yang tidak rapi bisa membuat calon pelanggan ragu sebelum membeli.",
    },
  ];

  return (
    <section className="border-t border-gray-100 bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Masalah yang sering terjadi
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            Bisnis Anda sudah berjalan.
            <span className="block text-gray-400">
              Tapi apakah sudah siap ditemukan?
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Banyak UMKM sebenarnya sudah punya produk dan pelanggan.
            Masalahnya, informasi bisnis mereka masih tersebar dan sulit
            diakses secara cepat.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-gray-200 bg-gray-200 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="bg-white p-7 sm:p-8"
            >
              <span className="text-sm font-semibold text-gray-400">
                {problem.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold leading-snug text-black">
                {problem.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-black">
                Digitalisasi tidak harus rumit.
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Kami mulai dari kebutuhan yang benar-benar dibutuhkan bisnis Anda.
              </p>
            </div>

            <a
              href="#layanan"
              className="inline-flex w-fit items-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Lihat Solusi
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}