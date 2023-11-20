import { PickType } from '@nestjs/swagger';
import { Auth } from '../auth.entity';

export class SignInDto extends PickType(Auth, ['email', 'password']) {}
