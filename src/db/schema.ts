import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  keywords: text('keywords').notNull(),
  prepTime: text('prep_time').notNull(),
  cookTime: text('cook_time').notNull(),
  totalTime: text('total_time').notNull(),
  ingredients: text('ingredients').notNull(), // Store as JSON string
  method: text('method').notNull(), // Store as JSON string
  conclusion: text('conclusion').notNull(),
  yt: text('yt').notNull(),
  category: text('category').notNull(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

export type Post = typeof posts.$inferSelect
export type InsertPost = typeof posts.$inferInsert

