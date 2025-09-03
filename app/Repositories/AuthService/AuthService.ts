import { jwtDecode } from 'jwt-decode';
import BaseService from '../BaseService';

class AuthService extends BaseService {
  constructor() {
    super();
  }
  async auth(username: string, password: string): Promise<any> {
    const { token } = await this.post<{ token: string }>('/auth/login', {
      username,
      password,
    });

    return {
      ...this.decodeJwt(token),
      token: token,
    };
  }
  decodeJwt(token: string) {
    return jwtDecode(token);
  }
}

export default new AuthService();
