import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id[0];
  const name = params.id[1];

  const image = await fetch("https://i.ytimg.com/vi/" + id + "/mqdefault.jpg");
  return new Response(image.body, {
    headers: {
      "Content-Type": "image/jpg",
    },
  });
}
