import { Eye, GitCompareArrows, Languages, ListChecks, Rocket, Settings2 } from "lucide-react";

const operations = [
  {
    icon: GitCompareArrows,
    title: "Custom App Mapping",
    body: "Keep custom app and UI-extension IDs consistent across environments — each environment installs its own IDs, so editor interfaces need to point at the right ones.",
    points: [
      {
        label: "Perform Mapping",
        text: "After a merge or release, remap a destination environment's editor interfaces from the source's app IDs to the destination's — with a dry-run preview and a per-field diff before anything is written.",
      },
      {
        label: "Add / Update Mappings",
        text: "An editable table with auto-detect of installed apps and extensions, drag-and-drop between cells, search, validation, and JSON import / export.",
      },
    ],
  },
  {
    icon: Settings2,
    title: "Environment Mapping Configuration",
    body: "Choose which of a space's environments take part in mapping. Your selection drives the columns of the mapping table and the source / destination options everywhere else.",
  },
  {
    icon: Languages,
    title: "Translation Migration",
    body: "Copy translation entries that exist in one environment but not another. A searchable, sortable preview shows each entry's key, source value, content type and destination status — review, then add and publish in one click.",
  },
];

const workflow = [
  {
    icon: Eye,
    title: "Preview",
    text: "Every operation starts as a dry run, so you see exactly what will change.",
  },
  {
    icon: ListChecks,
    title: "Review",
    text: "Search, filter and pick the content types or entries to include.",
  },
  {
    icon: Rocket,
    title: "Apply",
    text: "Confirm and write only to the destination, with live progress and a summary.",
  },
];

export function ReleaseOperationsSection() {
  return (
    <section
      id="release-operations"
      aria-labelledby="release-heading"
      className="mx-auto max-w-6xl px-4 py-20 md:py-28"
    >
      <div data-reveal className="reveal max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Release Operations
        </p>
        <h2 id="release-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Promote content and configuration between environments
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          An advanced module that appears once you pick a space — safely sync custom app IDs and
          migrate translations from one environment to another, without hand-editing JSON or
          touching the CLI.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {operations.map(({ icon: Icon, title, body, points }, i) => (
          <li key={title}>
            <article
              data-reveal
              className="reveal flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>

              {points ? (
                <ul className="mt-4 space-y-3 border-t border-border pt-4">
                  {points.map((point) => (
                    <li key={point.label}>
                      <p className="text-sm font-semibold">{point.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {point.text}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </li>
        ))}
      </ul>

      <div
        data-reveal
        className="reveal mt-10 rounded-2xl border border-border bg-secondary/40 p-6 md:p-8"
      >
        <p className="text-sm font-semibold">Safe by default</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Perform Mapping and Translation Migration never write blindly — they follow the same
          three-step flow.
        </p>
        <ol className="mt-6 grid gap-5 md:grid-cols-3">
          {workflow.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="flex gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold">
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
