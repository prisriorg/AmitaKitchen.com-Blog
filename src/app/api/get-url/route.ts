import { db } from "@/db";
import { posts } from "@/db/schema";
import config from "@/lib/config";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const url = config.SiteUrl;
  var data: any[] = [];
  data.push({
    url: url,
  });
  const post = await db.select({ url: posts.yt }).from(posts);
  post.forEach(post => {
    data.push({
        url: `${url}/post/${post.url}`,
    });
  })

  config.pages.forEach(post => {
    data.push({
      url: `${url}/${post.toLowerCase().replaceAll(" ","-")}`,
    })
  })
  config.Category.forEach(post => {
    data.push({
      url: `${url}/category/${post.toLowerCase()}`,
    })
  })

  var urls:any[]= []
  for (const category of data) {
    urls.push(category.url)
  }
  return NextResponse.json(urls);
}
