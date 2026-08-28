const WHATSAPP_NUMBER = "6287858760050";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;
}

export const whatsappMessages = {
  consultation:
    "Halo Dido Digital, saya tertarik dengan layanan digitalisasi untuk bisnis saya. Saya ingin konsultasi mengenai kebutuhan bisnis saya.",

  starter:
    "Halo Dido Digital, saya tertarik dengan Paket Starter. Saya ingin mendapatkan informasi lebih lanjut.",

  business:
    "Halo Dido Digital, saya tertarik dengan Paket Business. Saya ingin mendapatkan informasi lebih lanjut.",

  professional:
    "Halo Dido Digital, saya tertarik dengan Paket Professional. Saya ingin mendapatkan informasi lebih lanjut.",
};