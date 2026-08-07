import { DownloadButtons } from "@/components/download-buttons";
import { MAC_REQUIREMENTS, VERSION, WINDOWS_REQUIREMENTS } from "@/lib/site-config";

export function DownloadSection() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="mx-auto max-w-6xl px-4 py-20 md:py-28"
    >
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

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-secondary/40 p-4 text-sm">
            <p className="font-semibold text-foreground">First launch on macOS</p>
            <p className="mt-1 text-muted-foreground">
              The macOS build isn’t notarized yet, so Gatekeeper blocks it the first time.
            </p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-muted-foreground">
              <li>
                Open{" "}
                <span className="font-medium text-foreground">
                  System Settings → Privacy &amp; Security
                </span>
                .
              </li>
              <li>
                Click <span className="font-medium text-foreground">Open Anyway</span> next to
                Contentful Manager, then confirm.
              </li>
            </ol>
            <p className="mt-3 text-xs text-muted-foreground">You only need to do this once.</p>
            <p className="mt-3 text-muted-foreground">
              Advanced: clear the quarantine flag in Terminal instead.
            </p>
            <code className="mt-2 block overflow-x-auto rounded-lg bg-background px-3 py-2 font-mono text-xs text-foreground">
              {`xattr -dr com.apple.quarantine "/Applications/Contentful Manager.app"`}
            </code>
          </div>

          <div className="rounded-xl border border-border bg-secondary/40 p-4 text-sm">
            <p className="font-semibold text-foreground">First launch on Windows</p>
            <p className="mt-1 text-muted-foreground">
              The Windows build isn’t code-signed yet, so SmartScreen warns the first time.
            </p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-muted-foreground">
              <li>Unzip the downloaded ZIP file.</li>
              <li>
                Open the <span className="font-medium text-foreground">Contentful Manager</span>{" "}
                folder.
              </li>
              <li>
                Double-click{" "}
                <span className="font-medium text-foreground">Contentful Manager.exe</span>.
              </li>
              <li>
                If SmartScreen appears, click{" "}
                <span className="font-medium text-foreground">More info</span>, then{" "}
                <span className="font-medium text-foreground">Run anyway</span>.
              </li>
            </ol>
            <p className="mt-3 text-xs text-muted-foreground">You only need to do this once.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
