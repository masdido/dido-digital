const products = [
  {
    name: "Beras Premium 5 Kg",
    category: "Sembako",
    price: "Rp78.000",
  },
  {
    name: "Minyak Goreng 2 Liter",
    category: "Sembako",
    price: "Rp36.000",
  },
  {
    name: "Gula Pasir 1 Kg",
    category: "Sembako",
    price: "Rp18.000",
  },
  {
    name: "Teh Celup 25 Kantong",
    category: "Minuman",
    price: "Rp9.500",
  },
  {
    name: "Kopi Bubuk 200 Gram",
    category: "Minuman",
    price: "Rp15.000",
  },
  {
    name: "Sabun Mandi",
    category: "Kebutuhan Rumah",
    price: "Rp7.500",
  },
];

const whatsappNumber = "6280000000000";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function TokoLokalPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <div>
            <p className="text-lg font-bold tracking-tight">
              Sinar Jaya Mart
            </p>
            <p className="text-xs text-slate-500">
              Belanja kebutuhan sehari-hari
            </p>
          </div>

          <a
            href={getWhatsAppLink(
              "Halo Sinar Jaya Mart, saya ingin bertanya tentang produk.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Hubungi Kami
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Toko Lokal Terpercaya
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Kebutuhan sehari-hari,
              <span className="block text-emerald-600">
                dekat dan mudah.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Sinar Jaya Mart menyediakan berbagai kebutuhan rumah tangga,
              sembako, makanan, dan minuman untuk kebutuhan sehari-hari.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#produk"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Lihat Produk
              </a>

              <a
                href={getWhatsAppLink(
                  "Halo Sinar Jaya Mart, saya ingin bertanya tentang produk.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Tanya via WhatsApp
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-slate-900 p-5 shadow-xl sm:p-7">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-5 sm:p-7">
                <div>
                  <div className="h-3 w-24 rounded-full bg-slate-900" />
                  <div className="mt-5 h-8 w-3/4 rounded-lg bg-slate-900" />
                  <div className="mt-3 h-3 w-full rounded bg-slate-200" />
                  <div className="mt-2 h-3 w-5/6 rounded bg-slate-200" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square rounded-xl bg-emerald-100" />
                  <div className="aspect-square rounded-xl bg-slate-100" />
                  <div className="aspect-square rounded-xl bg-emerald-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-slate-200 bg-white px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          <div>
            <p className="font-bold">Produk Lengkap</p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Kebutuhan rumah tangga dalam satu tempat.
            </p>
          </div>

          <div>
            <p className="font-bold">Harga Bersahabat</p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Harga kompetitif untuk kebutuhan harian.
            </p>
          </div>

          <div>
            <p className="font-bold">Mudah Dihubungi</p>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Tanya stok dan produk langsung melalui WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="produk"
        className="px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Produk
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Produk pilihan
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Beberapa kebutuhan yang tersedia di Sinar Jaya Mart.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <div className="flex h-full items-center justify-center">
                    <div className="h-24 w-24 rounded-2xl bg-white shadow-sm" />
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <span className="font-bold text-slate-900">
                      {product.price}
                    </span>

                    <a
                      href={getWhatsAppLink(
                        `Halo Sinar Jaya Mart, saya ingin menanyakan ${product.name}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-900 hover:text-emerald-600"
                    >
                      Tanya →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-slate-900 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Tentang Toko
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Toko lokal untuk kebutuhan sehari-hari.
            </h2>
          </div>

          <div>
            <p className="leading-7 text-slate-300">
              Sinar Jaya Mart hadir untuk membantu masyarakat sekitar
              mendapatkan kebutuhan sehari-hari dengan mudah, cepat, dan
              nyaman.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Kami mengutamakan pelayanan yang ramah dan ketersediaan produk
              yang dibutuhkan pelanggan.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                  Lokasi & Jam Buka
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Datang langsung ke toko
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Jl. Contoh Raya No. 45, Ketapang, Sampang, Madura.
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Senin–Minggu · 07.00–21.00 WIB
                </p>
              </div>

              <div className="flex md:justify-end">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Lihat Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white px-5 py-16 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Butuh sesuatu?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Hubungi Sinar Jaya Mart untuk menanyakan stok atau produk yang
            Anda cari.
          </p>

          <a
            href={getWhatsAppLink(
              "Halo Sinar Jaya Mart, saya ingin bertanya tentang produk.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Hubungi via WhatsApp →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8 text-center">
        <p className="text-sm font-semibold">Sinar Jaya Mart</p>

        <p className="mt-1 text-xs text-slate-500">
          Demo website UMKM · Dido Digital
        </p>
      </footer>
    </main>
  );
}