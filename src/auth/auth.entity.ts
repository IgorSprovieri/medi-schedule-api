import { User } from 'src/user/user.entity';

export class Auth extends User {
  token: string;
}
