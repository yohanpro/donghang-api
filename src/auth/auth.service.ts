import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library';
import { AUTH_PROVIDER, ACCOUNT_ACTIVE_STATUS } from 'src/consts';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}
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
        provider: AUTH_PROVIDER.GOOGLE,
        locale,
        email,
        name,
      };

      return userInformation;
    };

    const userInformation = await verify();
    return this.processUserVerify(userInformation);
  }

  async processUserVerify(userInformation) {
    const { email } = userInformation;
    const user = await this.userService.findUserByEmail(email);

    if (!user) {
      return {
        email,
        activeStatus: ACCOUNT_ACTIVE_STATUS.PRE_ACTIVE,
      };
    }
    const payload = { ...user, ...userInformation };
    const userData = await this.makeUserData(payload);

    return userData;
  }
  makeUserData(payload) {
    const { id, activeStatus, email, nickname } = payload;
    return {
      token: this.jwtService.sign({ id, email, nickname }),
      id,
      activeStatus,
    };
  }

  async refreshAccessToken(accessToken) {
    const verifyToken = this.jwtService.verify(accessToken, {
      secret: process.env.JWT_SECRET,
    });

    const user = await this.userService.findUserByEmail(verifyToken.email);

    if (!user) return new UnauthorizedException();

    const { id, activeStatus, email, nickname } = user;
    const userData = await this.makeUserData({
      id,
      activeStatus,
      email,
      nickname,
    });
    return userData;
  }
}
