import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-8 lg:px-16">
        
        {/* Site Logo and Name */}
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

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6 text-gray-400 text-sm">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/recipes" className="hover:text-white transition">
            Recipes
          </Link>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms
          </Link>
        </div>

        {/* Divider Line */}
        <div className="mt-8 w-full border-t-2 border-gray-600"></div>

        {/* Copyright Message */}
        <p className="mt-6 text-gray-500 text-xs md:text-sm text-center">
          &copy; {new Date().getFullYear()} Amita Kitchen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
