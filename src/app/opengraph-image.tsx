import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

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
          padding: "80px",
          background: "#05050a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, #22d3ee 0%, #a78bfa 45%, transparent 70%)",
            opacity: 0.55,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            right: 80,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 60% 40%, #f472b6 0%, transparent 70%)",
            opacity: 0.4,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22d3ee",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#f2f2f7",
            marginBottom: 16,
          }}
        >
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 42, color: "#c7c7d1" }}>
          {profile.role} — React · REST APIs · 3D Web
        </div>
      </div>
    ),
    { ...size }
  );
}
