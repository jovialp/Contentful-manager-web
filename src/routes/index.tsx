import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ReleaseOperationsSection } from "@/components/sections/release-operations-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { DownloadSection } from "@/components/sections/download-section";
import { RoadmapSection } from "@/components/sections/roadmap-section";
import { FaqSection } from "@/components/sections/faq-section";
import { useReveal } from "@/hooks/use-reveal";
import { FAQS, SITE_URL, VERSION } from "@/lib/site-config";

const TITLE =
  "Contentful Manager — Desktop App for Contentful Export, Import & Localization";
const DESCRIPTION =
  "Contentful Manager is a free macOS & Windows desktop app to export, import, localize and Excel-ify Contentful content. Contentful CLI bundled — download now.";
const CANONICAL = SITE_URL || "/";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Contentful desktop app, Contentful management tool, Contentful export, Contentful import, Contentful publish entries, Contentful backup, Contentful restore from backup, Contentful field copy, Contentful CLI GUI, Contentful locale management, Contentful to Excel, Contentful content operations, Contentful release operations, Contentful environment sync, Contentful translation migration, Contentful custom app mapping",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Contentful Manager",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Windows, macOS",
          softwareVersion: VERSION,
          description: DESCRIPTION,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ReleaseOperationsSection />
        <HowItWorksSection />
        <PricingSection />
        <DownloadSection />
        <RoadmapSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
