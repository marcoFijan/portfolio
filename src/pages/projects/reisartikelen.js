import { Montserrat } from "next/font/google";
import ReisartikelenContent from "../../templates/ProjectReisartikelen";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Reisartikelen() {
  return (
    <main className={`bg-bgColorDark ${montserrat.className}`}>
      <ReisartikelenContent />
    </main>
  );
}
