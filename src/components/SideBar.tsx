import CategorySection from "./CategorySection";

export default function SideBar() {
    return <div className="md:max-w-xs lg:max-w-sm mx-auto p-4">
    <input
      type="text"
      placeholder="Search..."
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none "
    />
    <CategorySection />
  </div>
}