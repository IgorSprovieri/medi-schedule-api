import { Controller, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { User } from './user.entity';
import { Response } from 'express';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiCreatedResponse()
  @ApiResponse({ status: 400, description: 'User already exists' })
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ): Promise<User | Response> {
    const found = await this.userservice.findByEmail(createUserDto.email);

    if (found) {
      return res.status(400).json({ error: 'User already exists' });
    }

    return await this.userservice.create(createUserDto);
  }
}
