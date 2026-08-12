import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, GlassCard, PrimaryButton, SectionHeading } from "@/components/ui";
import { BlogCard } from "@/components/BlogCard";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getPostBySlug, getRelatedPosts, slugifyHeading } from "@/lib/blog";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { ArrowRightIcon } from "@/components/icons";

const thumbs = [
  "/images/blog/iptv-blog-illustration-1.svg",
  "/images/blog/iptv-blog-illustration-2.svg",
  "/images/blog/iptv-blog-illustration-3.svg",
  "/images/blog/iptv-blog-illustration-4.svg",
  "/images/blog/iptv-blog-illustration-5.svg",
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: [post.focusKeyword, ...post.secondaryKeywords],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const thumb = thumbs[(post.thumbnail - 1 + thumbs.length) % thumbs.length];
  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <JsonLd data={articleSchema(post, thumb)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      {post.faq.length > 0 ? <JsonLd data={faqSchema(post.faq)} /> : null}

      <article className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <header className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
            <span className="mx-auto rounded-full border border-brand-400/25 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
              {post.category}
            </span>
            <h1 className="font-display text-3xl font-bold tracking-tight text-ice sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-mist-dim">
              <span>By the Buy Best IPTV Team</span>
              <span aria-hidden="true">•</span>
              <time dateTime={post.date}>{formattedDate}</time>
              <span aria-hidden="true">•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="relative mx-auto aspect-[21/9] w-full max-w-4xl overflow-hidden rounded-3xl border border-line/70">
            <Image
              src={thumb}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 896px, 100vw"
            />
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-5">
              {post.intro.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>

            {post.sections.length > 2 ? (
              <nav aria-label="Table of contents" className="glass rounded-2xl p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">
                  On this page
                </p>
                <ol className="mt-3 flex flex-col gap-2">
                  {post.sections.map((section) => (
                    <li key={section.heading}>
                      <a
                        href={`#${slugifyHeading(section.heading)}`}
                        className="focus-ring rounded text-sm text-mist underline-offset-2 hover:text-brand-300 hover:underline"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            {post.sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-4">
                <h2
                  id={slugifyHeading(section.heading)}
                  className="scroll-mt-24 font-display text-2xl font-semibold text-ice"
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-mist">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div className="flex flex-col gap-4">
              {post.conclusion.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>

            {(post.internalLinks.length > 0 || post.externalLinks.length > 0) && (
              <GlassCard className="flex flex-col gap-5 sm:flex-row sm:gap-10">
                {post.internalLinks.length > 0 ? (
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-sm font-semibold text-ice">Related on our site</h3>
                    <ul className="flex flex-col gap-1.5">
                      {post.internalLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="focus-ring inline-flex items-center gap-1.5 rounded text-sm text-brand-300 underline-offset-2 hover:underline"
                          >
                            {link.label}
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {post.externalLinks.length > 0 ? (
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-sm font-semibold text-ice">Further reading</h3>
                    <ul className="flex flex-col gap-1.5">
                      {post.externalLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring inline-flex items-center gap-1.5 rounded text-sm text-mist underline-offset-2 hover:text-brand-300 hover:underline"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </GlassCard>
            )}

            {post.faq.length > 0 ? (
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-2xl font-semibold text-ice">Quick FAQ</h2>
                <div className="flex flex-col gap-4">
                  {post.faq.map((item) => (
                    <GlassCard key={item.question} className="flex flex-col gap-1.5">
                      <h3 className="text-sm font-semibold text-ice">{item.question}</h3>
                      <p className="text-sm leading-relaxed text-mist">{item.answer}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="flex flex-col items-center gap-4 border-t border-line/70 pt-10 text-center">
              <p className="text-sm text-mist">Ready to set up your own IPTV player?</p>
              <PrimaryButton href="/pricing">View Pricing Plans</PrimaryButton>
              <p className="text-xs text-mist-dim">
                Reminder: use only legally licensed playlists and content sources. See our{" "}
                <Link href="/faq" className="text-brand-300 underline underline-offset-2">
                  Legal &amp; Responsible Use FAQ
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-line/70 bg-ink-soft/50 py-16 sm:py-20">
          <Container className="flex flex-col gap-10">
            <SectionHeading eyebrow="Keep reading" title="Related articles" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
