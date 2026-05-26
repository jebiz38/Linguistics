import QRCode from "qrcode";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const url =
  process.argv[2] ?? "https://unique-chaja-e496d9.netlify.app/";
const outPath = path.join(root, "public", "britannica-qr.png");

await mkdir(path.join(root, "public"), { recursive: true });
await QRCode.toFile(outPath, url, {
  errorCorrectionLevel: "M",
  width: 512,
  margin: 2,
  color: { dark: "#0B1221", light: "#FFFFFF" },
});

console.log(`QR saved: ${outPath}`);
console.log(`URL: ${url}`);
