import { Request, Response } from 'express';

import { BaseRouter } from './BaseRouter';
import { VideoSearchManager } from '../models/VideoSearchManager';

export class VideoSearchRouter extends BaseRouter {
  private mvideoDb: VideoSearchManager;

  // 도네이션 사용자 체크를 위한 일부 값 존재 여부 확인이 안됨
  // DB 편입시 해당 부분에 대한 추가 필요

  public constructor() {
    super();
    this.mvideoDb = new VideoSearchManager();

    // 도네이션 사용자 비디오 사용 데이터 불러오기
    this.getRouter().get('/search/:videoUrl', (req, res) => {
      this.onVideoSearch(req, res);
    });
  }

  // 도네이션 사용자 비디오 사용 데이터 불러오기
  private onVideoSearch(req: Request<any>, res: Response<any>): void {
    const { videoUrl } = req.params;
    this.mvideoDb
      .getVideoSearch(videoUrl)
      .then((videoset) => {
        if (!videoset) {
          res.send();
          return;
        } else {
          res.send(videoset);
        }
      })
      .catch(() => {
        res.send();
      });
  }
}
