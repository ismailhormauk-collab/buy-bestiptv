import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Buy Best IPTV — Premium IPTV Player Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #070b18 0%, #0b1330 55%, #0a0f1e 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(33,102,240,0.55) 0%, rgba(33,102,240,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 22,
              background: "linear-gradient(135deg, #468cff, #37d3f0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 700,
              color: "#04070d",
            }}
          >
            ▶
          </div>
          <div style={{ display: "flex", fontSize: 54, fontWeight: 700, color: "#f3f7ff", letterSpacing: -1 }}>
            {siteConfig.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#93a4c8",
            maxWidth: 860,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Buy Best IPTV Software for Your Streaming Setup
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 40,
          }}
        >
          {["M3U Playlists", "EPG Guide", "Multi-Device", "HD & 4K"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(126,158,224,0.35)",
                color: "#c7d4f0",
                fontSize: 20,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
