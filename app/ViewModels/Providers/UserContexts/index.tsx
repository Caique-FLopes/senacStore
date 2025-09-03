import React, { createContext, ReactNode, useState, useContext } from 'react';

interface User {
  token?: string;
  sub?: number;
  user?: string;
  iat?: number;
}

interface IAuthContext {
  user?: User;
  setLogin: (token: string) => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>({});

  function setLogin(infosLogged: any) {
    setUser({
      ...user,
      ...infosLogged,
    });
  }

  return (
    <AuthContext.Provider value={{ user, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth deve ser usado dentro de <AuthProvider>');
  }
  return ctx;
}

export default AuthProvider;
