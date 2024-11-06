import AboutAuthor from "@/components/AboutAuthor";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RecipePage from "@/components/RecipePage";
import WatchVideo from "@/components/WatchVideo";
import { ArticleJsonLd } from "next-seo";
import { Metadata, ResolvingMetadata } from "next";
import config from "@/lib/config";
export const runtime = "edge";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = (await params).id;

  return {
    title: "ढाबा स्टाइल आलू बैंगन की चटपटी सब्जी",
    description:
      "एक ऐसी डिश जो भारतीय घरों में बहुत पसंद की जाती है। ढाबा स्टाइल में इसे बनाने का अपना ही मज़ा है। आज हम आपको बताएंगे कि कैसे आप घर पर इस मसालेदार और चटपटी सब्जी को आसानी से बना सकते हैं।",
    
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
}
export default async function Page({ params, searchParams }: Props) {
  // fetch data based on route params and searchParams
  const id = (await params).id;

  
  return (
    <>
      <Header />

      <div className="md:flex md:px-[7%]">
        {/* <aside className="p-4 md:w-[30%]">
          <h2 className="text-2xl font-bold mb-4">{id}</h2>
        =
        </aside> */}
        <main className="p-4 md:w-[70%]">
          <RecipePage />
          <WatchVideo id={"fH8ZjrdqdWM"} title={id} />
          <div className="mt-4 flex-grow border-t-2 border-black"></div>
          <AboutAuthor />
        </main>
        <div className="md:w-[30%] mx-auto p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none "
          />
          <CategorySection />
        </div>
      </div>
      <Footer />
      <ArticleJsonLd
        useAppDir={true}
        url="https://example.com/article"
        title="Article headline"
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified="2015-02-05T09:00:00+08:00"
        authorName={[
          {
            name: "Jane Blogs",
            url: "https://example.com",
          },
          {
            name: "Mary Stone",
            url: "https://example.com",
          },
        ]}
        publisherName="Gary Meehan"
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description="This is a mighty good description of this article."
        isAccessibleForFree={true}
      />
    </>
  );
}
