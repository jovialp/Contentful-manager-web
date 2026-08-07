import { AppleIcon, WindowsIcon } from "@/components/platform-icons";
import { usePlatform } from "@/hooks/use-platform";
import { cn } from "@/lib/utils";
import {
  MAC_DOWNLOAD_URL,
  MAC_FILENAME,
  WINDOWS_DOWNLOAD_URL,
  WINDOWS_FILENAME,
} from "@/lib/site-config";

type Props = {
  size?: "default" | "lg";
  showFilenames?: boolean;
  className?: string;
};

export function DownloadButtons({ size = "default", showFilenames = false, className }: Props) {
  const platform = usePlatform();

  const base =
    "group inline-flex items-center justify-center gap-3 rounded-xl font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
  const dims = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";

  const primary = "bg-primary text-primary-foreground shadow-lift hover:bg-primary-deep";
  const secondary = "border border-border bg-card text-foreground shadow-soft hover:bg-accent";

  const macRecommended = platform === "mac";
  const winRecommended = platform === "windows";

  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:flex-wrap", className)}>
      <div className="flex flex-col gap-2">
        <a
          href={MAC_DOWNLOAD_URL}
          className={cn(base, dims, macRecommended || platform === "unknown" ? primary : secondary)}
        >
          <AppleIcon className="h-5 w-5" />
          <span>Download for macOS</span>
          {macRecommended && (
            <span className="rounded-md bg-highlight px-2 py-0.5 text-xs font-bold text-highlight-foreground">
              Recommended
            </span>
          )}
        </a>
        {showFilenames && (
          <p className="text-xs text-muted-foreground">
            <span className="font-mono">{MAC_FILENAME}</span>
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <a
          href={WINDOWS_DOWNLOAD_URL}
          className={cn(base, dims, winRecommended ? primary : secondary)}
        >
          <WindowsIcon className="h-5 w-5" />
          <span>Download for Windows</span>
          {winRecommended && (
            <span className="rounded-md bg-highlight px-2 py-0.5 text-xs font-bold text-highlight-foreground">
              Recommended
            </span>
          )}
        </a>
        {showFilenames && (
          <p className="text-xs text-muted-foreground">
            <span className="font-mono">{WINDOWS_FILENAME}</span>
          </p>
        )}
      </div>
    </div>
  );
}
