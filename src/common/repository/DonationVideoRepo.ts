import { Entry, Repo } from './Repo';

export class DonationVideoRepo extends Repo<DonationVideoEntry> {
  // 클라이언트 쪽에서 받은 영상 도네이션 값 처리
  addVideoSendData(data: DonationVideoEntry) {
    // 비디오 repo쪽 처리
    // 예시
    const donationVideoData: DonationVideoEntry = {
      donationHash: 0, // DonationEntry.Hash
      videoType: 'youtube',
      videoUrl: '비디오주소',
      videoLimit: 100, //비디오 길이
      videoId: '비디오값', // 유튜브 - watch?v="TZpAjHv03Nk"
      videoTitle: '비디오제목',
      videoStart: 0, // 비디오 시작 지점
      videoDuration: 100, // 비디오 총 길이
    };
  }
}

export type DonationVideoEntry = {
  donationHash: number;
  videoType: string;
  videoUrl: string;
  videoLimit: number;
  videoId: string;
  videoTitle: string;
  videoStart: number;
  videoDuration: number;
} & Entry;
