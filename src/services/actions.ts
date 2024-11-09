"use server";

import { asc, desc, eq } from "drizzle-orm";
import { posts } from "./../db/schema";
import { db } from "@/db";

export const getPosts = async (
  page: number = 1,
  pageSize: number = 3,
  random: boolean = false
) => {
  const postsData = await db
    .select({
      id: posts.id,
      title: posts.title,
      description: posts.description,
      yt: posts.yt,
      time: posts.updatedAt,
    })
    .from(posts)
    .orderBy(desc(posts.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
  return postsData;
};
export const getPost = async (yt: string) => {
  const postsData = await db
    .select()
    .from(posts)
    .where(eq(posts.yt, yt))
    .limit(1);
  return postsData[0];
};
export const getCategroryPosts = async (cat: string) => {
  const postsData = await db
    .select({
      id: posts.id,
      title: posts.title,
      description: posts.description,
      yt: posts.yt,
      time: posts.updatedAt,
    })
    .from(posts)
    .where(eq(posts.category, cat));
  return postsData;
};

export const getSitemap = async () => {
  const postsData = await db.select().from(posts);
  return postsData;
};
