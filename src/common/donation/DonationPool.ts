import { DonationPoolItem } from './DonationPoolItem';

export class DonationPool {
  #donationPoolItems: DonationPoolItem[] = [];

  add(item: DonationPoolItem) {
    this.#donationPoolItems.push(item);
  }

  remove(hash: string) {
    this.#donationPoolItems = this.#donationPoolItems.filter(
      (item) => item.hash === hash
    );
  }
}
