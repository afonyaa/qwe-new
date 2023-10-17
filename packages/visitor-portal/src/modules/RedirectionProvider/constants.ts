export const COOKIE_DOMAIN =
  import.meta.env.MODE === import.meta.env.VITE_COOKIE_DEV_DOMAIN;

export const SECURE_FLAG =
  import.meta.env.mode === 'development' ? '' : 'Secure';
