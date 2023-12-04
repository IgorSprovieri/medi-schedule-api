import { Speciality as PrismaSpeciality } from '@prisma/client';

export class Speciality implements PrismaSpeciality {
  id: string;
  speciality: string;
}
