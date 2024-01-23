import { Entry, Repo } from './Repo';

export class DonationRepo extends Repo<DonationEntry> {
  // 클라이언트 쪽에서 받은 영상 도네이션 값 처리
  addVideoSend(data: VideoSendData) {
    /* 클라이언트 쪽에서 받아오는 도네이션 비디오 값
    let videoSendData: VideoSendData = {
      recipientUserKey: '받는 유저키',
      senderUserKey: '보내는 유저키',
      donationPrint: false,
      donationUserName: '도네이션송출닉네임',
      donationType: 'video',
      videoType: 'youtube',
      videoUrl: '비디오주소',
      videoLimit: 100, //비디오 길이
      videoId: '비디오값', // 유튜브 - watch?v="TZpAjHv03Nk"
      videoTitle: '비디오제목',
      videoStart: 0, // 비디오 시작 지점
      videoDuration: 100, // 비디오 총 길이
    };
    */
    console.log('::SEND - Video Data');
    console.log('videoSendData:', data);

    // 리스트에 추가
    // 에시
    const donationListEntry: DonationEntry = {
      recipientUserKey: data.recipientUserKey,
      senderUserKey: data.senderUserKey,
      donationPrint: data.donationPrint,
      donationUserName: data.donationUserName,
      donationType: data.donationType,
      createdAt: 0,
      updatedAt: 0,
    };
  }

  // 도네이션 리스트 보여주기용 - 시작
  // 해당 리스트가 필요 없으신 경우 제외
  getVideoList(privateKey: string) {
    console.log('::GET - Video List');

    // 이전 구조문 처리방식 표기
    /**
      const donationRow: any = await DonListVo.findAll({
        where: { recipientUserKey: privateKey,}, <- 사용자 고유 정보 값으로 찾습니다.
        order: [['donation_key', 'DESC']],
        limit: 20,
      });
      for(donationRow){
        const videoRow: any = await VideoDonListVo.findAll({
          where: { donation_key: donationRow.donation_key,}, <- 도네이션 리스트 고유 값으로 찾습니다.
          order: [['donation_key', 'DESC']],
          limit: 20,
        });
        donationRow.videodata = videoRow;
      }
    **/
    //
    // 1. "donation_list"테이블에 있는 row 중 "privateKey"와 같은 값을 뽑아내옴
    // 2. "donation_video"테이블에 있는 "donation_key"값을 가지고 비디오 정보를 가지고 옴
    // 3. "donation_list"의 row에 video로 "donation_video"의 row 데이터를 기입
    // 3. 해당 리스트 데이터를 Json으로 send
    //
  }
  // 도네이션 마지막 값 확인
  getVideoLastKey(privateKey: string) {
    console.log('::GET - Video Last Key');

    // 이전 구조문 처리방식 표기
    /** 
     const donationRow: any = await DonListVo.findOne({
      where: { recipientUserKey: privateKey,},
      attributes: ['donation_key'], <- 도네이션 키 만 가지고 옵니다.
      order: [['donation_key', 'DESC']],
    });
     ***/
    //
    // 1. "donation_list"테이블에 있는 row 중 "privateKey"와 같은 값을 뽑아내옴
    // 2. 도네이션 마지막 key(idx)를 가지고 옴
    // 3. 해당 리스트 데이터를 Json으로 send
    //
    // 도네이션 리스트의 마지막 체킹 용으로 썻습니다.
    // 해당 값이 클라이언트 마지막 값과 틀린 경우 getVideoList 함수를 클라이언트가 호출 합니다.
  }
  // 도네이션 리스트 보여주기용 - 끝
  //

  // 도네이션 송출 처리 - 시작
  // 도네이션 리스트 값 확인
  getDonationPrint(streamKey: string) {
    console.log('::GET - Donation Print');
    // 이전 구조문 처리방식 표기
    /**  
      const userInfo: any = await UserVo.findOne({ <- 유저 테이블에서 스트림키 정보를 찾습니다.
        where: { streamKey: streamKey },
        attributes: ['privateKey','video_donation_use'],
      });
      
      await VideoSettingVo.findOne({
        where: { user_key: userInfo.dataValues.user_key },
        attributes: ['video_use'],
      }).then((res: any) => {
        let resData = res.dataValues;
        toggleArr.video_use = resData.video_use;
      });

      const donationRow: any = await DonListVo.findOne({ <- 프라이빗 키로 도네이션 리스트 정보에 접근합니다.
        where: { recipientUserKey: privateKey, donationPrint: 0},
        attributes: ['donation_key'], <- 도네이션 키 만 가지고 옵니다.
        order: [['donation_key', 'ASC']],
      });
     ***/
    //
    // 1. 사용자 스트림키를 가지고 와서 스트림키가 일치한지 체크 합니다.
    // 1-1. 불일치시 false 배출
    //
    // 2. 사용자 정보가 일치시 도네이션 세팅 값을 참조 합니다.
    // 2-1. 사용자가 도네이션 설정이 없는 경우 false 배출
    //
    // 3. "donation_list" 테이블에 있는 "donationPrint"의 값이 0(flase) /
    //    "recipientUserKey"의 값이 privateKey인 ASC(오름차순) ROW 1개를 가지고 옵니다.
    // 3-1. 해당 데이터가 없으면 false 배출
    // 3-2. 해당 데이터가 있으면 데이터를 보냅니다.
  }
  // 도네이션 비디오 데이터 송출
  getDonationVideoPrint(streamKey: string, donationPremiumKey: string) {
    console.log('::GET - Donation Video Print');

    // 이전 구조문 처리방식 표기
    /**  
      const userInfo: any = await UserVo.findOne({ <- 유저 테이블에서 스트림키 정보를 찾습니다.
        where: { streamKey: streamKey },
        attributes: ['privateKey','video_donation_use'],
      });

      const videoRow: any = await VideoDonListVo.findOne({ <- 프라이빗 키로 도네이션 리스트 정보에 접근합니다.
        where: { donation_key: donationPremiumKey,},
        attributes: ['donation_key'], <- 도네이션 키 만 가지고 옵니다.
        order: [['donation_key', 'ASC']],
        limit: 1,
      });
     ***/
    //
    // 1. 사용자 스트림키를 가지고 와서 스트림키가 일치한지 체크 합니다.
    // 1-1. 불일치시 false 배출
    //
    // 2. "donation_video" 테이블에 있는 "donation_key"값이 "donationPremiumKey"인 row를 가지고 옵니다.
    // 2-1. 불일치시 false 배출
    // 3. 해당 데이터가 있으면 데이터를 보냅니다.
  }
  // 도네이션 송출 처리 - 끝
}

export type DonationEntry = {
  recipientUserKey: string;
  senderUserKey: string;
  donationPrint: boolean;
  donationUserName: string;
  donationType: string;
  createdAt: number;
  updatedAt: number;
} & Entry;

// 클라이언트 쪽에서 받아오는 도네이션 비디오 값
export type VideoSendData = {
  // 도네이션 공통 처리
  recipientUserKey: string;
  senderUserKey: string;
  donationPrint: boolean;
  donationUserName: string;
  donationType: string;
  // 비디오 도네이션 단독 처리
  videoType: string;
  videoUrl: string;
  videoLimit: number;
  videoId: string;
  videoTitle: string;
  videoStart: number;
  videoDuration: number;
};
