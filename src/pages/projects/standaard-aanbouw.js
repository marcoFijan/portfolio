import { Montserrat } from "next/font/google";
import StandaardAanbouwContent from "../../pageContents/ProjectStandaardAanbouw";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function KBOTilburgReeshof() {
  return (
    <main className={`bg-bgColorDark ${montserrat.className}`}>
      <StandaardAanbouwContent />
    </main>
  );
}
