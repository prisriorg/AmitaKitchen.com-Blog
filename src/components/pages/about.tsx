import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">About Us</h1>

      <p className="mb-6 leading-relaxed">
        Welcome to <strong>Amita Kitchen</strong>, your ultimate destination for delicious, home-cooked recipes! We are passionate about making cooking accessible to everyone by sharing recipes that bring joy and warmth to your home.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Our Mission</h2>
      <p className="mb-6 leading-relaxed">
        At Amita Kitchen, our mission is to inspire people to cook more at home with simple, flavorful recipes that celebrate traditional and modern cuisine. From quick daily meals to elaborate dishes, we have something for everyone.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">What We Offer</h2>
      <p className="mb-6 leading-relaxed">
        We offer a variety of recipes with clear, step-by-step instructions, tips, and advice to help you become confident in the kitchen. Whether you are a beginner or an experienced cook, Amita Kitchen has recipes to suit your taste.
      </p>

      <p className="mt-8 text-gray-800">
        Thank you for being part of our culinary journey. We hope our recipes bring flavor and joy to your table!
      </p>
    </div>
  );
};

export default AboutUs;
