export interface SocketModel {
  onLogin(callback: OnLoginCallback);
}

export type LoginParam = { type: 'channel' | 'user'; privateKey: string };

export type OnLoginCallback = (param: LoginParam) => void;
