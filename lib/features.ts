export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const coreFeatures: Feature[] = [
  {
    icon: "playlist",
    title: "Playlist Management",
    description:
      "Import, organize and switch between multiple playlists from a clean, searchable interface. Rename, group and back up your playlists in a few taps.",
  },
  {
    icon: "m3u",
    title: "M3U Playlist Support",
    description:
      "Add any M3U or M3U8 playlist URL, or upload a file directly. The player parses your list automatically and keeps it organized by category.",
  },
  {
    icon: "epg",
    title: "EPG Guide Support",
    description:
      "Connect an XMLTV or Xtream-compatible EPG source to see what's on now and next, with a familiar grid-style program guide.",
  },
  {
    icon: "devices",
    title: "Multi-Device Compatibility",
    description:
      "Use the same software on Android, iOS, Windows, macOS, Amazon Fire TV and most Android-based smart TVs, with settings that sync across devices.",
  },
  {
    icon: "hd",
    title: "HD & 4K Playback",
    description:
      "The player supports HD and 4K playback where your own source and network connection allow it, with adaptive buffering for smoother streaming.",
  },
  {
    icon: "favorites",
    title: "Favorites & Categories",
    description:
      "Star your most-used entries, build custom categories, and get straight to what you watch most instead of scrolling long lists.",
  },
  {
    icon: "interface",
    title: "Modern, Intuitive Interface",
    description:
      "A clean remote-friendly and touch-friendly interface designed for TVs, tablets and phones, with dark mode built in.",
  },
  {
    icon: "install",
    title: "Installation Assistance",
    description:
      "Step-by-step guides plus hands-on help from our team to get the player installed and configured correctly on your device.",
  },
  {
    icon: "support",
    title: "Dedicated Customer Support",
    description:
      "Reach a real person over WhatsApp or Telegram for setup questions, troubleshooting, or general account help.",
  },
];

export const additionalFeatures: Feature[] = [
  {
    icon: "search",
    title: "Fast Search",
    description: "Find channels, series or VOD entries in your playlist instantly with live search as you type.",
  },
  {
    icon: "multiscreen",
    title: "Multi-Profile Support",
    description: "Set up separate profiles for family members, each with their own favorites and playlist view.",
  },
  {
    icon: "cloud",
    title: "Cloud Playlist Sync",
    description: "Keep playlist configuration in sync when you move between supported devices.",
  },
  {
    icon: "shield",
    title: "Privacy-Conscious Design",
    description: "No unnecessary data collection — the app is built to manage your playlists, not to track you.",
  },
  {
    icon: "update",
    title: "Regular Updates",
    description: "Ongoing improvements to performance, stability and device compatibility.",
  },
  {
    icon: "parental",
    title: "Parental Controls",
    description: "Lock specific categories or content behind a PIN to manage what's easily accessible.",
  },
];
