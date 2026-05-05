import { Inter, JetBrains_Mono } from 'next/font/google';
import NavTop from "../components/nav/NavTop";
import Footer from "../components/footer/Footer";
import "../styles/globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: "Masum Khan, MERN Expert",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans max-w-[1680px] mx-auto flex flex-col bg-slate-200 w-full min-h-screen h-fit text-slate-800">
        <NavTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
