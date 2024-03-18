import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/useAuthStore';
import { signIn } from '../api/auth-api';
import Swal from 'sweetalert2';

const useAuth = () => {
  const authStore = useAuthStore();
  const { user, loginForm } = storeToRefs(authStore);

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

      authStore.resetLoginForm();
      setJwtToLocalStore(data.jwt);
    } catch (error) {
      console.log('error', error);
      Swal.fire({
        title: 'Error interno en el servidor',
        text: 'Invalid credentials',
        icon: 'error',
        confirmButtonText: 'Volver',
      })
    }
  };

  const logout = () => {
    authStore.resetUser();
    localStorage.removeItem('jwt');
  };

  return {
    // state
    user,
    loginForm,

    // actions
    login,
    checkUserJwt: authStore.checkUserJwt,
    getJwtFromLocalStore,
    logout,
  };
};

export default useAuth;
