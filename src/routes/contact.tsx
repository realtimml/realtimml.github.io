import { createFileRoute, Link } from "@tanstack/react-router";
import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const encoded = "dGltbXlwaGFuMDY2QGdtYWlsLmNvbQ==";

  return (
    <section className="min-h-screen w-full bg-[#9EA1D4] px-28 pt-20">
      <Link className="flex justify-between group" to="https://github.com/realtimml">
        <RiGithubFill className="w-40 h-40" />
        <span className="text-9xl font-bold">
          GitHub
          <div className="bg-white h-2 w-0 group-hover:w-full transition-all duration-300 ml-auto"></div>
          </span>
      </Link>
      <Link className="flex justify-between group" to="https://www.linkedin.com/in/timmy-p/">
        <RiLinkedinBoxFill className="w-40 h-40" />
        <span className="text-9xl font-bold group">LinkedIn
          <div className="bg-white h-2 w-0 group-hover:w-full transition-all duration-300 ml-auto"></div>
          </span>
      </Link>
      <Link
        className="flex justify-between group"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `mailto:${atob(encoded)}`;
        }}
      >
        <RiMailFill className="w-40 h-40" />
        <span className="text-9xl font-bold group">Email
          <div className="bg-white h-2 w-0 group-hover:w-full transition-all duration-300 ml-auto"></div>
          </span>
      </Link>
    </section>
  );
}
