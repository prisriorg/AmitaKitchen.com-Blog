import config from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const AboutAuthor: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold my-4">About the Author</h2>
      <div className="shadow-lg border-2 rounded-lg">
      <div className="flex flex-col items-center p-6">
        <Image
          src="/logo.jpg" // Replace with the path to your profile image
          alt="Author's profile picture"
          width={150}
          height={150}
          className="rounded-full shadow-md border-4 border-indigo-500"
        />
        
        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold text-gray-700">Amita Kitchen</h3>
          <p className="text-sm text-gray-500">Youtuber & Recipe Enthusiast</p>
          <p className="text-sm text-gray-500">Sharing recipes since 2018</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href={config.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 transition-transform transform hover:scale-110 hover:text-red-700"
          title="Visit YouTube Channel"
        >
          <FaYoutube className="w-12 h-12" />
        </a>
        
        <a
          href={config.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 transition-transform transform hover:scale-110 hover:text-pink-600"
          title="Follow on Instagram"
        >
          <FaInstagram className="w-12 h-12" />
        </a>
      </div>
      <div className="my-6 text-gray-700 text-center px-6">
        <p>
          Welcome to my kitchen! I am passionate about creating easy-to-follow recipes that bring joy to every meal.
          Join me on this culinary journey where I share tips, techniques, and my favorite recipes!
        </p>
      </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
