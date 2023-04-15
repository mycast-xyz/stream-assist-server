import { LoginParam, OnLoginCallback, SocketModel } from './SocketModel';

export abstract class SocketIoModelTemplate implements SocketModel {
  #loginCallback: OnLoginCallback | null = null;

  onLogin(callback: OnLoginCallback) {
    this.#loginCallback = callback;
  }

  notifyLogin(param: LoginParam) {
    this.#loginCallback?.(param);
  }
}
