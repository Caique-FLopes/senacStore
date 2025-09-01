import { useState } from 'react';
import { useAuth } from '../Providers/UserContexts';
import AuthService from '../../Repositories/AuthService/AuthService';

export default function useLoginViewModel() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<unknown>();
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

      if (!username || !password) {
        setError('Preencha todos os campos!');
        return;
      }

      const { token } = await AuthService.auth(username, password);
      if (token) {
        setLogin(token);
      }
      console.log(token);
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
