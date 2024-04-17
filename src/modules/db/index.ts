import { nanoid } from "nanoid";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient({ log: ["error", "info", "query", "warn"] });

export default db;

export const getId = () => nanoid(16);
