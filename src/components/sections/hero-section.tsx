import screenshotDark from "@/assets/app-screenshot-dark.png";
import screenshotLight from "@/assets/app-screenshot-light.png";
import { DownloadButtons } from "@/components/download-buttons";

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[42rem]" />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Contentful CLI bundled — macOS &amp; Windows
          </span>

          <h1 id="hero-heading" className="mt-6 text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Manage Contentful from your <span className="text-gradient-brand">desktop</span>.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Export, import, localize, and turn content into Excel — with the Contentful CLI built
            in. No terminal required.
          </p>

          <DownloadButtons size="lg" className="mt-9 justify-center" />

          <p className="mt-5 text-sm text-muted-foreground">
            Free • Works with any Contentful space • No CLI setup
          </p>
        </div>

        <figure className="mt-14 md:mt-20">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lift">
            <img
              src={screenshotLight}
              width={3024}
              height={1776}
              alt="Contentful Manager desktop app running an Export All operation with content type selection, live logs, and an exported-entities summary"
              className="block w-full dark:hidden"
            />
            <img
              src={screenshotDark}
              width={3024}
              height={1776}
              alt="Contentful Manager desktop app running an Export All operation with content type selection, live logs, and an exported-entities summary"
              className="hidden w-full dark:block"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs text-muted-foreground">
            Run Contentful export and import operations with live progress and logs.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
