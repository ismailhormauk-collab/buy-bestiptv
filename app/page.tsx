import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, GlassCard, PrimaryButton, SecondaryButton, SectionHeading } from "@/components/ui";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BlogCard } from "@/components/BlogCard";
import { JsonLd } from "@/components/JsonLd";
import { coreFeatures } from "@/lib/features";
import { pricingPlans } from "@/lib/pricing";
import { faqs } from "@/lib/faqs";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { ArrowRightIcon, CheckIcon, InstallIcon, PlaylistIcon, SupportIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Buy Best IPTV Software for Your Streaming Setup",
  description:
    "Buy best IPTV player software with M3U playlist support, EPG guides, favorites and hands-on installation help across Android, iOS, Fire TV and Smart TV.",
  keywords: [
    "buy best IPTV",
    "best IPTV software",
    "IPTV player",
    "IPTV player software",
    "IPTV streaming software",
    "IPTV playlist player",
    "IPTV M3U player",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Buy Best IPTV Software for Your Streaming Setup",
    description:
      "Buy best IPTV player software with M3U playlist support, EPG guides, favorites and hands-on installation help across every major device.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Best IPTV Software for Your Streaming Setup",
    description:
      "Buy best IPTV player software with M3U playlist support, EPG guides, favorites and hands-on installation help across every major device.",
  },
};

const homeFaqs = faqs.slice(0, 5);

const steps = [
  {
    title: "Choose your plan",
    description: "Pick the software plan that fits your setup — from 1 month to 12 months, with device allowances that scale with the term.",
    icon: PlaylistIcon,
  },
  {
    title: "Message our team",
    description: "Reach out on WhatsApp or Telegram to confirm your plan and receive your player download and setup instructions.",
    icon: SupportIcon,
  },
  {
    title: "Install and connect",
    description: "Install the player on your device, then add your own M3U playlist or Xtream credentials and EPG source.",
    icon: InstallIcon,
  },
  {
    title: "Start streaming",
    description: "Browse by category, star your favorites, and enjoy a clean interface across every device you use.",
    icon: ArrowRightIcon,
  },
];

