export interface NetworkModel {
  onLogin(param: LoginParam);
  onDonationRegister(param: DonationRegisterParam);
}

export type LoginParam = { type: 'channel' | 'user'; privateKey: string };

export type DonationRegisterParam = {
  from: string;
  to: string;
  src: DonationSource;
};

export type DonationSource =
  | TypedDonationSource<'text', TextData>
  | TypedDonationSource<'youtube', YoutubeData>;

type TypedDonationSource<T, D> = { type: T; data: D };
type TextData = { text: string };
type YoutubeData = { link: string };
