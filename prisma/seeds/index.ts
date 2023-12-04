import { PrismaClient } from '@prisma/client';
import { specialitiesSeeder } from './specialities';

const prisma = new PrismaClient();

async function main() {
  await specialitiesSeeder();
  console.log('Seeders Created');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
