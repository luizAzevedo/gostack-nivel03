import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredenctials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credencials: SignInCredenctials): Promise<void>; // quando transforma o metod em "async", ele passa a retornar uma "Promise<void>"
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('session', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Luiz Azevedo', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
