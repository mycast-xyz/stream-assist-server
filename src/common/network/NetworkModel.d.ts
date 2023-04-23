export interface NetworkModel {
  onLogin(param: LoginParam);
  onDonationRegister(param: DonationRegisterParam);
}

export type LoginParam = { type: 'channel' | 'user'; privateKey: string };

export type DonationRegisterParam = { from: string; to: string; src: {} };
