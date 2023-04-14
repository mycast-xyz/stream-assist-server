import { HashGenerator } from '../hash/HashGenerator';
import { Md5HashGenerator } from '../hash/Md5HashGenerator';
import { Donation } from './Donation';
import { CommunicationUser } from './DonationManager';

export class DonationPoolItem {
  readonly #hashGenerator: HashGenerator = new Md5HashGenerator('DonaPI');
  readonly hash: string;
  readonly user: CommunicationUser;
  readonly donation: Donation;
  read: boolean = false;

  constructor(user: CommunicationUser, donation: Donation) {
    this.hash = this.#hashGenerator.generate();
    this.user = user;
    this.donation = donation;
  }
}
