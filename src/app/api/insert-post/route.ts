import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/db"; // Your Drizzle ORM database instance
import { posts, type InsertPost } from "@/db/schema";
export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const recipeData: any = await req.json(); // Get the recipe data from the request body

    // Prepare post data to insert into the database
    const postData: InsertPost = {
      title: recipeData.title,
      description: recipeData.description,
      keywords: recipeData.keywords,
      prepTime: recipeData.prepTime,
      cookTime: recipeData.cookTime,
      totalTime: recipeData.totalTime,
      ingredients: JSON.stringify(recipeData.ingredients), // Convert to JSON string
      method: JSON.stringify(recipeData.method), // Convert to JSON string
      conclusion: recipeData.conclusion,
      yt: recipeData.videoId,
      category: recipeData.category,
    };

    // Insert data into the database
    await db.insert(posts).values(postData);
    return NextResponse.json({ message: "Recipe saved successfully!" });
  } catch (error) {
    console.error("Error saving recipe:", error);
    return NextResponse.json({ message: "Failed to save recipe" });
  }
}
