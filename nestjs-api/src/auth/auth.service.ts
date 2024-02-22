import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'LOGIN' };
  }

  signup() {
    return { msg: 'SIGNUP' };
  }
}
