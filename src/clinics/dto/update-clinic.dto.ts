import { PickType } from '@nestjs/swagger';
import { Clinic } from '../clinic.entity';

export class UpdateClinicDto extends PickType(Clinic, [
  'speciality_id',
  'clinic_name',
  'clinic_adress',
]) {}
