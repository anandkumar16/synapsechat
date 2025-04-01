import { PrismaClient } from "@prisma/client";

// Create a custom type for global that includes prisma
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Initialize the prisma client
export const db = globalThis.prisma || new PrismaClient();

// Assign prisma to global object in development to prevent multiple instances
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;