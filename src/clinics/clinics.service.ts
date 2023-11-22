import { Injectable } from '@nestjs/common';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { Clinic } from './clinic.entity';
import { PrismaService } from 'src/db/prisma.service';
import { UpdateClinicDto } from './dto';

@Injectable()
export class ClinicsService {
  constructor(private prismaService: PrismaService) {}

  async create(
    user_id: string,
    createClinicDto: CreateClinicDto,
  ): Promise<Clinic> {
    return await this.prismaService.clinic.create({
      data: { user_id, ...createClinicDto },
    });
  }

  async findAll(user_id: string): Promise<Clinic[]> {
    return await this.prismaService.clinic.findMany({
      where: { user_id: user_id },
    });
  }

  async findOne(id: string, user_id: string): Promise<Clinic> {
    return await this.prismaService.clinic.findFirst({
      where: { id: id, user_id: user_id },
    });
  }

  async update(
    id: string,
    user_id: string,
    updateClinicDto: UpdateClinicDto,
  ): Promise<Clinic> {
    return await this.prismaService.clinic.update({
      data: updateClinicDto,
      where: { id: id, user_id: user_id },
    });
  }

  async delete(id: string, user_id: string): Promise<Clinic> {
    return await this.prismaService.clinic.delete({
      where: { id: id, user_id: user_id },
    });
  }
}
