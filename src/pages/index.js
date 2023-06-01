import { Montserrat } from "next/font/google";
import MainCanvas from "../pageContents/MainCanvas.js";
import Header from "../organisms/Header.js";

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
        {/* <div className="bg-white w-full h-screen absolute top-0 left-0" /> */}

        <div className="bg-gradient-radial from-bgColorDarkSec to-bgColorDark w-full h-screen absolute top-0 left-0" />
        <MainCanvas />
      </main>
    </>
  );
}
