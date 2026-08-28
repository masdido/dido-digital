const menu = [
  {
    name: "Nasi Ayam Bakar",
    description: "Nasi hangat dengan ayam bakar bumbu khas Rasa Kita.",
    price: "Rp18.000",
  },
  {
    name: "Nasi Ayam Geprek",
    description: "Ayam crispy dengan sambal geprek pedas dan nasi hangat.",
    price: "Rp17.000",
  },
  {
    name: "Mie Goreng Spesial",
    description: "Mie goreng dengan telur, ayam, dan sayuran.",
    price: "Rp15.000",
  },
  {
    name: "Es Teh Manis",
    description: "Es teh manis segar untuk menemani makan.",
    price: "Rp5.000",
  },
  {
    name: "Es Jeruk",
    description: "Jeruk segar dengan rasa manis dan sedikit asam.",
    price: "Rp7.000",
  },
  {
    name: "Kopi Susu",
    description: "Kopi susu creamy dengan cita rasa kopi yang seimbang.",
    price: "Rp10.000",
  },
];

const whatsappNumber = "6280000000000";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function KedaiRasaKitaPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="bg-stone-900 px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Kedai Rasa Kita
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Masakan rumahan,
              <span className="block text-orange-300">
                rasa yang bikin kembali.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-stone-300 sm:text-lg">
              Nikmati makanan hangat dengan cita rasa rumahan yang dibuat
              setiap hari untuk keluarga dan teman.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-xl bg-orange-400 px-6 py-3.5 text-sm font-semibold text-stone-950 transition hover:bg-orange-300"
              >
                Lihat Menu
              </a>

              <a
                href={getWhatsAppLink(
                  "Halo Kedai Rasa Kita, saya ingin memesan makanan.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-stone-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight */}
      <section className="border-b border-stone-200 bg-white px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-stone-900">
              Masak Setiap Hari
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Menu dibuat fresh setiap hari.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900">
              Harga Bersahabat
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Cocok untuk makan sendiri atau bersama.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900">
              Pesan Mudah
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Pesan langsung melalui WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
              Menu
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Menu favorit pelanggan
            </h2>

            <p className="mt-4 text-base leading-7 text-stone-600">
              Pilih menu favoritmu dan pesan langsung tanpa perlu bertanya
              satu per satu.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {menu.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>

                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      {item.description}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-bold text-orange-600">
                    {item.price}
                  </span>
                </div>

                <a
                  href={getWhatsAppLink(
                    `Halo Kedai Rasa Kita, saya ingin memesan ${item.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-stone-900 hover:text-orange-600"
                >
                  Pesan menu ini →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
                Tentang Kami
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Sederhana, hangat, dan dibuat dengan rasa.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-stone-600">
                Kedai Rasa Kita adalah kedai makanan rumahan yang menyajikan
                menu sederhana dengan bahan pilihan dan rasa yang familiar.
              </p>

              <p className="mt-4 text-base leading-7 text-stone-600">
                Tempat yang cocok untuk makan siang, nongkrong santai, atau
                sekadar mencari makanan rumahan setelah hari yang panjang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-stone-900 p-7 text-white sm:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-300">
                  Lokasi
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Mampir ke Kedai Rasa Kita
                </h2>

                <p className="mt-4 leading-7 text-stone-300">
                  Jl. Contoh No. 123, Ketapang, Sampang, Madura.
                </p>

                <p className="mt-2 text-sm text-stone-400">
                  Buka setiap hari · 09.00–21.00 WIB
                </p>
              </div>

              <div className="flex md:justify-end">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
                >
                  Lihat di Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200 bg-white px-5 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Mau pesan sekarang?
          </h2>

          <p className="mt-4 leading-7 text-stone-600">
            Hubungi kami melalui WhatsApp dan sampaikan menu yang ingin
            dipesan.
          </p>

          <a
            href={getWhatsAppLink(
              "Halo Kedai Rasa Kita, saya ingin memesan makanan.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-stone-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-stone-800"
          >
            Pesan via WhatsApp →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-50 px-5 py-8 text-center">
        <p className="text-sm font-semibold">Kedai Rasa Kita</p>

        <p className="mt-1 text-xs text-stone-500">
          Demo website UMKM · Dido Digital
        </p>
      </footer>
    </main>
  );
}