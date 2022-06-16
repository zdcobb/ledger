const { PrismaClient } = require("@prisma/client");

export const prisma = new PrismaClient();

// endpoints

export const user = await prisma.user.create({});

export async function registerUser() {}

export async function getUserLedgers() {}
