import {
  Controller,
  Post,
  Body,
  HttpException,
  Get,
  UseGuards,
  Request,
  RequestMethod,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'User Created' })
  @ApiResponse({ status: 400, description: 'User already exists' })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const exists = await this.userservice.findByEmail(createUserDto.email);

    if (exists) {
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

  @Put()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 200, description: 'User Updated' })
  @ApiResponse({ status: 400, description: 'New Email Already Exists' })
  @ApiResponse({ status: 404, description: 'User Not Found' })
  async put(
    @Request() req: RequestMethod,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const exists = await this.userservice.findByEmail(updateUserDto.email);

    if (exists && req['user'].email !== updateUserDto.email) {
      throw new HttpException('New Email Already Exists', 400);
    }

    const user = await this.userservice.update(req['user'].id, updateUserDto);

    if (!user) {
      throw new HttpException('User Not Found', 404);
    }

    return user;
  }
}
