import Link from "next/link";

const CategorySection = () => {
  const categories = [
    "css",
    "frontend",
    "git",
    "html",
    "javascript",
    "layoff",
    "next-js",
    "react-js",
    "seo",
    "system-design",
  ];

  return (
    <>
      <div className="my-4 flex-grow border-t-2 border-black"></div>
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-white bg-black px-4 py-2 rounded-tl-lg rounded-br-lg">
          Categories
        </h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <Link href={"/category/"+category} 
          key={index}
            className="text-white bg-gray-700 px-4 py-2 rounded-md shadow-md hover:scale-105 transform transition duration-300"
          >
            {category}
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategorySection;
