import { Montserrat } from "next/font/google";
import MainCanvas from "../pageContents/MainCanvas.js";
import Header from "../organisms/Header.js";
import Footer from "../organisms/Footer.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${montserrat.className}`}>
        <MainCanvas />
      </main>
    </>
  );
}
