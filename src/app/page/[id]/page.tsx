import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import PostBox from "@/components/PostBox";
import SideBar from "@/components/SideBar";
import config from "@/lib/config";
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

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <Header />

      <div className="md:flex md:px-[7%]">
        <main className="p-4 md:w-[70%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4">
            {Array.from({ length: 15 }).map((_, index) => (
              <PostBox
                key={index}
                image="https://www.frontendzone.com/_next/image?url=%2Fimages%2Fdefault2.png&w=1920&q=75"
                link={"post-box" + index}
                title={"post-box" + index}
                time={index + " minutes ago"}
                discription={"post-box" + index}
              />
            ))}
          </div>
          <div className="flex justify-center items-center py-4 ">
            {/* <button className="text-white bg-gray-900 hover:bg-black px-6 py-2 rounded-md border">
              Load More
            </button> */}
            <Pagination activePage={params.id} totalPage={2}/>
          </div>
        </main>

        <SideBar />
      </div>

      <Footer />
    </>
  );
}
