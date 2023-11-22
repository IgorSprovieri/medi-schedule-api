import { PickType } from '@nestjs/swagger';
import { Clinic } from '../clinic.entity';

export class CreateClinicDto extends PickType(Clinic, [
  'clinic_name',
  'clinic_adress',
]) {}
