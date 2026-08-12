import type { Metadata } from "next";
import { Container, PrimaryButton, SecondaryButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="font-display text-6xl font-bold text-gradient">404</span>
        <h1 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
          We couldn&apos;t find that page
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-mist">
          The page you&apos;re looking for may have moved. Try heading back to the homepage or browsing
          our pricing plans.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href="/">Back to Home</PrimaryButton>
          <SecondaryButton href="/pricing">View Pricing</SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
