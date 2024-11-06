import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostBox from "@/components/PostBox";
export const runtime = 'edge';
export default function Home() {
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
            <button className="text-white bg-gray-900 hover:bg-black px-6 py-2 rounded-md border">
              Load More
            </button>
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
