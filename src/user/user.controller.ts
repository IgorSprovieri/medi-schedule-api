import {
  Controller,
  Post,
  Body,
  HttpException,
  Get,
  UseGuards,
  Request,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { User } from './user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

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

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get user' })
  @ApiResponse({ status: 200, description: 'Get User' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async get(@Request() req: RequestMethod): Promise<User> {
    const user = await this.userservice.findByEmail(req['user'].email);

    if (!user) {
      throw new HttpException('User Not Found', 404);
    }

    return user;
  }
}
