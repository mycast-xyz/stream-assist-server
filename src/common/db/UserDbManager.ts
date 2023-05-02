import { Pool, RowDataPacket, createPool } from 'mysql2/promise';

export class UserDbManager {
  #db: Pool;

  constructor() {
    this.#db = createPool({
      user: 'root',
      password: 'marionette3_1',
      database: 'elha',
      host: 'mycast.xyz',
    });
  }

  async getUsers(): Promise<UserRow[]> {
    const query = `SELECT * FROM user WHERE confirm = 1`;
    try {
      const result = await this.#db.query<RowDataPacket[]>(query);
      console.log(result);
      return [];
    } catch (err) {
      console.error(`DatabaseLoader#getUsers: DB error ${err}`);
      return [];
    }
  }
}

export type UserRow = {
  idx: number;
  hash: string;
  id: string;
  nickname: string;
  icon: string;
  broadcast_class: StreamPlatform;
  broadcast_bgimg: string;
  afreeca_id: string;
  daumpot_id: string;
  twitch_id: string;
  mixer_id: string;
};

export type StreamPlatform =
  | 'local'
  | 'twitch'
  | 'afreeca'
  | 'kakaotv'
  | 'youtube'
  | 'totoro'
  | 'lck';
