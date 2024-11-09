import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostBox from "@/components/PostBox";
import config from "@/lib/config";
import { getCategroryPosts } from "@/services/actions";
export const runtime = 'edge';
export default async function Home({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getCategroryPosts(id);

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
           
          </div>
        </main>

        <div className="md:w-[30%] p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none "
          />
          <CategorySection />
        </div>
      </div>

      <Footer />
    </>
  );
}
