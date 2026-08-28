const services = [
  {
    name: "Konsultasi Bisnis",
    description:
      "Sesi konsultasi untuk membantu menemukan solusi yang sesuai dengan kebutuhan bisnis Anda.",
    price: "Mulai Rp150.000",
  },
  {
    name: "Desain Branding",
    description:
      "Membantu membangun identitas visual yang lebih konsisten dan profesional.",
    price: "Mulai Rp300.000",
  },
  {
    name: "Social Media Setup",
    description:
      "Penataan profil dan konten dasar agar bisnis terlihat lebih profesional di media sosial.",
    price: "Mulai Rp250.000",
  },
];

const whatsappNumber = "6280000000000";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function JasaProfesionalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <div>
            <p className="text-lg font-bold tracking-tight">
              Aruna Consulting
            </p>
            <p className="text-xs text-slate-500">
              Solusi untuk bisnis yang ingin berkembang
            </p>
          </div>

          <a
            href={getWhatsAppLink(
              "Halo Aruna Consulting, saya ingin berkonsultasi mengenai layanan Anda.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Konsultasi
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Professional Service
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Bantu bisnis Anda
              <span className="block text-cyan-400">
                tumbuh lebih terarah.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Aruna Consulting membantu bisnis dan profesional meningkatkan
              branding, strategi digital, dan kehadiran online dengan solusi
              yang praktis.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#layanan"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Lihat Layanan
              </a>

              <a
                href={getWhatsAppLink(
                  "Halo Aruna Consulting, saya ingin berkonsultasi mengenai kebutuhan bisnis saya.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Mulai Konsultasi →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-slate-200 bg-slate-50 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          <div>
            <p className="font-bold">Solusi Praktis</p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Fokus pada solusi yang bisa langsung diterapkan.
            </p>
          </div>

          <div>
            <p className="font-bold">Pendekatan Personal</p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Setiap kebutuhan bisnis dianalisis secara berbeda.
            </p>
          </div>

          <div>
            <p className="font-bold">Berorientasi Hasil</p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Strategi dibuat untuk membantu bisnis bergerak lebih maju.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="layanan"
        className="px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
              Layanan
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Solusi sesuai kebutuhan bisnis
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Pilih layanan yang sesuai dengan kebutuhan Anda atau hubungi
              kami untuk mendapatkan rekomendasi.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-lg font-bold text-cyan-700">
                  +
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {service.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <p className="mt-6 text-sm font-bold text-slate-900">
                  {service.price}
                </p>

                <a
                  href={getWhatsAppLink(
                    `Halo Aruna Consulting, saya tertarik dengan layanan ${service.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-slate-900 hover:text-cyan-600"
                >
                  Tanya layanan →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Cara Kerja
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Sederhana dari awal sampai selesai.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 p-6">
              <span className="text-sm font-bold text-cyan-400">
                01
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Diskusi
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Kami memahami kondisi dan kebutuhan bisnis Anda.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-6">
              <span className="text-sm font-bold text-cyan-400">
                02
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Rekomendasi
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Kami menyusun solusi yang paling relevan dengan kebutuhan.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-6">
              <span className="text-sm font-bold text-cyan-400">
                03
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Eksekusi
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Solusi diterapkan dan diselesaikan sesuai kesepakatan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
              Tentang Kami
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Tidak semua bisnis membutuhkan solusi yang sama.
            </h2>
          </div>

          <div>
            <p className="leading-7 text-slate-600">
              Aruna Consulting membantu pemilik bisnis memahami masalah
              digital mereka dan menentukan langkah yang lebih tepat.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Kami percaya solusi yang baik bukan yang paling rumit, tetapi
              yang paling sesuai dengan kebutuhan bisnis.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-50 px-5 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Punya kebutuhan yang ingin didiskusikan?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Ceritakan kebutuhan bisnis Anda. Kami akan membantu menentukan
            langkah yang paling masuk akal.
          </p>

          <a
            href={getWhatsAppLink(
              "Halo Aruna Consulting, saya ingin berkonsultasi mengenai kebutuhan bisnis saya.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Konsultasi via WhatsApp →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center">
        <p className="text-sm font-semibold">
          Aruna Consulting
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Demo website UMKM · Dido Digital
        </p>
      </footer>
    </main>
  );
}