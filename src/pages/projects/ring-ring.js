import { Montserrat } from "next/font/google";
import RingRingContent from "../../pageContents/ProjectRingRing";
import Header from "../../organisms/Header.js";
import Footer from "../../organisms/Footer.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RingRingThumb() {
  return (
    <>
      <Header />
      <main
        className={`bg-gradient-to-tr from-bgColorDarkSec to-bgColorDark pb-[50vh] ${montserrat.className}`}
      >
        <RingRingContent />
      </main>
      <Footer />
    </>
  );
}
