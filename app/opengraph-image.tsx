import { ImageResponse } from "next/og";
import { OgImageContent, ogImageSize, ogImageContentType } from "./og-image-content";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return new ImageResponse(<OgImageContent />, { ...size });
}
