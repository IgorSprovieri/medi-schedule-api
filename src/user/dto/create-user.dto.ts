import { User } from '../user.entity';
import { PickType } from '@nestjs/swagger';

export class CreateUserDto extends PickType(User, [
  'name',
  'email',
  'password',
  'role',
]) {}
