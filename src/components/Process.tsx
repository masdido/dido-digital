const steps = [
  {
    number: "01",
    title: "Konsultasi",
    description:
      "Ceritakan kebutuhan dan kondisi bisnis Anda kepada kami.",
  },
  {
    number: "02",
    title: "Tentukan Solusi",
    description:
      "Kami membantu menentukan solusi digital yang paling sesuai dengan kebutuhan bisnis.",
  },
  {
    number: "03",
    title: "Proses Pengerjaan",
    description:
      "Kami mulai mengerjakan solusi yang telah disepakati dengan proses yang terarah.",
  },
  {
    number: "04",
    title: "Siap Digunakan",
    description:
      "Solusi digital selesai dan siap digunakan untuk membantu bisnis Anda berkembang.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-gray-50 px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Cara Kerja
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sederhana. Jelas. Terarah.
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Dari konsultasi hingga solusi siap digunakan, prosesnya dibuat
            sederhana agar Anda tidak perlu pusing dengan hal teknis.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Number */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {step.description}
              </p>

              {/* Connector */}
              {step.number !== "04" && (
                <div className="absolute left-12 top-6 hidden h-px w-[calc(100%-3rem)] bg-gray-200 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}