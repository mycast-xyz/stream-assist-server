import { Config } from '../../../app/config/Config';
import { google } from 'googleapis';

// 유튜브 처리
const youtube = google.youtube({
  version: 'v3',
  auth: Config.YOUTUBE_API_KEY,
});

export class VideoSearchManager {
  constructor() {}

  // 사용자 도네이션 비디오 세팅 데이터 불러오기
  async getVideoSearch(videoUrl: string): Promise<YoutubeVideoSet | null> {
    const youtubeId: any = videoUrl;
    let youtubeRow: any = {};

    const youtubePart = ['id', 'snippet', 'contentDetails'];
    await youtube.videos
      .list({ part: youtubePart, id: youtubeId })
      .then((res: any) => {
        youtubeRow = res.data.items[0];
      })
      .catch((error) => {
        console.error(error);
      });

    if (youtubeRow) {
      let youtubeData: YoutubeVideoSet = {
        youtubeId: youtubeRow.id,
        youtubeRow: youtubeRow.snippet,
        youtubeDuration: youtubeRow.contentDetails.duration,
      };
      return youtubeData;
    } else {
      return null;
    }
  }
}

export type YoutubeVideoSet = {
  youtubeId: string;
  youtubeRow: string;
  youtubeDuration: string;
};
