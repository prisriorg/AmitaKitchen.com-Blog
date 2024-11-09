import { getPosts } from "@/services/actions";
import Link from "next/link";
import config from "@/lib/config";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

const RecentPost = async ({
  showPosts,
  onPage,
  randomPost,
}: {
  showPosts: number;
  onPage: number;
  randomPost?: boolean;
}) => {
  const data = await getPosts(showPosts, onPage, randomPost);
  return (
    <div className="">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold text-white bg-black px-4 py-2 rounded-tl-lg rounded-br-lg">
          Recent Posts
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {data.map((da, index) => (
          <Link key={index} href={"/post/" + da.yt} title={da.title}>
            <div className="md:h-28 flex shadow-lg border-2 mb-4 rounded-lg hover:scale-105 transform transition duration-300">
              <img
                className="w-[38%] md:rounded-l-lg object-fill"
                src={
                  config.SiteUrl +
                  "/images/" +
                  da.yt +
                  "/" +
                  da.title.replaceAll(" ", "-") +
                  ".jpg"
                }
                width={300}
                height={150}
                alt={da.title}
                title={da.title}
              />
              <div className="p-2">
                <h3 className="text-base font-bold">{da.title}</h3>
                <p className="text-xs text-gray-400">by Amita kitchen</p>
                <p className="text-xs md:text-sm lg:text-sm">
                  {da.description.slice(0, 50) + "..."}
                </p>
                <p className="text-xs text-gray-400">
                  {formatDistanceToNow(new Date(da.time?.toISOString() || ""), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
