const LOCK_PATH =
  "M32,52 L32,34 A18,18 0 0 1 68,34 L68,52 " +
  "M22,52 Q22,46 28,46 L72,46 Q78,46 78,52 L78,104 Q78,110 72,110 L28,110 Q22,110 22,104 Z " +
  "M56,72 A6,6 0 1 1 44,72 A6,6 0 1 1 56,72 " +
  "M47,76 L53,76 L54,90 L46,90 Z";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0714",
        backgroundImage:
          "linear-gradient(135deg, #1a0f2e 0%, #0a0714 55%, #0a0714 100%)",
      }}
    >
      <svg width="96" height="96" viewBox="0 0 100 130">
        <path
          d={LOCK_PATH}
          fill="none"
          stroke="#f0abfc"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <div
        style={{
          marginTop: 36,
          fontSize: 64,
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: -1,
        }}
      >
        Larissa Chaidatou Koinda
      </div>
      <div
        style={{
          marginTop: 18,
          fontSize: 32,
          color: "#e9d5ff",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        Analyste en Cybersécurité
      </div>
      <div
        style={{
          marginTop: 28,
          fontSize: 24,
          color: "#a1a1aa",
        }}
      >
        Alger, Algérie · CCNA · Future CEH
      </div>
    </div>
  );
}
