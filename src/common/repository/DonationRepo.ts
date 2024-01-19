import { Entry, Repo } from './Repo';

export class DonationRepo extends Repo<DonationEntry> {}

export type DonationEntry = {
  hash: string;
  recipientUserKey: string;
  senderUserKey: string;
  donationPrint: boolean;
  donationUserName: string;
  donationType: string;
  createdAt: number;
  updatedAt: number;
} & Entry;
