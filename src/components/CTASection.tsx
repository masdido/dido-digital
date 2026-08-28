export default function CTASection() {
  return (
    <section className="bg-gray-900 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Mulai Sekarang
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Siap membawa bisnis Anda
          <span className="block">ke dunia digital?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          Ceritakan kebutuhan bisnis Anda. Kami akan membantu menemukan solusi
          digital yang sesuai tanpa proses yang rumit.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/6287858760050"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 sm:w-auto"
          >
            Konsultasi Gratis
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>

          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center rounded-xl border border-gray-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 sm:w-auto"
          >
            Lihat Demo
          </a>
        </div>
      </div>
    </section>
  );
}