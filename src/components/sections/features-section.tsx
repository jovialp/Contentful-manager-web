import {
  Download,
  Upload,
  UploadCloud,
  Globe,
  FileSpreadsheet,
  Copy,
  TerminalSquare,
  ShieldCheck,
  ListChecks,
  History,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    icon: Download,
    title: "Export All",
    body: "Bulk-export every content type in an environment to clean, date-stamped JSON files — a dependable Contentful backup in one click.",
  },
  {
    icon: Upload,
    title: "Import All",
    body: "Import a folder of JSON into any environment, with pre-flight validation and per-file selection so you import exactly what you want.",
  },
  {
    icon: UploadCloud,
    title: "Publish All Entries",
    body: "Publish every entry across all locales for the content types you choose, with a confirmation step and live progress.",
  },
  {
    icon: Globe,
    title: "Add Locale",
    body: "Create new locales with an optional fallback in a couple of clicks. Contentful locale management without touching the terminal.",
  },
  {
    icon: FileSpreadsheet,
    title: "Generate Excel",
    body: "Convert an export into a multi-sheet Excel workbook, one sheet per locale, for translation review or client handoff.",
  },
  {
    icon: Copy,
    title: "Copy to New Field",
    body: "Back-fill one field from another across a content type's entries, with a dry-run preview and per-entry diff before anything is written.",
  },
  {
    icon: TerminalSquare,
    title: "Bundled Contentful CLI",
    body: "The official Contentful CLI ships inside the app — nothing to install, no Node.js required. A true Contentful CLI GUI.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    body: "Your Contentful management token is encrypted by the operating system and never leaves your machine.",
  },
  {
    icon: ListChecks,
    title: "Guided workflow",
    body: "Organization → Space → Environment pickers, live logs and progress, and confirmation prompts before anything destructive.",
  },
  {
    icon: History,
    title: "Operation history",
    body: "Recent runs are saved with their settings and results, and survive restarts so you always know what changed.",
  },
  {
    icon: MonitorSmartphone,
    title: "Cross-platform",
    body: "Native builds for macOS and Windows, each with polished light and dark modes.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="mx-auto max-w-6xl px-4 py-20 md:py-28"
    >
      <div data-reveal className="reveal max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Features
        </p>
        <h2
          id="features-heading"
          className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
        >
          Everything a Contentful management tool should do
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Contentful export, import, publish, backup &amp; restore,
          localization, field back-fills, and Excel reporting — all from one
          desktop app built for content operations teams.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, body }, i) => (
          <li key={title}>
            <article
              data-reveal
              className="reveal h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
