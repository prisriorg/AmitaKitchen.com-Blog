import Link from "next/link";

export default function PostBox({
  image,
  link,
  title,
  time,
  discription,
}: {
  image: string;
  link: string;
  title: string;
  time: string;
  discription: string;
}) {
  return (
    <Link href={"/post/" + link} title={title}>
      <div className="md:h-48 md:flex shadow-lg border-2 mb-4 rounded-lg hover:scale-105 transform transition duration-300">
        <img
          className="md:w-[35%] lg:w-[30%] md:rounded-l-lg object-cover"
          src={
            image ??
            "https://www.frontendzone.com/_next/image?url=%2Fimages%2Fdefault2.png&w=1920&q=75"
          }
          alt={title}
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-400">by Amita kitchen</p>
          <p className="text-sm md:text-sm lg:text-lg">
            {discription.slice(0, 100) + "..."}
          </p>

          <p className="text-sm text-gray-400">{time}</p>
        </div>
      </div>
    </Link>
  );
}
