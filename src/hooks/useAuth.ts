import { ref } from 'vue';
import { login, logout } from '@/services/authService';

export function useAuth() {
  const user = ref(null);

  const signIn = async (username: string, password: string) => {
    user.value = await login(username, password);
  };

  const signOut = async () => {
    await logout();
    user.value = null;
  };

  return {
    user,
    signIn,
    signOut
  };
}
