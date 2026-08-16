import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, GlassCard, SectionHeading } from "@/components/ui";
import { TelegramIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Get Help from Our Support Team",
  description:
    "Reach the Buy Best IPTV support team on WhatsApp or Telegram for plan questions, installation help, or general support.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    type: "website",
    title: "Contact — Get Help from Our Support Team",
    description:
      "Reach the Buy Best IPTV support team on WhatsApp or Telegram for plan questions, installation help, or general support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Get Help from Our Support Team",
    description:
      "Reach the Buy Best IPTV support team on WhatsApp or Telegram for plan questions, installation help, or general support.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Contact Buy Best IPTV Support"
            description="Whether you're choosing a plan or need help with installation, our team responds directly on WhatsApp and Telegram."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring glass-strong group flex flex-col gap-5 rounded-2xl p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                <WhatsAppIcon className="h-7 w-7" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h2 className="font-display text-xl font-semibold text-ice">WhatsApp</h2>
                <p className="text-sm leading-relaxed text-mist">
                  The fastest way to reach us — message us directly to ask about plans or get setup
                  help.
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
                Start a WhatsApp chat
              </span>
            </a>

            <a
              href={siteConfig.contact.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring glass-strong group flex flex-col gap-5 rounded-2xl p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                <TelegramIcon className="h-7 w-7" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h2 className="font-display text-xl font-semibold text-ice">Telegram</h2>
                <p className="text-sm leading-relaxed text-mist">
                  Prefer Telegram? Message our support channel for the same fast response.
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
                Start a Telegram chat
              </span>
            </a>
          </div>

          <GlassCard className="flex flex-col gap-3">
            <h2 className="font-display text-lg font-semibold text-ice">Before you reach out</h2>
            <p className="text-sm leading-relaxed text-mist">
              Our team can help with choosing a plan, installing the player on your device, and
              configuring your playlist and EPG source. Have your device type ready (for example
              Android TV, Fire TV, iOS, Windows or macOS) so we can give you the right steps
              immediately.
            </p>
            <p className="text-sm leading-relaxed text-mist">
              Remember, {siteConfig.name} provides player software and support only — you&apos;ll need
              your own legally licensed playlist or subscription source. Check our{" "}
              <Link href="/faq" className="text-brand-300 underline underline-offset-2">
                FAQ
              </Link>{" "}
              for common questions before you get in touch.
            </p>
          </GlassCard>
        </Container>
      </section>
    </>
  );
}
