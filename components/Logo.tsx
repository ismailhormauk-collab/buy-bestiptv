import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Logo({
  className = "h-9 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/branding/logo.png"
      alt={`${siteConfig.name} logo`}
      width={216}
      height={144}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
