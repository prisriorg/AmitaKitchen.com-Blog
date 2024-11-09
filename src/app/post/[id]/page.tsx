import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import WatchVideo from "@/components/WatchVideo";
import { ArticleJsonLd } from "next-seo";
import { Metadata, ResolvingMetadata } from "next";
import CommentSection from "@/components/CommentBox";
import SideBar from "@/components/SideBar";
import AboutAuthor from "@/components/AboutAuthor";
import { getPost } from "@/services/actions";
import config from "@/lib/config";

export const runtime = "edge";

interface RecipePageProps {
  post: Recipe;
}

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;
  const data = await getPost(id);

  return {
    title: data?.title,
    description: data?.description,
    keywords: data?.keywords,
    openGraph: {
      url: config.SiteUrl + "/post/" + data?.yt,
      type: "website",
      title: data?.title,
      description: data?.description,
      images: [
        {
          url:
            config.SiteUrl + "/images/" + data?.yt + "/" + data?.title + ".jpg",
          width: 1200,
          height: 630,
          alt: data?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title,
      description: data?.description,
      creator: "@amitakitchen",
      site: "@amitakitchen",
      images: [
        {
          url:
            config.SiteUrl + "/images/" + data?.yt + "/" + data?.title + ".jpg",
          width: 1200,
          height: 630,
          alt: data?.title,
        },
      ],
    },
    alternates: {
      canonical: config.SiteUrl + "/post/" + data?.yt,
    },
  };
}
export default async function Page({ params, searchParams }: Props) {
  const id = (await params).id;
  const data = await getPost(id);

  if (!data) {
    // If no data is found, you could show a 404 or a loading state
    return <div>Post not found</div>;
  }

  // Ensure 'ingredients' and 'method' are arrays (or handle them as needed)
  const ingredients:{
    name: string;
    quantity: string;
  }[] = JSON.parse(data.ingredients);
  const method :{
    title: string;
    steps: Array<{ name?: string; description: string }>;
  }[]
   = JSON.parse(data.method);

  return (
    <>
      <Header />
      <div className="md:flex md:px-[7%]">
        <main className="md:w-[70%]">
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-semibold text-gray-800">{data.title}</h1>
            <p className="text-gray-600 text-lg mt-1">by Amita Kitchen</p>
            <div className="py-6">
              <Image
                src={
                  config.SiteUrl +
                  "/images/" +
                  data.yt +
                  "/" +
                  data.title +
                  ".jpg"
                }
                alt={data.title}
                width={700}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <p className="mt-4">{data.description}</p>
            <div className="mt-6 text-sm flex space-x-6">
              <span>
                Preparation Time: <strong>{data.prepTime}</strong>
              </span>
              <span>
                Cooking Time: <strong>{data.cookTime}</strong>
              </span>
              <span>
                Total Time: <strong>{data.totalTime}</strong>
              </span>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                Ingredients (सामग्री):
              </h2>
              <ul className="list-disc list-inside m-4 space-y-2">
                {ingredients.map((sts, index) => (
                  <li key={index}>
                    <strong>
                      {index + 1}. {sts.name}:
                    </strong>{" "}
                    {sts.quantity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                बनाने की विधि (Method):
              </h2>
              {method.map((recipe, recipeIndex) => (
                <div key={recipeIndex}>
                  <h3 className="text-xl font-semibold mt-4">{recipe.title}</h3>
                  <ul className="p-4 list-decimal list-inside space-y-2">
                    {recipe.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>
                        {"name" in step ? (
                          <>
                            <strong>{step.name}:</strong> {step.description}
                          </>
                        ) : (
                          step.description
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <h2 className="text-2xl font-semibold mt-6 mb-4">
                Conclusion (निष्कर्ष):
              </h2>
              <p>{data.conclusion}</p>
            </div>
          </div>

          <WatchVideo id={data.yt} title={data.title} />
          <CommentSection />
          <div className="mt-4 flex-grow border-t-2 border-black"></div>
          <AboutAuthor />
        </main>
        <SideBar />
      </div>
      <Footer />
      <ArticleJsonLd
        useAppDir={true}
        url={`${config.SiteUrl}/post/${data.yt}`}
        title={data.title}
        images={[`${config.SiteUrl}/images/${data.yt}/${data.title}.jpg`]}
        datePublished={new Date(data.createdAt || new Date()).toISOString()}
        dateModified={new Date(data.updatedAt || new Date()).toISOString()}
        authorName={[{ name: "Amita Kitchen", url: config.youtube }]}
        publisherName="Amita Kitchen"
        publisherLogo={config.SiteLogo}
        description={data.description || config.Description}
        isAccessibleForFree={true}
      />
    </>
  );
}
