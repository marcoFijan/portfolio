import { useProgress } from "@react-three/drei";

export default function LoadingScreen({ started, onStarted }) {
  const { progress } = useProgress();
  return (
    <section className="w-full h-screen bg-cyan-400 z-50">
      <div
        style={{ width: `${progress}%` }}
        className="bg-CTAColor h-1/2"
      ></div>
    </section>
  );
}
