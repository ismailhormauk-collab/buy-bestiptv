import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";
import { Container } from "./ui";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="border-b border-line/70 bg-ink-soft/60">
      <JsonLd data={breadcrumbSchema(items)} />
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 py-4 text-xs text-mist-dim">
          <ol className="flex flex-wrap items-center gap-2">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.path} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {isLast ? (
                    <span aria-current="page" className="text-mist">
                      {item.name}
                    </span>
                  ) : (
                    <Link href={item.path} className="focus-ring rounded transition-colors hover:text-brand-300">
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
