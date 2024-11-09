"use client";
import React, { useState } from "react";

const InsertPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const recipeData = {
    title: "ब्रेड और आलू के पकौड़े",
    description:
      "एक स्वादिष्ट और कुरकुरा नाश्ता जो ब्रेड और आलू से बनाया जाता है। यह बनाने में बहुत आसान है और इसे कुछ ही मिनटों में तैयार किया जा सकता है।",
    category: "नाश्ता",
    keywords: "ब्रेड, पकौड़े, नाश्ता, स्नैक, भारतीय व्यंजन",
    prepTime: "10 मिनट",
    cookTime: "15 मिनट",
    totalTime: "25 मिनट",
    ingredients: [
      { name: "ब्रेड स्लाइस", quantity: "5-6" },
      { name: "आलू", quantity: "1 मध्यम आकार का, कद्दूकस किया हुआ" },
      { name: "प्याज", quantity: "1, बारीक कटा हुआ" },
      { name: "हरी मिर्च", quantity: "2-3, बारीक कटी हुई" },
      { name: "धनिया पत्ती", quantity: "1 मुट्ठी, बारीक कटी हुई" },
      { name: "बेसन", quantity: "1/2 कप" },
      { name: "चावल का आटा", quantity: "2 टेबलस्पून" },
      { name: "हल्दी पाउडर", quantity: "1/2 टीस्पून" },
      { name: "धनिया पाउडर", quantity: "1 टीस्पून" },
      { name: "गरम मसाला पाउडर", quantity: "1/2 टीस्पून" },
      { name: "लाल मिर्च पाउडर", quantity: "1/4 टीस्पून" },
      { name: "अमचूर पाउडर", quantity: "1/4 टीस्पून" },
      { name: "नमक", quantity: "स्वादानुसार" },
      { name: "तेल", quantity: "तलने के लिए" },
    ],
    method: [
      {
        title: "बैटर तैयार करना",
        steps: [
          {
            description:
              "कद्दूकस किया हुआ आलू, प्याज, हरी मिर्च, धनिया पत्ती, और मसाले को एक बाउल में मिलाएं।",
          },
          {
            description: "बेसन, चावल का आटा, और पानी मिलाकर गाढ़ा बैटर बनाएं।",
          },
        ],
      },
      {
        title: "ब्रेड को कोट करना",
        steps: [
          {
            description:
              "ब्रेड स्लाइस को बैटर में डुबाएं, सुनिश्चित करें कि सभी तरफ समान रूप से कोट हो गया है।",
          },
        ],
      },
      {
        title: "तलना",
        steps: [
          {
            description:
              "गर्म तेल में कोट की हुई ब्रेड स्लाइस को सुनहरा भूरा और कुरकुरा होने तक डीप-फ्राई करें।",
          },
        ],
      },
      {
        title: "सर्व करना",
        steps: [
          {
            description:
              "अतिरिक्त तेल निकालने के लिए पेपर तौलिये पर पकौड़े निकालें। टोमेटो सॉस या हरी चटनी के साथ गरमागरम परोसें।",
          },
        ],
      },
    ],
    conclusion:
      "ब्रेड और आलू के पकौड़े तैयार हैं! इसे टोमेटो सॉस या हरी चटनी के साथ सर्व करें।",
    videoId: "EdBrByRas7A",
  };
  // const recipeData = {
  //   "title": "कद्दू की खट्टी मीठी चटपटी मसाला पूरी",
  //   "description": "कद्दू की खट्टी मीठी चटपटी मसाला पूरी एक पौष्टिक और स्वादिष्ट नाश्ता है, जिसे बनाने में केवल 10 मिनट लगते हैं। यह पूरी खट्टी, मीठी और तीखी चटपटी होती है और खाने में बेहद टेस्टी और क्रिस्पी बनती है।",
  //   "category": "nashta",
  //   "keywords": "कद्दू, मसाला पूरी, खट्टी मीठी पूरी, चटपटी पूरी, हेल्दी नाश्ता, तला हुआ नाश्ता",
  //   "prepTime": "10 मिनट",
  //   "cookTime": "15 मिनट",
  //   "totalTime": "25 मिनट",
  //   "ingredients": [
  //     { "name": "कद्दू", "quantity": "500 ग्राम" },
  //     { "name": "गुड़", "quantity": "20-25 ग्राम" },
  //     { "name": "गेहूं का आटा", "quantity": "2 कप" },
  //     { "name": "हल्दी पाउडर", "quantity": "1 चम्मच" },
  //     { "name": "गरम मसाला", "quantity": "1 टीस्पून" },
  //     { "name": "धनिया पाउडर", "quantity": "1 टीस्पून" },
  //     { "name": "अमचूर पाउडर", "quantity": "1 चम्मच" },
  //     { "name": "नमक", "quantity": "1/4 टीस्पून" },
  //     { "name": "लाल मिर्च पाउडर", "quantity": "1 टीस्पून" },
  //     { "name": "अजवाइन", "quantity": "1/4 चम्मच" },
  //     { "name": "तेल", "quantity": "तलने के लिए" }
  //   ],
  //   "method": [
  //     {
  //       "title": "1. कद्दू को उबालना और मैश करना",
  //       "steps": [
  //         { "description": "कद्दू को लंबे-लंबे टुकड़ों में काटकर प्रेशर कुकर में गुड़ और थोड़ा पानी डालकर 2-3 सीटी तक उबालें।" },
  //         { "description": "गर्म-गर्म कद्दू को मैश कर लें।" }
  //       ]
  //     },
  //     {
  //       "title": "2. आटा तैयार करना",
  //       "steps": [
  //         { "description": "गेहूं के आटे में हल्दी, गरम मसाला, धनिया पाउडर, अमचूर पाउडर, नमक, लाल मिर्च पाउडर, और अजवाइन डालकर अच्छे से मिक्स करें।" },
  //         { "description": "मैश किए हुए कद्दू का पेस्ट डालें और अच्छे से मिक्स करके आटा गूंध लें।" }
  //       ]
  //     },
  //     {
  //       "title": "3. पूरियां बेलना और तलना",
  //       "steps": [
  //         { "description": "आटे से छोटे-छोटे पेड़े बना लें, फिर उन्हें बेलकर पूरी बना लें।" },
  //         { "description": "तेल गरम करें और पूरी को दोनों तरफ क्रिस्पी और गोल्डन ब्राउन होने तक तलें।" }
  //       ]
  //     },
  //     {
  //       "title": "4. पूरी सर्व करना",
  //       "steps": [
  //         { "description": "गरमागरम खट्टी मीठी मसाला पूरी टोमेटो सॉस या रायते के साथ सर्व करें।" }
  //       ]
  //     }
  //   ],
  //   "conclusion": "कद्दू की खट्टी मीठी मसाला पूरी तैयार है! यह टेस्टी, चटपटी और हेल्दी नाश्ता है। आप इसे एक बार जरूर ट्राई करें और कमेंट करके बताएं कि आपको यह कैसी लगी।",
  //   "videoId": "0NaEbXOR0sc"
  // };

  const sendRecipeData = async () => {
    setIsLoading(true);
    setMessage("Sending recipe data...");
    try {
      const response = await fetch("https://amitakitchen.com/api/insert-post", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData), // Convert recipeData to JSON
      });

      if (response.ok) {
        const result: any = await response.json();
        setMessage(result.message);
        console.log("Recipe saved successfully:", result);
      } else {
        setMessage("Failed to save recipe. Please try again.");
        console.error("Failed to save recipe. Status:", response.status);
      }
    } catch (error) {
      setMessage("Error sending recipe data.");
      console.error("Error sending recipe data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Insert Recipe Post</h1>
      <button onClick={sendRecipeData} disabled={isLoading}>
        {isLoading ? "Sending..." : "Save Recipe"}
      </button>
      <p>{message}</p>
    </div>
  );
};

export default InsertPost;
