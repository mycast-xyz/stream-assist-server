import { Entry, Repo } from './Repo';

export class DonationVideoRepo extends Repo<DonationVideoEntry> {}

export type DonationVideoEntry = {
  donationHash: number;
  videoType: string;
  videoUrl: string;
  videoLimit: number;
  videoId: string;
  videoTitle: string;
  videoStart: number;
  videoDuration: number;
} & Entry;
