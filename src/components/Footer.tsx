import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import config from "@/lib/config";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2 mb-4">
          <Image
            src="/logo.jpg"
            alt="Site Logo"
            width={100}
            height={100}
            title="Amita Kitchen Site Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-lg font-semibold">Amita Kitchen</span>
        </div>
        <div className="flex space-x-6 mt-4">
          <a
            href={config.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href={config.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
         
        </div>
        <div className="flex flex-wrap justify-center space-x-4 mt-6 text-gray-400 text-sm">
          {config.pages.map((da, index) => (
            <Link
              key={index}
              href={config.SiteUrl+"/"+da.toLowerCase().replaceAll(" ", "-")}
              className="hover:text-white transition"
            >
              {da}
            </Link>
          ))}

         
        </div>
        <div className="mt-8 w-full border-t-2 border-gray-600"></div>
        <p className="mt-6 text-gray-500 text-xs md:text-sm text-center">
          &copy; {new Date().getFullYear()} Amita Kitchen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
