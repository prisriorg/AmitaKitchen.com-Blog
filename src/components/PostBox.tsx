import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from 'date-fns';
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
  const timeAgo = formatDistanceToNow(new Date(time), { addSuffix: true });
  return (
    <Link href={"/post/" + link} title={title}>
      <div className="md:h-48 md:flex shadow-lg border-2 mb-4 rounded-lg hover:scale-105 transform transition duration-300">
        <img
          className="md:w-[35%] lg:w-[30%] md:rounded-l-lg object-fill"
          src={image}
          width={300}
          height={150}
          alt={title}
          title={title}
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-400">by Amita kitchen</p>
          <p className="text-sm md:text-sm lg:text-lg">
            {discription.slice(0, 100) + "..."}
          </p>
          <p className="text-sm text-gray-400">{timeAgo}</p>
        </div>
      </div>
    </Link>
  );
}
