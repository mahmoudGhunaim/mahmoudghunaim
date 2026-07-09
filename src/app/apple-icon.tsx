import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05050a",
          backgroundImage:
            "radial-gradient(circle at 30% 25%, rgba(34,211,238,0.35) 0%, transparent 55%), radial-gradient(circle at 75% 80%, rgba(244,114,182,0.3) 0%, transparent 55%)",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 84,
          color: "#f2f2f7",
        }}
      >
        MG
        <span style={{ color: "#22d3ee", marginLeft: 4 }}>.</span>
      </div>
    ),
    { ...size }
  );
}
