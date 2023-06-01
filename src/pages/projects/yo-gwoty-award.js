import { Montserrat } from "next/font/google";
import YOGwotyContent from "../../pageContents/ProjectYOGWOTY";
import Header from "../../organisms/Header.js";
import Footer from "../../organisms/Footer.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function YOGwotyAward() {
  return (
    <>
      <Header />
      <main
        className={`bg-gradient-radial from-bgColorDarkSec to-bgColorDark ${montserrat.className}`}
      >
        <YOGwotyContent />
      </main>
      <Footer />
    </>
  );
}
