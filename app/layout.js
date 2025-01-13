import NavTop from "../components/nav/NavTop";
import "../styles/globals.css";

export const metadata = {
  title: "Masum Khan, MERN Expert",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col bg-slate-200 bg-opacity-40 w-full min-h-screen max-h-screen ">
        <NavTop />
        {children}
      </body>
    </html>
  );
}
