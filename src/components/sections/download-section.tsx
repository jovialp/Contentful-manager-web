import { DownloadButtons } from "@/components/download-buttons";
import { MAC_REQUIREMENTS, VERSION, WINDOWS_REQUIREMENTS } from "@/lib/site-config";

export function DownloadSection() {
  return (
    <section id="download" aria-labelledby="download-heading" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div
        data-reveal
        className="reveal overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lift md:p-14"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Download</p>
          <h2 id="download-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Get the Contentful desktop app
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Free to download. Sign in with your own Contentful management token and start exporting
            in minutes.
          </p>
        </div>

        <DownloadButtons size="lg" showFilenames className="mt-9" />

        <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-sm font-semibold">macOS</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{MAC_REQUIREMENTS}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold">Windows</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{WINDOWS_REQUIREMENTS}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold">Current version</dt>
            <dd className="mt-1 text-sm text-muted-foreground">v{VERSION}</dd>
          </div>
        </dl>

        <div className="mt-6 rounded-xl border border-border bg-secondary/40 p-4 text-sm">
          <p className="font-semibold text-foreground">Opening on macOS</p>
          <p className="mt-1 text-muted-foreground">
            On first launch, macOS may block the app because it is not notarized
            yet. Open{" "}
            <span className="font-medium text-foreground">
              System Settings → Privacy &amp; Security
            </span>{" "}
            and click{" "}
            <span className="font-medium text-foreground">Open Anyway</span> next
            to Contentful Manager. You only need to do this once.
          </p>
          <p className="mt-3 text-muted-foreground">
            Or remove the quarantine flag from Terminal:
          </p>
          <code className="mt-2 block overflow-x-auto rounded-lg bg-background px-3 py-2 font-mono text-xs text-foreground">
            {`xattr -dr com.apple.quarantine "/Applications/Contentful Manager.app"`}
          </code>
        </div>
      </div>
    </section>
  );
}
