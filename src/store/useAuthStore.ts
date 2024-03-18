import { ref } from 'vue';
import { defineStore } from 'pinia';
import { AuthUser } from '../interfaces/auth.interface';
import { validateJwt } from '../api/auth-api';

const initialData = {
  user: {
    id: 0,
    email: '',
    roleId: 0,
    jwt: '',
  },
  loginForm: {
    email: '',
    password: '',
  },
  rememberMe: false,
};

export const useAuthStore = defineStore('AuthStore', () => {
  const rememberMe = ref(initialData.rememberMe);
  const loginForm = ref(structuredClone(initialData.loginForm));

  const user = ref<AuthUser>(structuredClone(initialData.user));

  const checkUserJwt = async () => {
    try {
      const authUser = await validateJwt();
      user.value = authUser;
      localStorage.setItem('jwt', authUser.jwt);
      return true;
    } catch (error) {
      localStorage.removeItem('jwt');
      localStorage.removeItem('tenant');
      localStorage.removeItem('apiKey');
      return false;
    }
  };

  const resetUser = () => {
    user.value = structuredClone(initialData.user);
  };

  return {
    // state
    rememberMe,
    loginForm,
    user,

    // getters

    // actions
    checkUserJwt,
    resetUser,
  };
});
