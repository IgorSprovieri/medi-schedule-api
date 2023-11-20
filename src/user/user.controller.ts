import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { User } from './user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'Created User' })
  @ApiResponse({ status: 400, description: 'User already exists' })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const found = await this.userservice.findByEmail(createUserDto.email);

    if (found) {
      throw new HttpException('User Already Exists', 400);
    }

    return await this.userservice.create(createUserDto);
  }
}
