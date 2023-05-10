import { Montserrat } from "next/font/google";
import RingRingContent from "../../templates/ProjectRingRing";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RingRingThumb() {
  return (
    <main className={`bg-bgColorDark ${montserrat.className}`}>
      <RingRingContent />
    </main>
  );
}
