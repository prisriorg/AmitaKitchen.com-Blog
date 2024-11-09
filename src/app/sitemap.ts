import config from '@/lib/config';
import { getSitemap } from '@/services/actions';
import { MetadataRoute } from 'next'
 export const runtime = 'edge'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url= config.SiteUrl
  var sitemap:any[]=[];
  sitemap.push({
    url: url,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  })
  config.pages.forEach(post => {
    sitemap.push({
      url: `${url}/${post.toLowerCase().replaceAll(" ","-")}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    })
  })
  config.Category.forEach(post => {
    sitemap.push({
      url: `${url}/category/${post.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    })
  })
  
  const getPosts = await getSitemap()
  getPosts.forEach(post => {
    sitemap.push({
      url: `${url}/post/${post.yt}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    })
  })

  
  return sitemap
}