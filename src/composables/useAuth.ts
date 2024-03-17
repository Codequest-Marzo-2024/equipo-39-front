import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/useAuthStore';
import { signIn } from '../api/auth-api';
import { LoginForm } from '../interfaces/auth.interface';

const useAuth = () => {
  const authStore = useAuthStore();
  const { user, loginForm, rememberMe } = storeToRefs(authStore);

  const setLoginFormToLocalStore = (loginForm: LoginForm) => {
    localStorage.set('loginForm', loginForm);
  };

  const getJwtFromLocalStore = () => {
    return localStorage.getItem('jwt') as string;
  };

  const setJwtToLocalStore = (jwt: string) => {
    localStorage.set('jwt', jwt);
  };

  const login = async () => {
    try {
      const data = await signIn(loginForm.value);
      user.value = data;
      if (rememberMe.value) {
        setLoginFormToLocalStore({ ...loginForm.value, password: '' });
      }

      setJwtToLocalStore(data.jwt);
    } catch (error) {}
  };

  const logout = () => {
    authStore.resetUser();
    localStorage.removeItem('jwt');
  };

  return {
    // state
    user,
    rememberMe,
    loginForm,

    // actions
    login,
    checkUserJwt: authStore.checkUserJwt,
    getJwtFromLocalStore,
    logout,
  };
};

export default useAuth;
