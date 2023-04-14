import {
  AddDonationParam,
  CommunicationModel,
  RemoveDonationParam,
} from 'common/donation/DonationManager';
import { DonationMap } from 'common/donation/DonationMap';
import { DonationPoolItem } from 'common/donation/DonationPoolItem';

export class VegaCommunicationModel implements CommunicationModel {
  readonly #donationMap = new DonationMap();

  addDonation(param: AddDonationParam) {
    const { channel, donation, user } = param;
    const item = new DonationPoolItem(user, donation);
    this.#donationMap.add(channel, item);
  }

  removeDonation(param: RemoveDonationParam) {
    const { channel, donationHash } = param;
    this.#donationMap.remove(channel, donationHash);
  }
}
