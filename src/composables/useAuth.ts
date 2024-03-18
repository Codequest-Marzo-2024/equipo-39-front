import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/useAuthStore';
import { signIn } from '../api/auth-api';
import { LoginForm } from '../interfaces/auth.interface';
import { useRouter } from 'vue-router';

const useAuth = () => {
  const router = useRouter();
  const authStore = useAuthStore();
  const { user, loginForm, rememberMe } = storeToRefs(authStore);

  const setLoginFormToLocalStore = (loginForm: LoginForm) => {
    localStorage.setItem('loginForm', JSON.stringify(loginForm));
  };

  const getJwtFromLocalStore = () => {
    return localStorage.getItem('jwt') as string;
  };

  const setJwtToLocalStore = (jwt: string) => {
    localStorage.setItem('jwt', jwt);
  };

  const login = async () => {
    try {
      const data = await signIn(loginForm.value);
      user.value = data;
      if (rememberMe.value) {
        setLoginFormToLocalStore({ ...loginForm.value, password: '' });
      }

      console.log('data', data);
      setJwtToLocalStore(data.jwt);
      await router.push({ name: 'homeView' });
    } catch (error) {
      console.log('error', error);
    }
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
