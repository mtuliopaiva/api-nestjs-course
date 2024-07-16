import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly JWTService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async createToken() {
    // return this.JWTService.sign();
  }

  async checkToken(token: string) {
    // return this.JWTService.verify();
  }

  async login(email: string, password: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      throw new UnauthorizedException('E-mail e/ou senha incorretos.');
    }
  }

  async forget(email: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (!email) {
      throw new UnauthorizedException('E-mail não encontrado.');
    }

    //TO DO: Enviar e-mail


    return true;
  }

  async reset(password: string, token: string) {
    //TO DO: Se o token for valido
    const id = 0;

    await this.prisma.users.update({
        where: {
            id,
        },
        data: {
            password,
        },
    })

    return true;
  }
}
