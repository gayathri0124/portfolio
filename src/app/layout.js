import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "Gayathri Kalthi Reddy | Software & ML Engineer",
  description: "Portfolio of Gayathri Kalthi Reddy — software and ML engineer building high-performance systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${spaceGrotesk.className} ${jetbrainsMono.className}`}
        style={{
          "--font-space-grotesk": spaceGrotesk.style.fontFamily,
          "--font-jetbrains-mono": jetbrainsMono.style.fontFamily,
        }}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
