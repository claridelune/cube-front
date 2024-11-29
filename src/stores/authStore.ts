const authStore = defineStore("auth", {
  state: () => ({
    token: "",
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    setToken(value: string) {
      this.token = value;
    },
  },
  persist: true,
});

export default authStore;
