import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const url= "https://amitakitchen.com"
  var sitemap:any[]=[];
  sitemap.push({
    url: url,
    lastModified: new Date(),
    changeFrequency: 'hourly',
    priority: 1,
  })



  // Add your other URLs to the sitemap here


  
  return sitemap
}