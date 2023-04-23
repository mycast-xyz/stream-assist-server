export interface NetworkModel {
  onLogin(param: LoginParam);
}

export type LoginParam = { type: 'channel' | 'user'; privateKey: string };

export type OnLoginCallback = (param: LoginParam) => void;
