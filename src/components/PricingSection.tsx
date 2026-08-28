import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const plans = [
  {
    name: "Starter",
    price: "299K",
    description: "Untuk UMKM yang membutuhkan katalog digital sederhana.",
    features: [
      "Katalog digital",
      "Maks. 20 produk",
      "Nama, harga & deskripsi produk",
      "Tombol WhatsApp",
      "Link katalog siap dibagikan",
      "1x revisi",
    ],
    message: whatsappMessages.starter,
  },
  {
    name: "Business",
    price: "699K",
    description: "Untuk bisnis yang ingin tampil lebih profesional secara online.",
    popular: true,
    features: [
      "Website landing page",
      "Katalog hingga 50 produk",
      "Profil bisnis",
      "Tombol WhatsApp",
      "Google Maps",
      "Social media links",
      "Responsive mobile & desktop",
      "Basic SEO",
      "2x revisi",
    ],
    message: whatsappMessages.business,
  },
  {
    name: "Professional",
    price: "1.499K",
    description:
      "Untuk bisnis yang membutuhkan website lebih lengkap dan custom.",
    features: [
      "Website custom",
      "Hingga 5 halaman",
      "Katalog hingga 100 produk",
      "Profil & galeri bisnis",
      "Form kontak",
      "WhatsApp integration",
      "Google Maps",
      "Social media integration",
      "Basic SEO",
      "3x revisi",
    ],
    message: whatsappMessages.professional,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-gray-50 px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Paket Layanan
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pilih solusi yang sesuai
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Mulai dari kebutuhan sederhana hingga website yang lebih lengkap
            untuk membantu bisnis Anda berkembang secara digital.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular
                  ? "border-gray-900 ring-1 ring-gray-900"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-4 py-1 text-xs font-semibold text-white">
                  Paling Populer
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-600">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-sm font-medium text-gray-500">
                    Rp
                  </span>

                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                  </span>
                </div>
              </div>

              <div className="my-7 h-px bg-gray-200" />

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="mt-0.5 font-semibold text-gray-900">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppLink(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                Pilih Paket
              </a>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-gray-500">
          Harga dapat disesuaikan berdasarkan kebutuhan dan tingkat
          kompleksitas project. Domain dan layanan pihak ketiga dapat
          dikenakan biaya terpisah.
        </p>
      </div>
    </section>
  );
}