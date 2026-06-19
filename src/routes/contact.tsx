import { createFileRoute } from "@tanstack/react-router";
import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";
import { ContactLink } from "../components/ContactLink";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const encoded = "dGltbXlwaGFuMDY2QGdtYWlsLmNvbQ==";

  return (
    <section className="min-h-app w-full bg-[#9EA1D4] px-10 sm:px-28 pt-20">
      <ContactLink
        icon={<RiGithubFill className="w-20 h-20 md:w-32 md:h-32 xl:w-40 xl:h-40" />}
        label="GitHub"
        href="https://github.com/realtimml"
      />
      <ContactLink
        icon={<RiLinkedinBoxFill className="w-20 h-20 md:w-32 md:h-32 xl:w-40 xl:h-40" />}
        label="LinkedIn"
        href="https://www.linkedin.com/in/timmy-p/"
      />
      <ContactLink
        icon={<RiMailFill className="w-20 h-20 md:w-32 md:h-32 xl:w-40 xl:h-40" />}
        label="Email"
        onClick={() => { window.location.href = `mailto:${atob(encoded)}` }}
      />
    </section>
  );
}
