import { Config } from '../../../app/config/Config';
import { Pool, RowDataPacket, createPool } from 'mysql2/promise';

export class DonationSetting {
  #db: Pool;

  constructor() {
    this.#db = createPool({
      user: Config.DB_USER,
      password: Config.DB_PASS,
      database: Config.DB_NAME,
    });
  }

  // 사용자 도네이션 비디오 세팅 데이터 불러오기 - 사용여부
  async getUserVideoUse(privKey: string): Promise<RowDataPacket | undefined> {
    const columns = ['video_donation_use'];
    const columnString = columns.join();
    const query = `SELECT ${columnString} FROM user WHERE private_key = ?`;
    const args = [privKey];
    try {
      const result = await this.#db.query<RowDataPacket[]>(query, args);
      console.log(result);
      return result[0][0];
    } catch (err) {
      console.error(`DatabaseLoader#getUsers: DB error ${err}`);
      return undefined;
    }
  }

  // 사용자 도네이션 비디오 세팅 데이터 불러오기 - 비디오 데이터 전체
  async getUserVideoSetting(privKey: string): Promise<any | null> {
    const columns = ['video_donation_use', 'video_limit'];
    const columnString = columns.join();
    const query = `SELECT ${columnString} FROM user WHERE private_key = ?`;
    const args = [privKey];
    try {
      const result = await this.#db.query<RowDataPacket[]>(query, args);
      console.log(result);
      const donationVideoSetting = result[0];
      return donationVideoSetting;
    } catch (err) {
      console.error(`DatabaseLoader#getUsers: DB error ${err}`);
      return undefined;
    }
  }

  // 사용자 도네이션 비디오 세팅 삽입
  // 사용자 값이 없는 경우 처리용
  async setUserVideoDoiationUse(
    privKey: string,
    videoDonationUse: number
  ): Promise<boolean> {
    const query = `UPDATE user SET video_donation_use = ? WHERE private_key = ?`;
    const args = [videoDonationUse, privKey];
    try {
      const result = await this.#db.query(query, args);
      console.log(result);
      return true;
    } catch (err) {
      console.error(`DatabaseLoader#getUsers: DB error ${err}`);
      return false;
    }
  }

  // 사용자 도네이션 비디오 세팅 삽입
  //
  async setUserVideoLimit(
    privKey: string,
    VideoLimit: number
  ): Promise<boolean> {
    const query = `UPDATE user SET video_limit = ? WHERE private_key = ?`;
    const args = [VideoLimit, privKey];
    try {
      const result = await this.#db.query(query, args);
      console.log(result);
      return true;
    } catch (err) {
      console.error(`DatabaseLoader#getUsers: DB error ${err}`);
      return false;
    }
  }
}

// 사용자 비디오 도네이션 값 처리용
export type UserVideoDonationRow = {
  // 도네이션 추가 처리
  video_donation_use: string;
  video_limit: number;
};

export type StreamPlatform =
  | 'local'
  | 'twitch'
  | 'afreeca'
  | 'kakaotv'
  | 'youtube'
  | 'totoro'
  | 'lck';
