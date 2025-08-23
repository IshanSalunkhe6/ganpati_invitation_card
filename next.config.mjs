// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Remove the floating "N" dev badge + panel
  // Newer Next versions accept `false` to disable the whole UI
  devIndicators: false,

  // If your version needs the object form, use the next line instead:
  // devIndicators: { buildActivity: false },
};

export default nextConfig;
