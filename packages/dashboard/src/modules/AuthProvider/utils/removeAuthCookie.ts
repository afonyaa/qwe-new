export const removeAuthCookie = () => {
  document.cookie = `Authorization=; domain=${
    import.meta.env.VITE_COOKIE_DOMAIN
  }; SameSite=None; Secure`;
};
