import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  googleAuth(data) {
    console.log('Google Oauth 들어옴');
    console.log('Google Auth', data);
  }
}
