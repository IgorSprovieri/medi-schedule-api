import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Clinic as PrismaClinic } from '@prisma/client';
import { IsString, IsUUID } from 'class-validator';

export class Clinic implements PrismaClinic {
  @ApiPropertyOptional({ description: 'UUID Generated' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'User UUID' })
  @IsUUID()
  user_id: string;

  @ApiProperty()
  @IsString()
  clinic_name: string;

  @ApiProperty()
  @IsString()
  clinic_adress: string;
}
