import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

const thumbs = [
  "/images/blog/iptv-blog-illustration-1.svg",
  "/images/blog/iptv-blog-illustration-2.svg",
  "/images/blog/iptv-blog-illustration-3.svg",
  "/images/blog/iptv-blog-illustration-4.svg",
  "/images/blog/iptv-blog-illustration-5.svg",
];

export function BlogCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  const thumb = thumbs[(post.thumbnail - 1 + thumbs.length) % thumbs.length];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="focus-ring glass group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-line/70">
        <Image
          src={thumb}
          alt={post.imageAlt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-xs font-medium text-mist-dim">
          <span className="rounded-full border border-brand-400/25 bg-brand-500/10 px-2.5 py-1 text-brand-300">
            {post.category}
          </span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-ice transition-colors group-hover:text-brand-300">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-mist">{post.excerpt}</p>
      </div>
    </Link>
  );
}
