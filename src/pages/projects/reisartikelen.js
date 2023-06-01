import { Montserrat } from "next/font/google";
import ReisartikelenContent from "../../pageContents/ProjectReisartikelen";
import Header from "../../organisms/Header.js";
import Footer from "../../organisms/Footer.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Reisartikelen() {
  return (
    <>
      <Header />
      <main
        className={`bg-gradient-radial from-bgColorDarkSec to-bgColorDark ${montserrat.className}`}
      >
        <ReisartikelenContent />
      </main>
      <Footer />
    </>
  );
}
