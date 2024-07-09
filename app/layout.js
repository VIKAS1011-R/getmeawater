import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "../components/SessionWrapper"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Me a Water",
  description: "Created By R.Vikas  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white bg-blue-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <SessionWrapper>
        <Navbar />
        <div className="min-h-screen text-white bg-blue-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        {children}
        </div>
        <Footer />
        </SessionWrapper>
        </body>
    </html>
  );
}
