import { NavigationGuard } from 'vue-router';
import { useAuthStore } from '../../store/useAuthStore';

const isAuthenticatedGuard: NavigationGuard = async (to, from, next) => {
  const authStore = useAuthStore();

  const isAuthenticated = await authStore.checkUserJwt();

  if (!isAuthenticated) next({ name: 'login' });
  else next();
};

export default isAuthenticatedGuard;
