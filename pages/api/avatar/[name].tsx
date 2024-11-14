import { NextRequest, ImageResponse } from "next/server";
import { renderToReadableStream } from "react-dom/server";
import { generateGradient } from "../../../utils/gradient";

export const config = {
  runtime: "edge",
};

export default async function (req: NextRequest) {
  const url = new URL(req.url);
  const name = url.searchParams.get("name");
  const text = url.searchParams.get("text");
  const size = Number(url.searchParams.get("size") || "120");
  const rounded = Number(url.searchParams.get("rounded") || "0");
  const [username, type] = name?.split(".") || [];
  const fileType = type?.includes("svg") ? "svg" : "png";
  
  const gradient = await generateGradient(username || Math.random() + "");

  const avatar = (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={gradient.fromColor} />
            <stop offset="100%" stopColor={gradient.toColor} />
          </linearGradient>
        </defs>
        <rect fill="url(#gradient)" x="0" y="0" width={size} height={size} rx={rounded} ry={rounded} />
        {fileType === "svg" && text && (
          <text
            x="50%"
            y="50%"
            alignmentBaseline="central"
            dominantBaseline="central"
            textAnchor="middle"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize={(size * 0.9) / text.length}
          >
            {text}
          </text>
        )}
      </g>
    </svg>
  );

  if (fileType === "svg") {
    const stream = await renderToReadableStream(avatar);
    return new Response(stream, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  }

  return new ImageResponse(avatar, {
    width: size,
    height: size,
  });
}
