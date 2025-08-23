import "./globals.css";

export const metadata = {
  title: "Ganesh Darshan 2025",
  description: "Ganesh Darshan Invitation Website",
  icons: {
    icon: "/ganpati-logo.png", // Favicon in browser tab
  },
  openGraph: {
    title: "Ganesh Darshan 2025",
    description: "Ganesh Darshan Invitation Website",
    url: "https://salunkhe-ganpati-invitation.vercel.app/",
    siteName: "Ganesh Darshan 2025",
    images: [
      {
        url: "/ganpati-logo.png", // WhatsApp preview image
        width: 1200,
        height: 630,
        alt: "Ganesh Darshan 2025 Logo",
      },
    ],
    type: "website",
  },
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-orange-50 to-red-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
