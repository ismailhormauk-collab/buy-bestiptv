import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, GlassCard, PrimaryButton, SecondaryButton, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Installation Guide — Set Up Your IPTV Player",
  description:
    "Step-by-step installation instructions for the Buy Best IPTV player on Android, iOS, Fire TV, smart TVs, Windows and macOS, plus playlist and EPG setup.",
  alternates: { canonical: "/installation" },
  openGraph: {
    url: "/installation",
    title: "Installation Guide — Set Up Your IPTV Player",
    description:
      "Step-by-step installation instructions for the Buy Best IPTV player on Android, iOS, Fire TV, smart TVs, Windows and macOS, plus playlist and EPG setup.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Installation Guide — Set Up Your IPTV Player",
    description:
      "Step-by-step installation instructions for the Buy Best IPTV player on Android, iOS, Fire TV, smart TVs, Windows and macOS, plus playlist and EPG setup.",
  },
};

const platforms = [
  {
    name: "Android & Google TV",
    steps: [
      "Install the player from the app store on your device, or sideload the APK we provide if it isn't listed for your model.",
      "Open the app and complete the first-run setup screen.",
      "Go to Playlist Settings and add your M3U URL or Xtream credentials.",
      "Add your EPG source under Settings > EPG if you have one.",
    ],
  },
  {
    name: "Amazon Fire TV",
    steps: [
      "Enable installation from unknown sources under Fire TV settings if sideloading is required.",
      "Install the player using a file manager app or our companion installer.",
      "Launch the app and sign in to the initial setup screen.",
      "Add your playlist and EPG source the same way as on Android TV.",
    ],
  },
  {
    name: "iOS & iPadOS",
    steps: [
      "Download the player from the App Store.",
      "Open the app and follow the on-screen setup steps.",
      "Add your M3U or Xtream playlist under Playlist Settings.",
      "Enable your EPG source to see the program guide.",
    ],
  },
  {
    name: "Windows & macOS",
    steps: [
      "Download and run the installer for your operating system.",
      "Launch the app after installation completes.",
      "Add your playlist URL or file, plus your EPG source, from Settings.",
      "Use window or full-screen mode depending on your setup.",
    ],
  },
];

export default function InstallationPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Installation", path: "/installation" }]} />

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionHeading
              as="h1"
              align="left"
              eyebrow="Setup Guide"
              title="IPTV Installation Guide: Set Up Your Player in Minutes"
              description="Follow the steps for your device below, or message our team and we'll walk you through it live."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={siteConfig.contact.whatsappHref} external>
                Get Setup Help
              </PrimaryButton>
              <SecondaryButton href="/faq">Setup FAQs</SecondaryButton>
            </div>
          </div>
          <Image
            src="/images/iptv-player-supported-devices.svg"
            alt="Smart TV, streaming box, laptop and phone all running the IPTV player interface"
            width={640}
            height={360}
            className="w-full rounded-3xl border border-line/70"
          />
        </Container>
      </section>

      <section className="border-t border-line/70 bg-ink-soft/50 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Device Setup"
            title="Installation steps by platform"
            description="General steps for each supported platform. Exact menu names can vary slightly by manufacturer and software version."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {platforms.map((platform) => (
              <GlassCard key={platform.name}>
                <h3 className="font-display text-lg font-semibold text-ice">{platform.name}</h3>
                <ol className="mt-4 flex flex-col gap-3">
                  {platform.steps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-relaxed text-mist">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold text-brand-300">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
              Adding your playlist
            </h2>
            <p className="text-sm leading-relaxed text-mist">
              Inside the app, open Playlist Settings and choose Add Playlist. Paste your M3U or
              M3U8 URL, or enter your Xtream server address, username and password if your source
              uses that format instead. Give the parser a moment on first import, especially for
              large playlists.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-ice sm:text-3xl">
              Adding your EPG guide
            </h2>
            <p className="text-sm leading-relaxed text-mist">
              Under Settings, open EPG and add your XMLTV URL, or enable EPG through your Xtream
              credentials if supported. Allow a few minutes for the initial sync on larger guides.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line/70 bg-ink-soft/50 py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <SectionHeading eyebrow="Troubleshooting" title="Common installation issues" />
          <div className="grid gap-5 sm:grid-cols-2">
            <GlassCard>
              <h3 className="font-display text-base font-semibold text-ice">Playlist won&apos;t load</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Double-check the URL for typos or extra spaces, confirm your internet connection is
                stable, and try re-adding the playlist. Very large playlists can take longer on the
                first parse.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display text-base font-semibold text-ice">App won&apos;t install</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                On Android-based devices, make sure installation from unknown sources is allowed if
                you&apos;re sideloading. On iOS, confirm you&apos;re signed in to the correct App Store account.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display text-base font-semibold text-ice">Buffering during playback</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Try a wired Ethernet connection instead of Wi-Fi, lower the stream quality if your
                connection is limited, and restart the app if buffering persists after a network check.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display text-base font-semibold text-ice">Still stuck?</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Message our support team on WhatsApp or Telegram — we can walk through setup with
                you directly.
              </p>
            </GlassCard>
          </div>
        </Container>
      </section>
    </>
  );
}
