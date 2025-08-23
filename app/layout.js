import "./globals.css";

export const metadata = {
  title: "Ganesh Darshan 2025",
  description: "Ganesh Darshan Invitation Website",
  icons: {
    icon: "/ganpati-logo.jpg",
    shortcut: "/ganpati-logo.jpg",
    apple: "/ganpati-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ganpati-logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/ganpati-logo.jpg" />
      </head>
      <body className="bg-gradient-to-b from-orange-50 to-red-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
