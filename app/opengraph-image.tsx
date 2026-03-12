import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "RevenueWolf — Modern Marketing Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const logoData = await readFile(
    join(process.cwd(), "public", "logo-white.png")
  );
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111111",
          padding: "60px",
        }}
      >
        <img src={logoBase64} alt="" height={60} />
        <div
          style={{
            marginTop: "40px",
            fontSize: "32px",
            color: "#6B6B63",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          Modern Marketing Agency — Smarter, Faster, Proven
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            backgroundColor: "#d50000",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
