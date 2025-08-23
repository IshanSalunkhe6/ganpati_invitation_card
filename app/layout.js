import "./globals.css";

export const metadata = {
  title: "Ganesh Darshan 2025",
  description: "Ganesh Darshan Invitation Website",
  icons: {
    icon: "/logo.jpg", // Path to your logo in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpg" />
      </head>
      <body className="bg-gradient-to-b from-orange-50 to-red-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
