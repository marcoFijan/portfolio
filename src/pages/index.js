import { Montserrat } from "next/font/google";
import MainCanvas from "../MainCanvas.js";
import PortfolioSection from "../PortfolioSection.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <main className={`${montserrat.className}`}>
      <MainCanvas/>   
    </main>
  );
}
