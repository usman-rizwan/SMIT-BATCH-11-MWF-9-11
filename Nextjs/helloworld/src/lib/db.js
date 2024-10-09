const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

export default prisma;
