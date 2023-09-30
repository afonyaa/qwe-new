export enum AuthStateAction {
  SigningIn = 'SigningIn',
  SigningUp = 'SigningUp',
}

export type AuthStateSwitcher = () => void;
