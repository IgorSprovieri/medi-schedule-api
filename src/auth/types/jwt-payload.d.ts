import { PickType } from '@nestjs/mapped-types';
import { User } from 'src/user/user.entity';

export class JwtPayload extends PickType(User, ['id', 'email', 'role']) {}
