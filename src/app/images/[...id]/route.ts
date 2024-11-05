import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";


export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id[0];
  const name = params.id[1];
  try {
    const response = await fetch("https://famobi.com/thief-puzzle/?locale=en", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse and set the data
    const html = await response.text();

    // Parse the HTML content with JSDOM
    // const dom = new  const $ = Cheerio.load(html);(html);
    return new NextResponse("err.message", {
      status: 500,
    });
  } catch (err: any) {
    console.error("Error:", err);
    return new NextResponse(err.message, {
      status: 500,
    });
  }
  // const image = await fetch("https://i.ytimg.com/vi/"+id+"/mqdefault.jpg")
  // return new Response(image.body,{
  //   headers: {

  //     "Content-Type": "image/jpg",
  //   },
  // });
}
