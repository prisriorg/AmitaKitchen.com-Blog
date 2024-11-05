import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostBox from "@/components/PostBox";
import RecipePage from "@/components/RecipePage";
export const runtime = "edge";
export default function Home() {
  return (
    <>
      <Header />

      <div className="md:flex md:px-[7%]">
        <main className="p-4 md:w-[70%]">
          <RecipePage />
        </main>

        <div className="md:max-w-xs lg:max-w-sm mx-auto p-4">
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
