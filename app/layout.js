import NavTop from "./components/nav/NavTop";
import "./globals.css";

export const metadata = {
  title: "Masum Khan, MERN Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col bg-slate-200 bg-opacity-40 w-full min-h-screen">
        <NavTop />
        {children}
      </body>
    </html>
  );
}
