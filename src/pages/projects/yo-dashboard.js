import { Montserrat } from "next/font/google";
import YODashboardContent from "../../pageContents/ProjectYODashboardClients";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function YODashboardClients() {
  return (
    <main className={`bg-bgColorDark ${montserrat.className}`}>
      <YODashboardContent />
    </main>
  );
}
