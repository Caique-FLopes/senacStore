import { useState } from 'react';
import Service from '../../Repositories/BaseService';
import { useAuth } from '../Providers/UserContexts';

export default function useLoginViewModel() {
  const [username, setUsername] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { user, setLogin } = useAuth();

  function handleUsername(value: string) {
    setUsername(value);
  }

  function handlePassword(value: string) {
    setPassword(value);
  }

  async function handleLogin() {
    try {
      setLoading(true);
      const data: { token: string } = await Service.post<{ token: string }>(
        '/auth/login',
        {
          username: username,
          password: password,
        },
      );
      setLogin(data.token);
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    username,
    password,
    error,
    loading,
    handleUsername,
    handlePassword,
    handleLogin,
  };
}
