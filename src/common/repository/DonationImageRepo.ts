import { Entry, Repo } from './Repo';

export class DonationImageRepo extends Repo<DonationImageEntry> {}

export type DonationImageEntry = {
  userHash: string;
  imageUrl: string;
} & Entry;
