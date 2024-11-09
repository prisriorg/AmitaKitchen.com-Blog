import config from "@/lib/config";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Privacy Policy for Amita Kitchen
      </h1>

      <p className="mb-6 leading-relaxed">
        At Amita Kitchen, accessible from{" "}
        <a
          href="https://amitakitchen.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          https://amitakitchen.com
        </a>
        , we prioritize the privacy of our visitors. This Privacy Policy
        outlines the types of information we collect and how we use it. If you
        have additional questions or need more information about our Privacy
        Policy, please feel free to contact us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information when you visit our site, subscribe
        to our newsletter, or interact with us in other ways. This may include:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>
          <strong>Personal Information</strong>: Names, email addresses, and
          other information you voluntarily provide when you subscribe to our
          newsletter or contact us.
        </li>
        <li>
          <strong>Non-Personal Information</strong>: Usage data, such as IP
          addresses, browser types, pages viewed, and time spent on the site.
          This information helps us understand how visitors use Amita Kitchen
          and allows us to improve user experience.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use the information we collect in various ways, including:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>To operate and maintain our website</li>
        <li>To send periodic emails, such as newsletters or updates</li>
        <li>To personalize and improve user experience</li>
        <li>To understand how users interact with our content</li>
        <li>
          To prevent fraudulent activity and ensure the security of our website
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        3. Cookies and Tracking Technologies
      </h2>
      <p className="mb-6 leading-relaxed">
        Amita Kitchen may use cookies, web beacons, or similar technologies to
        collect information. Cookies are small files stored on your device that
        help us recognize you and improve our site. You can adjust your browser
        settings to disable cookies, though this may affect the functionality of
        some parts of our site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        4. Third-Party Services
      </h2>
      <p className="mb-6 leading-relaxed">
        We may use third-party services, such as analytics providers (e.g.,
        Google Analytics), to help us analyze how our website is used. These
        third-party services may collect information about your online activity
        on Amita Kitchen and other sites over time. We do not control these
        third parties and recommend reviewing their privacy policies for
        additional information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        5. Data Security
      </h2>
      <p className="mb-6 leading-relaxed">
        We implement various security measures to protect your personal
        information. However, no method of data transmission or storage is 100%
        secure. While we strive to protect your information, we cannot guarantee
        its absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        6. Childrens Privacy
      </h2>
      <p className="mb-6 leading-relaxed">
        Amita Kitchen does not knowingly collect personal information from
        children under the age of 13. If we become aware that a child under 13
        has provided us with personal information, we will delete it promptly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        7. Changes to This Privacy Policy
      </h2>
      <p className="mb-6 leading-relaxed">
        We may update this Privacy Policy from time to time. We encourage you to
        review this page periodically to stay informed about how we protect your
        information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">
        8. Contact Us
      </h2>
      <p className="mb-6 leading-relaxed">
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <p className="leading-relaxed">
        <strong>Instagram</strong>:{" "}
        <a
          href={config.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          amitakitchen
        </a>{" "}
        <br />
        <strong>Email</strong>: prisriorg@gmail.com <br />
        <strong>Phone</strong>: +91 7843835159 <br />
        <strong>Website</strong>:{" "}
        <a
          href="https://amitakitchen.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          https://amitakitchen.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
