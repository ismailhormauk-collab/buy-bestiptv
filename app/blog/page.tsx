import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, GlassCard, SecondaryButton, SectionHeading } from "@/components/ui";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "IPTV Blog — Guides on Encoders, Playlists & Providers",
  description:
    "50+ in-depth guides for IPTV buyers: encoders, HDMI/SDI setup, playlists, EPG, provider evaluation and device compatibility from the Buy Best IPTV team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    type: "website",
    title: "IPTV Blog — Guides on Encoders, Playlists & Providers",
    description:
      "50+ in-depth guides for IPTV buyers: encoders, HDMI/SDI setup, playlists, EPG, provider evaluation and device compatibility from the Buy Best IPTV team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Blog — Guides on Encoders, Playlists & Providers",
    description:
      "50+ in-depth guides for IPTV buyers: encoders, HDMI/SDI setup, playlists, EPG, provider evaluation and device compatibility from the Buy Best IPTV team.",
  },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            as="h1"
            eyebrow="Blog"
            title="IPTV Guides & Streaming Tips"
            description="Practical, legitimate guides for getting the most out of your IPTV player — from playlist setup to performance and legal use."
          />
          {sorted.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((post, index) => (
                <BlogCard key={post.slug} post={post} priority={index < 3} />
              ))}
            </div>
          ) : (
            <GlassCard className="flex flex-col items-center gap-4 py-14 text-center">
              <h2 className="font-display text-xl font-semibold text-ice">New guides are on the way</h2>
              <p className="max-w-md text-sm leading-relaxed text-mist">
                We&apos;re preparing fresh IPTV guides and streaming tips. In the meantime, check out
                our features and installation help to get set up.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <SecondaryButton href="/features">Explore Features</SecondaryButton>
                <SecondaryButton href="/installation">Installation Guide</SecondaryButton>
              </div>
            </GlassCard>
          )}
        </Container>
      </section>
    </>
  );
}