const trustPoints = [
  "M3U & Xtream playlist support",
  "Cross-platform player software",
  "Hands-on installation support",
  "Responsive WhatsApp & Telegram help",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20">
        <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="flex flex-col items-start gap-6 animate-fade-up">
            <Eyebrow>IPTV Player Software</Eyebrow>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ice sm:text-5xl lg:text-[3.4rem]">
              Buy Best IPTV Software for Your Streaming Setup
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              {siteConfig.name} is a premium IPTV player built for people who want a clean, reliable
              way to manage their own playlists. Import M3U or Xtream sources, connect an EPG guide,
              organize favorites, and stream in HD or 4K where your source and connection support it —
              all from one modern interface across your devices.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/pricing">See Pricing Plans</PrimaryButton>
              <SecondaryButton href={siteConfig.contact.whatsappHref} external>
                Chat on WhatsApp
              </SecondaryButton>
            </div>
            <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-mist">
                  <CheckIcon className="h-4 w-4 shrink-0 text-brand-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-float">
            <Image
              src="/images/buy-best-iptv-player-interface.svg"
              alt="Buy Best IPTV player interface showing a playlist sidebar and video preview window"
              width={640}
              height={480}
              priority
              className="w-full rounded-3xl shadow-glow"
            />
          </div>
        </Container>
      </section>

      {/* Legal / responsible use strip */}
      <section className="border-y border-line/70 bg-ink-soft/70 py-6">
        <Container>
          <p className="text-center text-sm leading-relaxed text-mist-dim">
            {siteConfig.name} provides IPTV player software and setup support only. We do not sell or
            distribute TV channels, movies, sports coverage or any copyrighted broadcasts — you are
            responsible for connecting your own legally licensed playlist or subscription source. Read
            our{" "}
            <Link href="/faq" className="focus-ring rounded text-brand-300 underline underline-offset-2">
              Legal &amp; Responsible Use FAQ
            </Link>{" "}
            for more detail.
          </p>
        </Container>
      </section>

      {/* What is an IPTV player */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Image
              src="/images/iptv-playlist-epg-diagram.svg"
              alt="Diagram showing playlist entries on the left connecting to a program guide and video preview on the right"
              width={560}
              height={480}
              className="w-full rounded-3xl border border-line/70"
            />
          </div>
          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title="What does an IPTV player actually do?"
            />
            <p className="text-base leading-relaxed text-mist">
              IPTV — Internet Protocol Television — simply means video delivered over an internet
              connection rather than through a satellite dish or cable line. An IPTV player is the
              software that reads a stream list, most commonly in{" "}
              <a
                href="https://en.wikipedia.org/wiki/M3U"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded text-brand-300 underline underline-offset-2"
              >
                M3U playlist
              </a>{" "}
              format, and turns it into an organized, watchable interface.
            </p>
            <p className="text-base leading-relaxed text-mist">
              Our software focuses on doing that job exceptionally well: fast playlist parsing, stable
              playback, EPG integration, and a modern interface that works the same way whether you&apos;re
              on a smart TV, phone or laptop. Learn more about the underlying technology on the{" "}
              <a
                href="https://en.wikipedia.org/wiki/IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded text-brand-300 underline underline-offset-2"
              >
                Wikipedia IPTV overview
              </a>
              .
            </p>
            <SecondaryButton href="/features" className="w-fit">
              Explore all features
            </SecondaryButton>
          </div>
        </Container>
      </section>

      {/* Feature grid */}
      <section className="border-t border-line/70 bg-ink-soft/50 py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Everything included"
            title="Everything you need in one IPTV player"
            description="From playlist organization to installation help, every plan includes the same complete feature set."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
          <div className="flex justify-center">
            <SecondaryButton href="/features">See the full feature list</SecondaryButton>
          </div>
        </Container>
      </section>

      {/* How it works steps */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Getting started"
            title="From sign-up to streaming in four steps"
            description="Our team helps with installation at every step, so you're never left to figure out configuration alone."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <GlassCard key={step.title} className="relative flex flex-col gap-3">
                <span className="font-display text-sm font-semibold text-brand-300">Step {index + 1}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-glow/20 text-brand-300">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-ice">{step.title}</h3>
                <p className="text-sm leading-relaxed text-mist">{step.description}</p>
              </GlassCard>
            ))}
          </div>
          <div className="flex justify-center">
            <SecondaryButton href="/installation">Read the full installation guide</SecondaryButton>
          </div>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="border-t border-line/70 bg-ink-soft/50 py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, transparent software plans"
            description="Every plan includes the full player, playlist tools, EPG support and setup assistance — you only choose the term and device allowance."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          <p className="text-center text-xs text-mist-dim">
            Plans cover software licensing and support only. See our{" "}
            <Link href="/pricing" className="text-brand-300 underline underline-offset-2">
              full pricing details
            </Link>{" "}
            or the{" "}
            <Link href="/faq" className="text-brand-300 underline underline-offset-2">
              billing FAQ
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* FAQ preview */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionHeading align="left" eyebrow="Questions" title="Frequently asked questions" />
            <p className="text-base leading-relaxed text-mist">
              Can&apos;t find what you&apos;re looking for? Visit the full FAQ page or reach out to our support
              team directly on WhatsApp or Telegram.
            </p>
            <SecondaryButton href="/faq" className="w-fit">
              View all FAQs
            </SecondaryButton>
          </div>
          <FAQAccordion items={homeFaqs} />
        </Container>
      </section>

      {/* Blog preview */}
      {blogPosts.length > 0 ? (
        <section className="border-t border-line/70 bg-ink-soft/50 py-20 sm:py-28">
          <Container className="flex flex-col gap-12">
            <SectionHeading
              eyebrow="From the blog"
              title="Guides for getting the most from your player"
              description="Educational, legitimate streaming resources — from playlist setup to security and legal guidance."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(0, 3).map((post, index) => (
                <BlogCard key={post.slug} post={post} priority={index === 0} />
              ))}
            </div>
            <div className="flex justify-center">
              <SecondaryButton href="/blog">Visit the blog</SecondaryButton>
            </div>
          </Container>
        </section>
      ) : null}

      {/* Final CTA */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-14">
            <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ice sm:text-4xl">
                Ready to buy best IPTV software for your setup?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-mist">
                Message our team to choose a plan and get hands-on help installing and configuring
                your player, playlist and EPG guide.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/pricing">View Pricing Plans</PrimaryButton>
                <SecondaryButton href="/contact">Contact Support</SecondaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
