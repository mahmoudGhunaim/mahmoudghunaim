import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 18,
          color: "#f2f2f7",
        }}
      >
        MG
        <span style={{ color: "#22d3ee", marginLeft: 1 }}>.</span>
      </div>
    ),
    { ...size }
  );
}
