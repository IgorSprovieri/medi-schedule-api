import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User as UserModel, UserRole } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

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
