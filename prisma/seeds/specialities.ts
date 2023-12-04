import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';
const prisma = new PrismaClient();

export async function specialitiesSeeder() {
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Clínica Geral/Medicina Interna',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Pediatria',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Ginecologia e Obstetrícia',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Cirurgia Geral',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Ortopedia',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Dermatologia',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Cardiologia',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Psiquiatria',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Oftalmologia',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Otorrinolaringologia',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Urologia',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Neurologia',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Endocrinologia',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Radiologia',
    },
  });
  await prisma.speciality.upsert({
    where: { id: randomUUID() },
    update: {},
    create: {
      speciality: 'Anestesiologia',
    },
  });
}
