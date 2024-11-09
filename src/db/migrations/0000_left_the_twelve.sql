CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`keywords` text NOT NULL,
	`prep_time` text NOT NULL,
	`cook_time` text NOT NULL,
	`total_time` text NOT NULL,
	`ingredients` text NOT NULL,
	`method` text NOT NULL,
	`conclusion` text NOT NULL,
	`yt` text NOT NULL,
	`category` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer
);
