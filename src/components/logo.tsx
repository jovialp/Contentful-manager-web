import logo from "@/assets/contentful-manager-logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <img
      src={logo}
      width={size}
      height={size}
      alt="Contentful Manager app logo: a blue hexagon with a multicolored C and an app window with a gear"
      className={cn("shrink-0", className)}
      style={{ width: size, height: size }}
    />
  );
}
