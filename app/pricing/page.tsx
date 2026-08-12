import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, GlassCard, SectionHeading } from "@/components/ui";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import { pricingPlans } from "@/lib/pricing";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing — Buy Best IPTV Software Plans",
  description:
    "Compare Buy Best IPTV software plans: 1 month (€20), 3 months (€35), 6 months (€45) and 12 months (€65). Software and setup support only.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    url: "/pricing",
    title: "Pricing — Buy Best IPTV Software Plans",
    description:
      "Compare Buy Best IPTV software plans: 1 month (€20), 3 months (€35), 6 months (€45) and 12 months (€65). Software and setup support only.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Buy Best IPTV Software Plans",
    description:
      "Compare Buy Best IPTV software plans: 1 month (€20), 3 months (€35), 6 months (€45) and 12 months (€65). Software and setup support only.",
  },
};

const billingFaqs = faqs.filter((faq) => faq.category === "Billing");

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />
      {billingFaqs.length > 0 ? <JsonLd data={faqSchema(billingFaqs)} /> : null}

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            as="h1"
            eyebrow="Software Plans"
            title="Buy Best IPTV Pricing — IPTV Player Software Plans"
            description="Every plan gives you the same full IPTV player software, playlist tools, EPG support and 1 device connection — you're only choosing how long you need it."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          <GlassCard className="text-center">
            <p className="text-sm leading-relaxed text-mist">
              All prices are shown in euros (€) and cover IPTV player software licensing, playlist and
              EPG tooling, and customer support for the selected term. We do not sell TV channels,
              movies or copyrighted broadcasts — you connect your own legally licensed playlist or
              subscription source. See our{" "}
              <Link href="/faq" className="text-brand-300 underline underline-offset-2">
                Legal &amp; Responsible Use FAQ
              </Link>{" "}
              for details.
            </p>
          </GlassCard>
        </Container>
      </section>

      <section className="border-t border-line/70 bg-ink-soft/50 py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-3 lg:col-span-1">
            <h2 className="font-display text-2xl font-semibold text-ice">How plans compare</h2>
            <p className="text-sm leading-relaxed text-mist">
              Every plan includes 1 device connection. Longer plans simply lower your effective
              monthly cost, so committed viewers typically get the best value from the 6 or 12
              month options.
            </p>
          </div>
          <div className="overflow-x-auto lg:col-span-2">
            <table className="w-full min-w-[520px] border-separate border-spacing-y-2 text-left text-sm">
              <caption className="sr-only">Comparison of Buy Best IPTV pricing plans by duration, price and device allowance</caption>
              <thead>
                <tr className="text-xs uppercase tracking-wide text-mist-dim">
                  <th scope="col" className="px-4 py-2 font-medium">Plan</th>
                  <th scope="col" className="px-4 py-2 font-medium">Price</th>
                  <th scope="col" className="px-4 py-2 font-medium">Effective / month</th>
                  <th scope="col" className="px-4 py-2 font-medium">Devices</th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan) => (
                  <tr key={plan.id} className="glass rounded-xl text-ice">
                    <td className="rounded-l-xl px-4 py-3 font-medium">{plan.duration}</td>
                    <td className="px-4 py-3">{plan.currency}{plan.price}</td>
                    <td className="px-4 py-3 text-mist">{plan.perMonth}</td>
                    <td className="rounded-r-xl px-4 py-3 text-mist">
                      {plan.features.find((f) => f.toLowerCase().includes("device"))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <SectionHeading align="left" eyebrow="Billing" title="Billing questions" />
            <p className="text-sm leading-relaxed text-mist">
              Message us on WhatsApp or Telegram any time — our team can talk you through plan
              options before you commit.
            </p>
          </div>
          <FAQAccordion items={billingFaqs} />
        </Container>
      </section>
    </>
  );
}
