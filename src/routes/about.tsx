import { createFileRoute } from "@tanstack/react-router";
import { NeofetchCard } from "../components/NeofetchCard";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-[url(src/assets/imgs/Backgrounds/ground.jpg)] bg-cover bg-position-[100%_30%] brightness-80">
      <div className="min-h-screen backdrop-blur-md px-28 py-20 font-monospace text-2xl">
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
