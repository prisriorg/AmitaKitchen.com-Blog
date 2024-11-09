import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutUs from "@/components/pages/about";
import TermsAndConditions from "@/components/pages/terms";
import SideBar from "@/components/SideBar";
import config from "@/lib/config";
import { getPosts } from "@/services/actions";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "About Us | "+config.SiteName,
  description: config.Description,
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
  const data = await getPosts();
  return (
    <>
      <Header />
      <div className="md:flex md:px-[7%]">
        <main className="p-4 md:w-[70%]">
          <TermsAndConditions />
        </main>

        <SideBar />
      </div>

      <Footer />
    </>
  );
}
