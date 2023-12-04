import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { Speciality } from './speciality.entity';

@Injectable()
export class SpecialitiesService {
  constructor(private prismaService: PrismaService) {}

  async findAll(): Promise<Array<Speciality>> {
    return await this.prismaService.speciality.findMany();
  }
}
