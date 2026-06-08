import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "../src/generated/prisma/client";
import bcrypt from "bcryptjs";

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const username = process.env.SEED_ADMIN_USERNAME ?? "admin";
  const password = process.env.SEED_ADMIN_PASSWORD ?? "admin1234";
  const passwordHash = await bcrypt.hash(password, 10);

  const admin = await prisma.user.upsert({
    where: { username },
    update: {},
    create: {
      username,
      name: "Administrador",
      passwordHash,
      role: "ADMIN",
    },
  });

  console.log(`Usuario admin listo: ${admin.username} (rol ${admin.role})`);
  if (!process.env.SEED_ADMIN_PASSWORD) {
    console.log(`Contraseña inicial por defecto: ${password} — cámbiala después de iniciar sesión.`);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
