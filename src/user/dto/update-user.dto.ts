import { User } from '../user.entity';
import { PickType } from '@nestjs/swagger';

export class UpdateUserDto extends PickType(User, [
  'name',
  'email',
  'password',
  'role',
]) {}
