import { Montserrat, Barlow_Semi_Condensed } from "next/font/google";
import "../styles/globals.css";

const geistSans = Barlow_Semi_Condensed({
  variable: "--heading-font",
  subsets: ["latin"],
  weight: '400',
});

const geistMono = Montserrat({
  variable: "--body-font",
  subsets: ["latin"],
  weight: ['400', '500'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
