import { ImageResponse } from "@vercel/og";
import { NextRequest, NextResponse } from "next/server";
import { renderToReadableStream } from "react-dom/server";
import satori from "satori";

import { generateGradient } from "../../../utils/gradient";

export const config = {
  runtime: "experimental-edge",
};

export default async function (req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);
  const name = url.searchParams.get("name");
  const text = url.searchParams.get("text");
  const size = Number(url.searchParams.get("size") || "120");
  const [username, type] = name?.split(".") || [];
  const fileType = type?.includes("svg") ? "svg" : "png";

  const gradient = generateGradient(username || Math.random() + "");

  const gradientAvatar = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: size,
        height: size,
        backgroundImage: `linear-gradient(315deg, ${gradient.fromColor}, ${gradient.toColor})`,
      }}
    >
      {text ? (
        <div
          style={{
            display: "flex",
            fontSize: (size * 0.9) / text.length,
          }}
        >
          {text}
        </div>
      ) : null}
    </div>
  );

  if (fileType === "svg") {
    const svg = await satori(gradientAvatar, {
      width: size,
      height: size,
      embedFont: false,
      fonts: [],
      debug: true,
    });
    //  const stream = await renderToReadableStream(svg);
    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  }

  return new ImageResponse(gradientAvatar, {
    width: size,
    height: size,
  });
}
