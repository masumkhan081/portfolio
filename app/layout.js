import Nav from "./Nav";
import Nav2 from "./Nav2";
import "./globals.css";

export const metadata = {
  title: "Masum Khan, MERN Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-teal-700 w-full min-h-screen">
        <Nav2 />
        {children}
      </body>
    </html>
  );
}
