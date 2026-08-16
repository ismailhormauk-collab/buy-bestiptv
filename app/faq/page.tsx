import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, PrimaryButton, SectionHeading } from "@/components/ui";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { faqs, type FAQ } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Buy Best IPTV Questions Answered",
  description:
    "Answers to common questions about Buy Best IPTV software, playlists, EPG, supported devices, pricing and legal use.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "/faq",
    type: "website",
    title: "FAQ — Buy Best IPTV Questions Answered",
    description:
      "Answers to common questions about Buy Best IPTV software, playlists, EPG, supported devices, pricing and legal use.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Buy Best IPTV Questions Answered",
    description:
      "Answers to common questions about Buy Best IPTV software, playlists, EPG, supported devices, pricing and legal use.",
  },
};

const categories: FAQ["category"][] = ["General", "Setup", "Billing", "Legal"];

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
      <JsonLd data={faqSchema(faqs)} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            as="h1"
            eyebrow="Support"
            title="Buy Best IPTV — Frequently Asked Questions"
            description="Everything you need to know about our IPTV player software, setup, plans and legal use."
          />

          <div className="flex flex-col gap-14">
            {categories.map((category) => {
              const items = faqs.filter((faq) => faq.category === category);
              if (items.length === 0) return null;
              return (
                <div
                  key={category}
                  id={category === "Legal" ? "legal" : undefined}
                  className="flex scroll-mt-24 flex-col gap-5"
                >
                  <h2 className="font-display text-xl font-semibold text-ice sm:text-2xl">
                    {category === "Legal" ? "Legal & Responsible Use" : category}
                  </h2>
                  <FAQAccordion items={items} />
                </div>
              );
            })}
          </div>

          <div className="glass-strong flex flex-col items-center gap-5 rounded-3xl px-6 py-12 text-center sm:px-14">
            <h2 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
              Still have questions?
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-mist">
              Our support team is on WhatsApp and Telegram to help with anything not covered here.
            </p>
            <PrimaryButton href={siteConfig.contact.whatsappHref} external>
              Chat with Support
            </PrimaryButton>
          </div>
        </Container>
      </section>
    </>
  );
}
