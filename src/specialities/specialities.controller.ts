import { Controller, Get, UseGuards } from '@nestjs/common';
import { SpecialitiesService } from './specialities.service';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Speciality } from './speciality.entity';

@Controller('specialities')
@Roles(UserRole.DOCTOR)
@UseGuards(AuthGuard, RolesGuard)
export class SpecialitiesController {
  constructor(private readonly specialitiesService: SpecialitiesService) {}

  @Get()
  async findAll(): Promise<Array<Speciality>> {
    return await this.specialitiesService.findAll();
  }
}
