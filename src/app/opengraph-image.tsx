import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "ClickFone | PABX Virtual em Nuvem — Memória RAM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const iconData = await readFile(
  join(process.cwd(), "src/app/icon.png"),
  "base64"
);
const iconSrc = `data:image/png;base64,${iconData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
        }}
      >
        {/* Header com Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={56} height={56} alt="" />
          <span
            style={{
              fontSize: 24,
              color: "#22d3ee",
              letterSpacing: 4,
              fontWeight: 700,
            }}
          >
            CLICKFONE
          </span>
        </div>

        {/* Content Central */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 20,
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: "#22d3ee",
              letterSpacing: 3,
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Telefonia em Nuvem
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 72,
                color: "white",
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Telefonia em nuvem.
            </span>
            <span
              style={{
                fontSize: 56,
                color: "#22d3ee",
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              Performance. Controle.
            </span>
          </div>
          <span
            style={{
              fontSize: 24,
              color: "#cbd5e1",
              marginTop: 12,
            }}
          >
            Inteligência operacional para sua empresa
          </span>
        </div>

        {/* Footer com Domínio */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 20,
            borderTop: "1px solid #334155",
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            clickfone-gram.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
