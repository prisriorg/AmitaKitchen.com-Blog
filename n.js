
const { JSDOM } = require('jsdom');
const fetchData = async () => {
    try {
      const response = await fetch('https://famobi.com/thief-puzzle/?locale=en', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse and set the data
      const html = await response.text();

      // Select the <article> tag and get its content
     
    // Parse the HTML content with JSDOM
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Extract the required data (title, description, image)
    const title = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || "No title available";
    const description = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || "No description available";
    const image = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || "No image available";

    // Display the extracted data
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image URL:", image);



    // Select the <article> tag
    const articleElement = document.querySelector('h2');

    if (articleElement) {
      // Extract the inner HTML or text content of the article
      const articleContent = articleElement.innerHTML; 
      console.log("Article Content:");
      console.log(articleContent);
    } else {
      console.log("No <article> tag found in the document.");
    }
    } catch (err) {
      console.log(err.message);
    }
  };
  
  fetchData();