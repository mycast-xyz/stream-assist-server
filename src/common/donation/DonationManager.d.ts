import { Donation } from './Donation';

export interface CommunicationModel {
  addDonation(param: AddDonationParam);
  removeDonation(param: RemoveDonationParam);
}

export interface CommunicationUser {}

export interface CommunicationChannel {}

type AddDonationParam = {
  user: CommunicationUser;
  channel: CommunicationChannel;
  donation: Donation;
};

type RemoveDonationParam = {
  channel: CommunicationChannel;
  donationHash: string;
};
