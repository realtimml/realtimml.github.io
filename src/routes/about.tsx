import { createFileRoute } from "@tanstack/react-router";
import { NeofetchCard } from "../components/NeofetchCard";
import groundBg from "../assets/imgs/Backgrounds/ground.jpg";
import { preloadImage } from "../utils/preloadImage";

export const Route = createFileRoute("/about")({
  loader: () => preloadImage(groundBg),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="relative min-h-app w-full overflow-hidden brightness-80">
      <div
        aria-hidden
        className="absolute inset-0 scale-110 bg-cover bg-position-[100%_30%] blur-2xl md:blur-md"
        style={{ backgroundImage: `url(${groundBg})` }}
      />
      <div className="relative z-10 min-h-app px-6 sm:px-12 xl:px-28 py-20 font-monospace text-[19px] md:text-2xl">
        <p className="w-fit overflow-hidden whitespace-nowrap animate-typing">
          remote-user@timml.net ~ % neofetch
        </p>
        <NeofetchCard />
        <p className="w-fit border-r-7 border-r-transparent pr-[1ch] animate-caret-reveal">
          remote-user@timml.net ~ %
        </p>
      </div>
    </section>
  );
}
