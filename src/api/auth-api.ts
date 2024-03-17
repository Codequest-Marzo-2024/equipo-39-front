import api from '../common/utils/axios-global';
import { LoginForm, AuthUser } from '../interfaces/auth.interface';

export const signIn = async (loginForm: LoginForm) => {
  const response = await api.post<AuthUser>('/auth/login', loginForm);
  return response.data;
};

export const validateJwt = async () => {
  const resp = await api.get<AuthUser>('auth/check-auth-token');
  return resp.data;
};
