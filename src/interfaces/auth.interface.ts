export interface LoginForm {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  email: string;
  roleId: number;
  jwt: string;
}
