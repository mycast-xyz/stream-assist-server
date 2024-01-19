import { Entry, Repo } from './Repo';

export class DonationRepo extends Repo<DonationEntry> {}

export type DonationEntry = {
  recipientUserKey: string;
  senderUserKey: string;
  donationPrint: boolean;
  donationUserName: string;
  donationType: string;
  createdAt: number;
  updatedAt: number;
} & Entry;
