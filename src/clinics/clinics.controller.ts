import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
  RequestMethod,
  HttpException,
  Put,
} from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { CreateClinicDto } from './dto/create-clinic.dto';

import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Clinic } from './clinic.entity';
import { UpdateClinicDto } from './dto';

@Controller()
@Roles(UserRole.DOCTOR)
@UseGuards(AuthGuard, RolesGuard)
export class ClinicsController {
  constructor(private readonly clinicsService: ClinicsService) {}

  @Post('clinic')
  async create(
    @Request() req: RequestMethod,
    @Body() createClinicDto: CreateClinicDto,
  ): Promise<Clinic> {
    return await this.clinicsService.create(req['user'].id, createClinicDto);
  }

  @Get('clinics')
  async get(@Request() req: RequestMethod): Promise<Clinic[]> {
    return await this.clinicsService.findAll(req['user'].id);
  }

  @Get('clinic/:id')
  async findOne(
    @Param('id') id: string,
    @Request() req: RequestMethod,
  ): Promise<Clinic> {
    const clinic = await this.clinicsService.findOne(id, req['user'].id);

    if (!clinic) {
      throw new HttpException('Clinic not found', 404);
    }

    return clinic;
  }

  @Put('clinic/:id')
  async put(
    @Param('id') id: string,
    @Request() req: RequestMethod,
    @Body() updateClinicDto: UpdateClinicDto,
  ): Promise<Clinic> {
    const clinic = await this.clinicsService.findOne(id, req['user'].id);

    if (!clinic) {
      throw new HttpException('Clinic not found', 404);
    }

    return await this.clinicsService.update(
      id,
      req['user'].id,
      updateClinicDto,
    );
  }

  @Delete('/clinic/:id')
  async delete(
    @Param('id') id: string,
    @Request() req: RequestMethod,
  ): Promise<Clinic> {
    const clinic = await this.clinicsService.findOne(id, req['user'].id);

    if (!clinic) {
      throw new HttpException('Clinic not found', 404);
    }

    return await this.clinicsService.delete(id, req['user'].id);
  }
}
