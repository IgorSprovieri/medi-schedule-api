import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UserRole } from './types';

enum UserRoleEnum {
  USER = 'USER',
  DOCTOR = 'DOCTOR',
}

export class User implements UserModel {
  @ApiPropertyOptional({ description: 'UUID Generated' })
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ enum: UserRoleEnum })
  @IsEnum(UserRoleEnum)
  role: UserRole;
}
