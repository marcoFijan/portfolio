import { Montserrat } from "next/font/google";
import YOGwotyContent from "../../templates/ProjectYOGWOTY";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function KBOTilburgReeshof() {
  return (
    <main className={`bg-bgColorDark ${montserrat.className}`}>
      <YOGwotyContent />
    </main>
  );
}
