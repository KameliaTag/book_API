const { PrismaClient } = require('@prisma/client');
const { createToken } = require('../services/tokenManager');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
async function run() {
  const password1 = "azerty"
  const hashedPassword = await bcrypt.hash(password1, 12);
  const user1 = await prisma.user.upsert({
    where: { email: "user1@gmail.com" },
    update: {},
    create: {
      email: "user1@gmail.com",
      firstName: "user1",
      lastName: "User1",
      password: hashedPassword,
      role: "USER",
      number: '0123456789',
    },
  });

  console.log({ user1 });
}

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });