import { reactive } from 'vue';

const state = reactive({
  user: null
});

export function useUserStore() {
  return {
    state,
    setUser(user: any) {
      state.user = user;
    },
    clearUser() {
      state.user = null;
    }
  };
}
