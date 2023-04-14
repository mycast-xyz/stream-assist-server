import { CommunicationChannel } from './DonationManager';
import { DonationPool } from './DonationPool';
import { DonationPoolItem } from './DonationPoolItem';

export class DonationMap {
  readonly #map = new Map<CommunicationChannel, DonationPool>();

  add(channel: CommunicationChannel, donation: DonationPoolItem) {
    const pool = this.#getOrCreatePool(channel);
    pool.add(donation);
  }

  remove(channel: CommunicationChannel, donationHash: string) {
    const pool = this.#map.get(channel);
    pool?.remove(donationHash);
  }

  get(channel: CommunicationChannel): DonationPool {
    return this.#getOrCreatePool(channel);
  }

  #getOrCreatePool(channel: CommunicationChannel): DonationPool {
    const found = this.#map.get(channel);
    if (found) {
      return found;
    }

    const pool = new DonationPool();
    this.#map.set(channel, pool);
    return pool;
  }
}
