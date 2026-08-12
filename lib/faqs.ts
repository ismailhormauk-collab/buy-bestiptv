export type FAQ = {
  question: string;
  answer: string;
  category: "General" | "Billing" | "Setup" | "Legal";
};

export const faqs: FAQ[] = [
  {
    category: "General",
    question: "What exactly am I buying when I buy best IPTV from you?",
    answer:
      "You are purchasing a license to our IPTV player software and the support that comes with it — playlist management tools, EPG integration, multi-device access and setup assistance. We do not sell TV channels, movies or any copyrighted broadcast content. You connect your own legally licensed playlist or subscription source.",
  },
  {
    category: "General",
    question: "Do you provide TV channels, sports or movie content?",
    answer:
      "No. Buy Best IPTV is a software and services company. We build and support the player application only. Any channels, video-on-demand or sports coverage you watch must come from your own properly licensed source, and you are responsible for ensuring that source is legal in your country.",
  },
  {
    category: "Setup",
    question: "What is an M3U playlist and how do I add one?",
    answer:
      "An M3U (or M3U8) playlist is a plain-text file format that lists streaming sources. Inside the player, open Playlist Settings, choose 'Add Playlist', then paste your M3U URL or upload the file. The app will parse it automatically and sort entries into categories. See our Installation guide for a full walkthrough.",
  },
  {
    category: "Setup",
    question: "What is EPG and do I need it?",
    answer:
      "EPG stands for Electronic Program Guide — it shows what is scheduled now and next, similar to a traditional TV guide. It's optional but recommended: add your XMLTV or Xtream-compatible EPG URL in settings to enable the grid guide view.",
  },
  {
    category: "Setup",
    question: "Which devices are supported?",
    answer:
      "The player runs on Android phones and tablets, iOS, Windows, macOS, Amazon Fire TV, and most Android-based smart TVs and streaming boxes. Check our Installation page for device-specific setup steps.",
  },
  {
    category: "Setup",
    question: "Can I use the app on more than one device?",
    answer:
      "Every plan includes 1 device connection. You can install the player on different devices, but only one connection can be active at a time. See the Pricing page for full plan details.",
  },
  {
    category: "Billing",
    question: "What plans do you offer?",
    answer:
      "We offer four software plans: 1 Month (€20), 3 Months (€35), 6 Months (€45) and 12 Months (€65). Longer plans include a lower effective monthly cost. Full details are on the Pricing page.",
  },
  {
    category: "Billing",
    question: "How do I get started after choosing a plan?",
    answer:
      "Message our team on WhatsApp or Telegram using the contact button on any page. We'll confirm your plan, help you complete setup, and answer any questions about installation or playlist configuration.",
  },
  {
    category: "Billing",
    question: "Do you offer refunds?",
    answer:
      "Because activation is a manual, personalized process, please reach out to our support team via WhatsApp or Telegram before purchasing if you have questions about the software or setup process — we're happy to walk you through what's included first.",
  },
  {
    category: "Legal",
    question: "Is it legal to use an IPTV player?",
    answer:
      "IPTV player software itself is legal — it's a media player, similar in concept to any app that plays a video stream. What matters is the source of the content you connect to it. Always use playlists or subscriptions from providers that hold the proper broadcasting rights and licensing for your region.",
  },
  {
    category: "Legal",
    question: "Are you responsible for the content I stream?",
    answer:
      "No. We provide the player software and setup support only. You are solely responsible for choosing and using content sources that you are legally entitled to access. Read our full guidance in the Legal IPTV Streaming Guide on our blog.",
  },
  {
    category: "General",
    question: "What if I need help after installation?",
    answer:
      "Our support team is available via WhatsApp and Telegram for troubleshooting, playlist re-configuration, or general questions about using the app.",
  },
];
