import "./globals.css";

export const metadata = {
  title: "Ganesh Darshan 2025",
  description: "Ganesh Darshan Invitation Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Ganpati logo as favicon */}
        <link rel="icon" href="/ganpati-logo.jpg" type="image/jpeg" sizes="32x32" />
      </head>
      <body className="bg-gradient-to-b from-orange-50 to-red-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
