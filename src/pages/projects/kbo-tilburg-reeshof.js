import { Montserrat } from "next/font/google";
import ProjectTemplate from "../../templates/ProjectTemplate";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function KBOTilburgReeshof() {
  return (
    <main className={`${montserrat.className}`}>
      <h1>TEST</h1>
      <ProjectTemplate />
    </main>
  );
}
