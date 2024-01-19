export type Donation = TextDonation | YoutubeDonation | VideoDonation;

type TypedDonation<T, D> = {
  key: string;
  recipientKey: string;
  senderKey: string;
  print: boolean;
  userName: string;
  type: T;
  data: D;
};

type TextData = { text: string };
type YoutubeData = { link: string };
type VideoData = {
  type: string;
  url: string;
  limit: number;
  id: string;
  title: string;
  start: number;
  duration: number;
};

export type TextDonation = TypedDonation<'text', TextData>;
export type YoutubeDonation = TypedDonation<'youtube', YoutubeData>;
export type VideoDonation = TypedDonation<'video', VideoData>;
