import { Montserrat } from "next/font/google";
import ProjectsOverview from "../../templates/ProjectsOverview.js";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Projects() {
  return (
    <main className={`bg-bgColorDark ${montserrat.className}`}>
      <ProjectsOverview />
    </main>
  );
}
