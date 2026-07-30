import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <Logo size={28} />
            <span className="font-bold tracking-tight">Contentful Manager</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            A desktop app for Contentful export, import, locale management, and Excel handoff —
            with the Contentful CLI built in.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#download" className="rounded transition-colors hover:text-foreground">
                Download
              </a>
            </li>
            <li>
              <a href="#features" className="rounded transition-colors hover:text-foreground">
                Features
              </a>
            </li>
            <li>
              <a href="#faq" className="rounded transition-colors hover:text-foreground">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Contentful Manager. All rights reserved.</p>
          <p>
            Not affiliated with or endorsed by Contentful GmbH. Contentful is a trademark of its
            respective owner.
          </p>
        </div>
      </div>
    </footer>
  );
}
