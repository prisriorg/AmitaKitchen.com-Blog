import config from "@/lib/config";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Contact Us</h1>

      <p className="mb-6 leading-relaxed">
        We’d love to hear from you! Whether you have questions, feedback, or recipe requests, feel free to reach out.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Get in Touch</h2>
      <p className="leading-relaxed mb-6">
        <strong>Email</strong>: prisriorg@gmail.com
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Follow Us</h2>
      <p className="leading-relaxed">
        Stay connected and get the latest updates:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
      <li>
          <a href={config.youtube} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Youtube
          </a>
        </li>
        <li>
          <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Instagram
          </a>
        </li>
        
      </ul>

      <p className="mt-8">
        Looking forward to connecting with you!
      </p>
    </div>
  );
};

export default Contact;
