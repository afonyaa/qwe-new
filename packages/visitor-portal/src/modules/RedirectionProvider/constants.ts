export const COOKIE_DOMAIN =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_COOKIE_DEV_DOMAIN
    : import.meta.env.VITE_COOKIE_PROD_DOMAIN;
