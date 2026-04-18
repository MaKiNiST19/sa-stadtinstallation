/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/images/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    // WordPress → Next.js 301 redirect map
    return [
      // Legacy WP service URLs
      { source: '/installateur-wien', destination: '/leistungen', permanent: true },
      { source: '/gas-installateur-wien', destination: '/leistungen/gas-installateur-wien', permanent: true },
      { source: '/wasser-installateur-wien', destination: '/leistungen/wasserinstallateur-wien', permanent: true },
      { source: '/wasserinstallateur-wien', destination: '/leistungen/wasserinstallateur-wien', permanent: true },
      { source: '/heizung-wien', destination: '/leistungen/heizungstechnik-wien', permanent: true },
      { source: '/heizung', destination: '/leistungen/heizungstechnik-wien', permanent: true },
      { source: '/sanitaer-wien', destination: '/leistungen/sanitaertechnik-wien', permanent: true },
      { source: '/sanitaer', destination: '/leistungen/sanitaertechnik-wien', permanent: true },
      { source: '/thermenwartung', destination: '/leistungen/thermenwartung-wien', permanent: true },
      { source: '/verstopfung', destination: '/leistungen/verstopfung-wien', permanent: true },
      { source: '/rohrreinigung', destination: '/leistungen/verstopfung-wien', permanent: true },
      { source: '/notdienst', destination: '/leistungen/notfall-installateur-wien', permanent: true },
      { source: '/notfall', destination: '/leistungen/notfall-installateur-wien', permanent: true },
      { source: '/24h-notdienst', destination: '/leistungen/notfall-installateur-wien', permanent: true },
      // About / company
      { source: '/ueber-uns-2', destination: '/ueber-uns', permanent: true },
      { source: '/unternehmen', destination: '/ueber-uns', permanent: true },
      { source: '/firma', destination: '/ueber-uns', permanent: true },
      // Legal
      { source: '/datenschutz-2', destination: '/datenschutz', permanent: true },
      { source: '/impressum-2', destination: '/impressum', permanent: true },
      // Media / misc
      { source: '/fotogallerie', destination: '/galerie', permanent: true },
      { source: '/karriere', destination: '/kontakt', permanent: true },
      { source: '/jobs', destination: '/kontakt', permanent: true },
    ];
  },
};

module.exports = nextConfig;
