import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fieldNotes, getFieldNoteBySlug } from "../../data/fieldNotes";

export const alt = "RevenueWolf Field Notes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return fieldNotes.map((post) => ({ slug: post.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getFieldNoteBySlug(slug);
  const title = post?.title ?? "Field Notes";
  const date = post?.date ?? "";

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
          justifyContent: "space-between",
          backgroundColor: "#111111",
          padding: "60px",
        }}
      >
        <img src={logoBase64} alt="" height={40} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#FAFAF7",
              lineHeight: 1.2,
              fontFamily: "sans-serif",
              marginBottom: "20px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#6B6B63",
              fontFamily: "sans-serif",
            }}
          >
            {`Field Notes — ${date}`}
          </div>
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
