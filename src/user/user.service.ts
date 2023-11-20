import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { User } from './user.entity';
import { PrismaService } from 'src/db/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.email, 10),
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findFirst({ where: { email: email } });
  }
}
