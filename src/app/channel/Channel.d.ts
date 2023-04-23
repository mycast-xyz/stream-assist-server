import { DonationPool } from 'common/donation/DonationPool';
import { Session } from 'common/session/Session';

export type Channel = Session & {
  readonly donations: DonationPool;
};
