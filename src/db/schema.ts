import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  title: text("title").notNull(),
  discription: text("discription").notNull(),
  keywords: text("keywords").notNull(),
  slug: text("slug").notNull(),
  authorId: integer("author_id"),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
})

export type User = typeof posts.$inferSelect
export type InsertUser = typeof posts.$inferInsert

