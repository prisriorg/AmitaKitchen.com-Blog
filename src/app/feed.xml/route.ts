
export const runtime = "edge";

export async function GET() {
//   const feed = new RSS({
//     title: "Dave Gray Teaches Code",
//     description: "Dave Gray's Blog",
//     generator: "RSS for Node and Next.js",
//     feed_url: "https://www.davegray.codes/feed.xml",
//     site_url: "https://www.davegray.codes/",
//     managingEditor: "dave@davegray.codes (Dave Gray)",
//     webMaster: "dave@davegray.codes (Dave Gray)",
//     copyright: `Copyright ${new Date().getFullYear().toString()}, Dave Gray`,
//     language: "en-US",
//     pubDate: new Date().toUTCString(),
//     ttl: 60,
//   });

  var data =
    '<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0"></rss>';

  return new Response(data,//feed.xml({ indent: true })",
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    }
  );
}
