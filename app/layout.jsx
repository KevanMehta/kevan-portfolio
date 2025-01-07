import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});


export const metadata = {
  title: "Kevan's Portfolio Website",
  description: "Copyright@2025 Made with Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}> 
      
      <Header />
      <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
    
  );
}
