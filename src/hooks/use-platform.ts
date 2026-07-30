import { useEffect, useState } from "react";

export type Platform = "mac" | "windows" | "unknown";

/** Detects the visitor's desktop OS after hydration (SSR-safe). */
export function usePlatform(): Platform {
  const [platform, setPlatform] = useState<Platform>("unknown");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("mac")) setPlatform("mac");
    else if (ua.includes("win")) setPlatform("windows");
  }, []);

  return platform;
}
