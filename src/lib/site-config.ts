// Central place for release + deployment values.
// TODO: replace these placeholders with the real values.
export const VERSION = "0.1.0";

export const SITE_URL = ""; // e.g. "https://contentful-manager.app" — leave empty to use relative URLs

// The macOS build is hosted as a GitHub Release asset.
// TODO: host a Windows .exe build and point WINDOWS_DOWNLOAD_URL at it.
export const MAC_DOWNLOAD_URL =
  "https://github.com/jovialp/Contentful-manager-web/releases/download/0.1.0/Contentful.Manager-0.1.0-arm64.dmg";
export const WINDOWS_DOWNLOAD_URL = "#download";

export const MAC_FILENAME = `Contentful Manager-${VERSION}-arm64.dmg`;
export const WINDOWS_FILENAME = `Contentful Manager Setup ${VERSION}.exe`;

export const MAC_REQUIREMENTS = "macOS 11+ (Apple Silicon)";
export const WINDOWS_REQUIREMENTS = "Windows 10/11 (64-bit)";

export const FAQS: { question: string; answer: string }[] = [
  {
    question: "Is Contentful Manager free?",
    answer:
      "Yes. Contentful Manager is free to download and use for macOS and Windows. You only need your own Contentful account and a Management API token.",
  },
  {
    question: "Do I need to install the Contentful CLI or Node.js?",
    answer:
      "No. The official Contentful CLI is bundled inside the app, and no Node.js installation is required. Download, open, and you are ready to export or import content.",
  },
  {
    question: "Where is my API token stored?",
    answer:
      "Your Contentful Management API token is encrypted locally by your operating system's secure storage. It never leaves your machine and is never sent to us.",
  },
  {
    question: "Which Contentful spaces does it work with?",
    answer:
      "Any organization, space, and environment your CMA token can access. Contentful Manager does not lock you to a single space or plan.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "macOS 11 or later on Apple Silicon, or Windows 10/11 64-bit. Roughly 300 MB of disk space and an internet connection to reach the Contentful API.",
  },
  {
    question: "macOS says the app can’t be opened — how do I open it?",
    answer:
      "The macOS build isn’t notarized yet, so Gatekeeper asks you to confirm on first launch. Open System Settings → Privacy & Security, then click “Open Anyway” next to Contentful Manager and confirm — you only need to do this once. Advanced users can instead remove the quarantine flag in Terminal: xattr -dr com.apple.quarantine \"/Applications/Contentful Manager.app\"",
  },
  {
    question: "Is my content sent to a third party?",
    answer:
      "No. Content flows directly between your computer and Contentful's API. There is no intermediary server, analytics pipeline, or third-party content processing.",
  },
];
