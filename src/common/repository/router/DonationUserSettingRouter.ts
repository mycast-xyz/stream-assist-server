import { Request, Response } from 'express';

import { BaseRouter } from './BaseRouter';
import { DonationSetting } from '../models/DonationSetting';

export class DonationUserSetting extends BaseRouter {
  private mUserDonatiopnSetting: DonationSetting;

  // 도네이션 사용자 체크를 위한 일부 값 존재 여부 확인이 안됨
  // DB 편입시 해당 부분에 대한 추가 필요

  public constructor() {
    super();
    this.mUserDonatiopnSetting = new DonationSetting();

    // 도네이션 사용자 비디오 사용 데이터 불러오기
    this.getRouter().get('/:userKey/video/data/use', (req, res) => {
      this.onUserVideoUse(req, res);
    });

    // 도네이션 사용자 비디오 세팅 데이터 불러오기
    this.getRouter().get('/:userKey/video/data/all', (req, res) => {
      this.onUserVideo(req, res);
    });

    // 도네이션 사용자 비디오 세팅 데이터 업데이트 - 사용여부
    this.getRouter().post('/:userKey/video/set/use', (req, res) => {
      this.onPostUserVideoUseSet(req, res);
    });
    // 도네이션 사용자 비디오 세팅 데이터 업데이트 - 시간설정
    this.getRouter().post('/:userKey/video/set/limit', (req, res) => {
      this.onPostUserVideoLimitSet(req, res);
    });
  }

  // 도네이션 사용자 비디오 사용 데이터 불러오기
  private onUserVideoUse(req: Request<any>, res: Response<any>): void {
    const { userKey } = req.params;
    this.mUserDonatiopnSetting
      .getUserVideoUse(userKey)
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

  // 도네이션 사용자 비디오 세팅 데이터 불러오기
  private onUserVideo(req: Request<any>, res: Response<any>): void {
    const { userKey } = req.params;
    this.mUserDonatiopnSetting
      .getUserVideoSetting(userKey)
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

  // 도네이션 사용자 비디오 세팅 데이터 업데이트
  private onPostUserVideoUseSet(req: Request<any>, res: Response<any>): void {
    const { userKey } = req.params;
    const { donationUse } = req.body;

    console.log(donationUse);

    this.mUserDonatiopnSetting
      .setUserVideoDoiationUse(userKey, donationUse)
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
  // 도네이션 사용자 비디오 세팅 데이터 업데이트
  private onPostUserVideoLimitSet(req: Request<any>, res: Response<any>): void {
    const { userKey } = req.params;
    const { videoLimit } = req.body;
    this.mUserDonatiopnSetting
      .setUserVideoLimit(userKey, videoLimit)
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
