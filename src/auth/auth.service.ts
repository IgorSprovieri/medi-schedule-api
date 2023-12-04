import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SignInDto } from './dto';
import { Auth } from './auth.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './types';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<Auth> {
    const user = await this.usersService.findByEmail(signInDto.email);
    const auth = await compare(signInDto.password, user.password);

    if (!auth) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    return { ...user, token: await this.jwtService.signAsync(payload) };
  }
}
