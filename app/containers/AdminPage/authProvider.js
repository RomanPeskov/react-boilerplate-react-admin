export default {
  login: ({ token }) => {
    localStorage.setItem('accessToken', token);
    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    return Promise.resolve();
  },

  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('accessToken');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () =>
    localStorage.getItem('accessToken') ? Promise.resolve() : Promise.reject(),

  getPermissions: () => Promise.resolve(),
};
