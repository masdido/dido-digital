export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
              <span className="h-2 w-2 rounded-full bg-black" />
              Solusi Digital untuk UMKM
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl">
              Bikin Bisnis Anda
              <span className="block text-gray-400">
                Lebih Mudah Ditemukan.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Kami membantu UMKM mengubah bisnis yang masih serba manual
              menjadi lebih rapi, mudah ditemukan, dan siap melayani
              pelanggan secara digital.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Konsultasi Gratis
                <span className="ml-2">→</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-gray-50"
              >
                Lihat Portofolio
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ Mobile Friendly</span>
              <span>✓ Mudah Digunakan</span>
              <span>✓ Sesuai Kebutuhan</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-3 shadow-2xl shadow-black/5">

              <div className="flex items-center gap-2 border-b border-gray-200 px-3 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />

                <div className="ml-3 h-7 flex-1 rounded-lg bg-white" />
              </div>

              <div className="rounded-2xl bg-white p-5 sm:p-7">

                <div className="flex items-center justify-between">
                  <div className="h-5 w-28 rounded bg-black" />
                  <div className="h-8 w-20 rounded-full bg-gray-100" />
                </div>

                <div className="mt-8">
                  <div className="h-8 w-3/4 rounded bg-gray-200" />

                  <div className="mt-3 h-4 w-full rounded bg-gray-100" />

                  <div className="mt-2 h-4 w-2/3 rounded bg-gray-100" />
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="aspect-[4/3] rounded-2xl bg-gray-100" />
                  <div className="aspect-[4/3] rounded-2xl bg-gray-100" />
                  <div className="aspect-[4/3] rounded-2xl bg-gray-100" />
                  <div className="aspect-[4/3] rounded-2xl bg-gray-100" />
                </div>

              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:block">
              <p className="text-xs font-medium text-gray-500">
                Digitalisasi
              </p>

              <p className="mt-1 text-sm font-semibold text-black">
                Bisnis Lebih Siap Online
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}