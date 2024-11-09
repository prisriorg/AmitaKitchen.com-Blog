import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import PostBox from "@/components/PostBox";
import SideBar from "@/components/SideBar";
import config from "@/lib/config";
import { getPosts } from "@/services/actions";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: config.SiteName,
  description: config.Description,
  keywords: config.Keywords,
  openGraph: {
    url: config.SiteUrl,
    type: "website",
    title: config.SiteName,
    description: config.Description,
    images: [
      {
        url: config.SiteLogo,
        width: 1200,
        height: 630,
        alt: config.SiteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.SiteName,
    description: config.Description,
    creator: "@amitakitchen",
    site: "@amitakitchen",
    images: [
      {
        url: config.SiteLogo,
        width: 1200,
        height: 630,
        alt: config.SiteName,
      },
    ],
  },
  alternates: {
    canonical: config.SiteUrl,
  },
};

export default async function Page() {
  const data = await getPosts(1,10);
  return (
    <>
      <Header />
      <div className="md:flex md:px-[7%]">
        <main className="p-4 md:w-[70%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4">
            {data.map((da, index) => (
              <PostBox
                key={index}
                image={
                  config.SiteUrl +
                  "/images/" +
                  da.yt +
                  "/" +
                  da.title.replaceAll(" ", "-") +
                  ".jpg"
                }
                link={da.yt}
                title={da.title}
                time={da.time?.toISOString()||""}
                discription={da.description}
              />
            ))}
          </div>
          <div className="flex justify-center items-center py-4 ">
            {/* <button className="text-white bg-gray-900 hover:bg-black px-6 py-2 rounded-md border">
              Load More
            </button> */}
            <Pagination activePage={1} totalPage={2} />
          </div>
        </main>

        <SideBar />
      </div>

      <Footer />
    </>
  );
}
