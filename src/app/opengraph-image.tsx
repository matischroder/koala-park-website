import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { fullAddress } from "@/content/site";

export const alt = "Koala Park Laundromat, Burleigh Heads — open 5.30am to 10pm, 365 days";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function photo() {
  "use cache";
  const file = await readFile(join(process.cwd(), "public/photos/interior-bunting.jpg"));
  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

export default async function OpengraphImage() {
  const src = await photo();
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#fffdf7", color: "#17233d" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 60 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, color: "#0d7468" }}>koala park</div>
            <div style={{ fontSize: 40, letterSpacing: 8, fontWeight: 700 }}>LAUNDROMAT</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 60, lineHeight: 1.05 }}>Six baskets of washing. 24 minutes.</div>
            <div style={{ marginTop: 24, fontSize: 26, color: "#4a5570" }}>{fullAddress}</div>
            <div style={{ marginTop: 14, display: "flex" }}>
              <div style={{ background: "#ffd23f", padding: "10px 20px", borderRadius: 14, fontSize: 28, fontWeight: 700 }}>Open 5.30am – 10pm · 365 days</div>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={src} width={520} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
