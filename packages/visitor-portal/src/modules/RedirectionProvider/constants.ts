export const COOKIE_DOMAIN = import.meta.env.VITE_COOKIE_DOMAIN;

export const SECURE_FLAG =
  import.meta.env.MODE === 'development' ? '' : 'Secure';
