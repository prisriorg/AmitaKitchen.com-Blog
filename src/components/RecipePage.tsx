import Image from "next/image";
import React from "react";

const RecipePage = () => {
  // Recipe data
  const recipeData = {
    title: "ढाबा स्टाइल आलू बैंगन की चटपटी सब्जी",
    description:
      "एक ऐसी डिश जो भारतीय घरों में बहुत पसंद की जाती है। ढाबा स्टाइल में इसे बनाने का अपना ही मज़ा है। आज हम आपको बताएंगे कि कैसे आप घर पर इस मसालेदार और चटपटी सब्जी को आसानी से बना सकते हैं। इस सब्जी को पराठे, पूरी या चावल के साथ परोसा जा सकता है और इसका स्वाद हर किसी को भाएगा।",
    prepTime: "10 mins",
    cookTime: "30 mins",
    totalTime: "40 mins",
    ingredients: [],
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Recipe Title */}
      <h1 className="text-3xl font-semibold text-gray-800">{recipeData.title}</h1>
      <p className="text-gray-600 text-lg mt-1">by Amita Kitchen</p>

      {/* Recipe Image */}
      <div className="py-6">
        <Image
          src="/images/fH8ZjrdqdWM/hsgfyusgyu.jpg"
          alt="Aalu Baingan ki Sabji"
          width={700}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Description */}
      <p className="mt-4">{recipeData.description}</p>

      {/* Time Information */}
      <div className="mt-6 text-sm flex space-x-6">
        <span>Preparation Time: <strong>{recipeData.prepTime}</strong></span>
        <span>Cooking Time: <strong>{recipeData.cookTime}</strong></span>
        <span>Total Time: <strong>{recipeData.totalTime}</strong></span>
      </div>

      {/* Ingredients Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Ingredients (सामग्री):</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>बैंगन (Baingan):</strong> 4 (लगभग 300 ग्राम)</li>
          <li><strong>आलू (Aloo):</strong> 3 मध्यम आकार के</li>
          <li><strong>हरी मिर्च (Hari Mirch):</strong> 2</li>
          <li><strong>लहसुन (Lahsun):</strong> 8-10 कलियाँ</li>
          <li><strong>अदरक (Adrak):</strong> 1 इंच का टुकड़ा</li>
          <li><strong>सरसों का तेल (Sarson ka Tel):</strong> 2 टेबलस्पून</li>
          <li><strong>जीरा (Jeera):</strong> ½ टीस्पून</li>
          <li><strong>हींग (Hing):</strong> ¼ चम्मच (2 चुटकी)</li>
          <li><strong>तेजपत्ता (Tej Patta):</strong> 1</li>
          <li><strong>बड़ी इलायची (Badi Elaichi):</strong> 1</li>
          <li><strong>प्याज (Pyaaz):</strong> 1 बड़ा (पतला काटा हुआ)</li>
          <li><strong>हल्दी पाउडर (Haldi Powder):</strong> ¼ चम्मच</li>
          <li><strong>धनिया पाउडर (Dhania Powder):</strong> 1 टीस्पून</li>
          <li><strong>कश्मीरी लाल मिर्च पाउडर (Kashmiri Lal Mirch Powder):</strong> 1 टीस्पून</li>
          <li><strong>गरम मसाला (Garam Masala):</strong> ¼ चम्मच</li>
          <li><strong>कसूरी मेथी (Kasuri Methi):</strong> 1 टेबलस्पून</li>
          <li><strong>टमाटर (Tamatar):</strong> 1 बड़ा (मोटे टुकड़ों में कटा हुआ)</li>
          <li><strong>नमक (Namak):</strong> स्वादानुसार</li>
          <li><strong>हरा धनिया (Hara Dhania):</strong> सजाने के लिए</li>
        </ul>
      </div>

      {/* Cooking Method Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">बनाने की विधि (Method):</h2>

        <h3 className="text-xl font-semibold mt-4">1. सब्जियों की तैयारी (Preparation of Vegetables):</h3>
        <ul className="list-decimal list-inside space-y-2">
          <li><strong>बैंगन (Baingan):</strong> चार बैंगन लें और उन्हें मोटे टुकड़ों में काटें। काटने के बाद तुरंत पानी में डाल दें ताकि वे काले न पड़ें।</li>
          <li><strong>आलू (Aloo):</strong> तीन आलू को छीलकर मोटे टुकड़ों में काटें और पानी में डाल दें।</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">2. मसाला बनाना (Making the Masala):</h3>
        <p>हरी मिर्च, लहसुन, और अदरक को खल-बट्टे में दरदरा कूट लें। यह मसाला सब्जी के स्वाद को बढ़ाएगा।</p>

        <h3 className="text-xl font-semibold mt-6">3. फ्राई करना (Frying):</h3>
        <ul className="list-decimal list-inside space-y-2">
          <li><strong>बैंगन फ्राई करना (Frying Baingan):</strong> एक पैन में 2 टेबलस्पून सरसों का तेल डालें और गर्म करें। जब तेल गर्म हो जाए, तो उसमें कटे हुए बैंगन डालें और मध्यम आंच पर 3-4 मिनट तक भूनें, जब तक उनका रंग बदल न जाए।</li>
          <li><strong>आलू फ्राई करना (Frying Aloo):</strong> अब उसी पैन में आलू डालें और उन्हें हल्का ब्राउन होने तक फ्राई करें।</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">4. तड़का लगाना (Tempering):</h3>
        <ul className="list-decimal list-inside space-y-2">
          <li><strong>तेल में मसाले डालना (Adding Spices to Oil):</strong> बचे हुए तेल में सरसों का तेल डालें। इसमें जीरा, हींग, तेजपत्ता, और बड़ी इलायची डालें। जब जीरा चटकने लगे, तब कूटे हुए लहसुन-मिर्च-अदरक का मिश्रण डालें और 1-2 मिनट तक भूनें।</li>
          <li><strong>प्याज डालना (Adding Onion):</strong> फिर, कटे हुए प्याज डालें और उन्हें हल्का ब्राउन होने तक भूनें।</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">5. मसाले डालना (Adding Spices):</h3>
        <p>प्याज के भुनने के बाद हल्दी, धनिया पाउडर, कश्मीरी लाल मिर्च, और गरम मसाला डालें। इसके साथ ही कसूरी मेथी को हाथों से क्रश करके डालें और अच्छे से मिक्स करें।</p>

        <h3 className="text-xl font-semibold mt-6">6. ग्रेवी बनाना (Making the Gravy):</h3>
        <p>अब इसमें कटे हुए टमाटर डालें और 1-2 मिनट तक पकने दें। टमाटर को लास्ट में डालने से उसकी खटास बनी रहती है। फिर एक गिलास पानी और नमक डालें। इसे 2-3 मिनट तक पकने दें ताकि ग्रेवी अच्छी तरह पक जाए।</p>

        <h3 className="text-xl font-semibold mt-6">7. आलू बैंगन मिलाना (Mixing Aloo and Baingan):</h3>
        <p>जब ग्रेवी पक जाए, तो उसमें पहले से फ्राई किए हुए आलू और बैंगन डालें। सब्जी को 4-5 मिनट तक ढककर पकने दें।</p>

        <h3 className="text-xl font-semibold mt-6">8. सजाना और परोसना (Garnishing and Serving):</h3>
        <p>सब्जी तैयार हो जाने पर उसे हरे धनिए से गार्निश करें। अब ढाबा स्टाइल आलू बैंगन की चटपटी सब्जी गरम-गरम पराठे, चपाती, या चावल के साथ परोसें।</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion (निष्कर्ष):</h2>
          <p>
            यह आलू बैंगन की सब्जी न केवल स्वादिष्ट है बल्कि बनाने में भी आसान
            है। इसे एक बार बनाकर जरूर देखें और हमें कमेंट करके बताएं कि आपको यह
            कैसी लगी। अगर आपको यह रेसिपी पसंद आई, तो कृपया इसे लाइक करें और
            हमारे ब्लॉग को सब्सक्राइब करें!
          </p>
        
      </div>
    </div>
  );
};

export default RecipePage;
