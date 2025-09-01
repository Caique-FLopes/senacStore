import BaseService from '../BaseService';

class AuthService extends BaseService {
  constructor() {
    super();
  }

  async auth(username: string, password: string): Promise<{ token: string }> {
    return this.post('/auth/login', { username, password });
  }
}

export default new AuthService();
