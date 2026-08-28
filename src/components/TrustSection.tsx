const trustPoints = [
  {
    number: "01",
    title: "Sederhana",
    description:
      "Solusi digital dibuat mudah dipahami, bahkan jika Anda tidak terbiasa dengan teknologi.",
  },
  {
    number: "02",
    title: "Sesuai Kebutuhan",
    description:
      "Kami fokus pada kebutuhan bisnis Anda, bukan sekadar menambahkan fitur yang tidak diperlukan.",
  },
  {
    number: "03",
    title: "Profesional",
    description:
      "Bantu bisnis tampil lebih rapi, modern, dan terpercaya di hadapan calon pelanggan.",
  },
  {
    number: "04",
    title: "Praktis",
    description:
      "Hasilnya dibuat agar bisa langsung digunakan dan membantu aktivitas bisnis sehari-hari.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Kenapa Dido Digital?
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Digitalisasi tanpa bikin pusing
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Kami membantu bisnis kecil memanfaatkan teknologi dengan cara yang
            sederhana, relevan, dan bisa digunakan.
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.number}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-sm font-bold text-white">
                {point.number}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}