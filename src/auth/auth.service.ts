import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async googleAuth({ token }) {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    const verify = async () => {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      const { sub, email, locale, name } = payload;

      const userInformation = {
        provider_uid: sub,
        provider: 1,
        locale,
        email,
        name,
      };

      return userInformation;
    };

    const userInformation = await verify();
    return this.generateJWTToken(userInformation);
  }

  generateJWTToken(userInformation) {
    const payload = {
      ...userInformation,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  myProtectedRouteTest() {
    return 'This is Protected';
  }
}
