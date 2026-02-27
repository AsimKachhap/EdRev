import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "EdRev",
  description: "Edrev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-background">
        <div className="px-8 py-2 sticky top-2 z-40 ">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
