import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import config from "@/lib/config";
import { getSitemap } from "@/services/actions";

// export const runtime = "edge";

export async function GET(req: NextRequest) {
  const key = require("./service_account.json");

  const jwtClient = new google.auth.JWT(
    key.client_email,
    undefined,
    key.private_key,
    ["https://www.googleapis.com/auth/indexing"]
  );

  try {
    const tokens = await jwtClient.authorize();
    if (!tokens || !tokens.access_token) {
      return NextResponse.json(
        { error: "Failed to obtain access token" },
        {
          status: 500,
        }
      );
    }

    const url = config.SiteUrl;
    let data: any[] = [];
    // data.push({
    //   url: url,
    // });
    const post: any[] = await fetch("https://amitakitchen.com/api/get-url", {
      method: "GET",
          headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
          },
    }).then((data) => data.json());
    // const post = await getSitemap();
    post.forEach((post) => {
      data.push({
        url: `${post}`,
      });
    });

    config.pages.forEach((post) => {
      data.push({
        url: `${url}/${post.toLowerCase().replaceAll(" ", "-")}`,
      });
    });
    config.Category.forEach((post) => {
      data.push({
        url: `${url}/category/${post.toLowerCase()}`,
      });
    });
    const result: any[] = [];
   
    for (const category of data) {
      const dataUrl = category.url;
      const body = JSON.stringify({
        url: dataUrl,
        type: "URL_UPDATED",
      });

      const response = await fetch(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens.access_token}`,
            "cache-control": "no-cache"
          },
          body,
        }
      );

      const dataN = await response.json();
      if (!response.ok) {
        // console.error("Error indexing URL:", data);
        result.push({ url: dataUrl, status: "Failed", dataN });
      } else {
        result.push({ url: dataUrl, status: "Success", dataN });
      }
    }
    // console.log("URL indexed successfully:", data);
    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    // console.error("Authorization or fetch error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
