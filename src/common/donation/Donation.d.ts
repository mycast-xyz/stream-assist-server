export type Donation = TextDonation | YoutubeDonation;

type TypedDonation<T, D> = { type: T; data: D };

type TextData = { text: string };
type YoutubeData = { link: string };

export type TextDonation = TypedDonation<'text', TextData>;
export type YoutubeDonation = TypedDonation<'youtube', YoutubeData>;
