import NavTop from "../components/nav/NavTop";
import Footer from "../components/footer/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "Masum Khan, MERN Expert",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1680px]  mx-auto flex flex-col bg-slate-200 bg-opacity-40 w-full min-h-screen h-fit">
        <NavTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
