import { create } from "domain";
import { integer, pgTable, varchar, timestamp, json } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(2),
});


export const projectTable = pgTable("Projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId: varchar(),
  createdBy: varchar().references(() => usersTable.email),
  createdOn:  timestamp().defaultNow(),
});


export const frameTables = pgTable("Frames", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId: varchar().references(() => projectTable.projectId),
  createdOn:  timestamp().defaultNow(),
  frameId: varchar(), 
});


export const chatTables = pgTable("Chats", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  chatMessage:json(),
  createdOn:  timestamp().defaultNow(),
  createdBy: varchar().references(() => usersTable.email), 
});