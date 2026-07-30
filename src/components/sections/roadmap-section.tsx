import { GitBranch, Layers, Sparkles } from "lucide-react";

const items = [
  {
    icon: GitBranch,
    title: "Content-type migrations",
    body: "Run and review Contentful migration scripts through the same guided interface, with the bundled CLI doing the work.",
  },
  {
    icon: Layers,
    title: "Environment management",
    body: "Create, clone, and clean up environments without switching to a terminal window.",
  },
  {
    icon: Sparkles,
    title: "More CLI-powered tools",
    body: "New Contentful CLI capabilities are wrapped into the app regularly as they prove useful for day-to-day content operations.",
  },
];

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="border-y border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div data-reveal className="reveal max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Coming soon</p>
          <h2 id="roadmap-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Built on the Contentful CLI, with more power on the way
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Because the official CLI is bundled, new operations can be added steadily. Check back —
            the list below is what is being worked on next.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              data-reveal
              className="reveal rounded-2xl border border-dashed border-border bg-card/60 p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
