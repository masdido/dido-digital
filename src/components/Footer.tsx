const footerLinks = [
  { label: "Layanan", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Cara Kerja", href: "#process" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Dido Digital
            </a>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Membantu UMKM membangun kehadiran digital yang lebih rapi,
              profesional, dan mudah digunakan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Navigasi
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 transition hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Hubungi Kami
            </h3>

            <a
              href="https://wa.me/6280000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm text-gray-600 transition hover:text-gray-900"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Dido Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}