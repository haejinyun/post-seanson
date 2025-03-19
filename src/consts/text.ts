import KiaImage from '@/assets/png/clubLogo/kia.png';
import EaglesImage from '@/assets/png/clubLogo/eglse.png';
import KiwoomImage from '@/assets/png/clubLogo/kiwoom.png';
import BearsImage from '@/assets/png/clubLogo/bears.png';
import SsgImage from '@/assets/png/clubLogo/landers.png';
import LionsImage from '@/assets/png/clubLogo/lions.png';

export const POSITION_LIST = [
  {
    name: '선발투수',
    totalValue: 'pitcher',
    value: 'pitcher',
  },
  {
    name: '포수',
    totalValue: 'catcher',
    value: 'catcher',
  },
  {
    name: '1루수',
    totalValue: 'infielder',
    value: 'oneInfield',
  },
  {
    name: '2루수',
    totalValue: 'infielder',
    value: 'twoInfield',
  },
  {
    name: '유격수',
    totalValue: 'infielder',
    value: 'shortstopInfield',
  },
  {
    name: '3루수',
    totalValue: 'infielder',
    value: 'threeInfield',
  },
  {
    name: '좌익수',
    totalValue: 'outfielder',
    value: 'leftOutfield',
  },
  {
    name: '중견수',
    totalValue: 'outfielder',
    value: 'middleOutfield',
  },
  {
    name: '우익수',
    totalValue: 'outfielder',
    value: 'rightOutfield',
  },
  {
    name: '지명타자',
    totalValue: ['outfielder', 'infielder'],
    value: 'dh',
  },
];

export const CLUBS = [
  {
    name: 'KIA 타이거즈',
    value: 'kia',
    logo: KiaImage,
  },
  {
    name: '한화 이글스',
    value: 'eagles',
    logo: EaglesImage,
  },
  {
    name: '키움 히어로즈',
    value: 'kiwoom',
    logo: KiwoomImage,
  },
  {
    name: '삼성 라이온즈',
    value: 'lions',
    logo: LionsImage,
  },
  {
    name: 'SSG 랜더스',
    value: 'ssg',
    logo: SsgImage,
  },
  {
    name: '두산 베어스',
    value: 'doosan',
    logo: BearsImage,
  },
];

export const KIA_PLAYER = [
  {
    position: 'pitcher',
    playerList: [
      {
        name: '양현종',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/77637.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김대유',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/60337.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이준영',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65665.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '임기영',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/62754.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '조상우',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/63342.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '전상현',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66609.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '유승철',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67640.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김기훈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69620.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '정해영',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50662.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김도현',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69745.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '최지민',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52639.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '황동하',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52641.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '윤영철',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53613.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '곽도규',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53609.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이의리',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51648.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김태형',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55610.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '네 일',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54640.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '올 러',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55633.jpg',
        totalPosition: 'pitcher',
      },
    ],
  },
  {
    position: 'catcher',
    playerList: [
      {
        name: '김태군',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/78122.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '한준수',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68646.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '한승택',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/63722.jpg',
        totalPosition: 'catcher',
      },
    ],
  },
  {
    position: 'infielder',

    playerList: [
      {
        name: '김선빈',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/78603.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '서건창',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/78168.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '박찬호',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64646.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '김규성',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66614.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '변우혁',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69727.jpgvv',
        totalPosition: 'infielder',
      },

      {
        name: '박 민',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50657.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '홍종표',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50600.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '김도영',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52605.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '윤도현',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52667.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '위즈덤',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55645.jpg',
        totalPosition: 'infielder',
      },
    ],
  },
  {
    position: 'outfielder',
    playerList: [
      {
        name: '나성범',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/62947.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '최형우',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/72443.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이창진',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64560.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이우성',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/63260.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '최원준',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66606.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '박정우',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67609.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '김석환',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67610.jpg',
        totalPosition: 'outfielder',
      },
    ],
  },
];

export const KIWOOM_PLAYER = [
  {
    position: 'pitcher',
    playerList: [
      {
        name: '원종현',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76118.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김선기',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66018.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김성민',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67828.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '하영민',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64350.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '주승우',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52330.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박주성',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69328.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이강준',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50036.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김동규',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53164.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김윤하',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54319.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박범준',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54304.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김연주',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54368.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '손현기',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54363.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '로젠버그',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55322.jpg',
        totalPosition: 'pitcher',
      },
    ],
  },
  {
    position: 'catcher',
    playerList: [
      {
        name: '김재현',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/62332.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '김건희',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53312.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '김동헌',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53344.jpg',
        totalPosition: 'catcher',
      },
    ],
  },
  {
    position: 'infielder',
    playerList: [
      {
        name: '송성문',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65357.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '이원석',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/75566.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '오선진',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/78756.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '최주환',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76267.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '강진성',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/62925.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '김태진',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64984.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '김웅빈',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65898.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '김병휘',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50304.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '서유신',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53309.jpg',
        totalPosition: 'infielder',
      },
    ],
  },
  {
    position: 'outfielder',
    playerList: [
      {
        name: '이용규',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/74163.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이형종',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/78135.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '김동엽',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66838.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '임지열',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64340.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '박수종',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52305.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이주형',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50167.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '푸이그',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52366.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '카디네스',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54444.jpg',
        totalPosition: 'outfielder',
      },
    ],
  },
];

export const EAGLES_PLAYER = [
  // 완료
  {
    position: 'pitcher',
    playerList: [
      {
        name: '류현진',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76715.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '와이스',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '폰세',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55730.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이태양',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/60768.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '주현상',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65707.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '한승혁',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/61666.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박상원',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67703.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김범수',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65769.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '엄상백',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65056.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이상규',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65117.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김기중',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51715.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '배동현',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51761.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '문승진',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51705.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '문동주',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52701.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김서현',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53754.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '성지훈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53711.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '조동욱',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54768.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김도빈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54705.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '정우주',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55743.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '권민규',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55764.jpg',
        totalPosition: 'pitcher',
      },
    ],
  },
  {
    position: 'catcher',
    playerList: [
      {
        name: '이재원',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76812.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '최재훈',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/78288.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '박상언',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66707.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '박부성',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55711.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '허인서',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52764.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '한지윤',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55767.jpg',
        totalPosition: 'catcher',
      },
    ],
  },
  {
    position: 'infielder',
    playerList: [
      {
        name: '채은성',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/79192.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '안치홍',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/79608.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '이도윤',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65703.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '노시환',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69737.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '김건',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69702.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '권광민',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52769.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '문현빈',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53764.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '황영묵',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54795.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '이승현',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55712.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '심우준',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64006.jpg',
        totalPosition: 'infielder',
      },
    ],
  },
  {
    position: 'outfielder',
    playerList: [
      {
        name: '플로리얼',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55734.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '김태연',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66704.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이진영',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66657.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이원석',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68700.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '임종찬',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50704.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '최인호',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50707.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이상혁',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52704.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '최준서',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54710.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이민재',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55710.jpg',
        totalPosition: 'outfielder',
      },
    ],
  },
];

export const SSG_PLAYER = [
  {
    position: 'pitcher',
    playerList: [
      {
        name: '김건우',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51867.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김광현',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/77829.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김민',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68043.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '노경은',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/73211.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '앤더슨',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54833.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '문승원',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/62869.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '화이트',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55855.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박성빈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54807.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박시후',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50812.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박종훈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/60841.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '서진용',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/61895.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '송영진',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53898.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '신지환',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55860.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이로운',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53892.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '전영준',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52809.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '정동윤',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66858.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '조병현',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51897.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '천범석',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55890.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '최현석',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54803.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '한두솔',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68092.jpg',
        totalPosition: 'pitcher',
      },
    ],
  },
  {
    position: 'catcher',
    playerList: [
      {
        name: '신범수',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66662.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '이율예',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55832.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '조형우',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51865.jpg',
        totalPosition: 'catcher',
      },
    ],
  },
  {
    position: 'infielder',
    playerList: [
      {
        name: '고명준',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51868.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '김성민',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50848.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '박성한',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67893.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '박지환',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54805.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '석정우',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52804.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '안상현',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66864.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '정준재',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54812.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '최준우',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68868.jpg',
        totalPosition: 'infielder',
      },
    ],
  },
  {
    position: 'outfielder',
    playerList: [
      {
        name: '에레디아',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53827.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이정범',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67807.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '최상민',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68805.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '최지훈',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50854.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '하재훈',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69813.jpg',
        totalPosition: 'outfielder',
      },
    ],
  },
];

export const LIONS_PLAYER = [
  {
    position: 'pitcher',
    playerList: [
      {
        name: '오승환',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/75421.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '송은범',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/73801.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '임창민',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/78352.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이상민',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/63960.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김태훈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/62360.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이승현',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/60146.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '레예스',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54443.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '후라도',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53375.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '최원태',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65320.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김무신',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68403.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이승현좌',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51454.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이승민',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50464.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '최하늘',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68501.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이재희',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51460.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김대호',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54401.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '황동재',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50441.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '육선엽',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54404.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '배찬승',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55455.jpg',
        totalPosition: 'pitcher',
      },
    ],
  },
  {
    position: 'catcher',
    playerList: [
      {
        name: '김재성',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65132.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '이병헌',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69428.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '김도환',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69442.jpg',
        totalPosition: 'catcher',
      },
    ],
  },
  {
    position: 'infielder',
    playerList: [
      {
        name: '박병호',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/75125.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '전병우',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65586.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '류지혁',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/62234.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '이재현',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52415.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '김영웅',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52430.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '심재훈',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55438.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '차승준',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55435.jpg',
        totalPosition: 'infielder',
      },
    ],
  },
  {
    position: 'outfielder',
    playerList: [
      {
        name: '김헌곤',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/61404.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이성규',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66409.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '윤정빈',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68463.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '김지찬',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50458.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '김성윤',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67449.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '박승규',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69418.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '함수호',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55440.jpg',
        totalPosition: 'outfielder',
      },
    ],
  },
];

export const DOOSAN_PLAYER = [
  {
    position: 'pitcher',
    playerList: [
      {
        name: '곽빈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68220.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '권휘',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50203.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김명신',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67246.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김무빈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54215.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김민규',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68200.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김유성',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53262.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김택연',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54263.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김호준',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68269.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박정수',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/65639.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박지호',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54213.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박치국',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67266.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '윤태호',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52202.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이병헌',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52204.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이영하',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66291.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '잭로그',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55239.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '최승용',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51264.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '최원준',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67263.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '최종인',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50206.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '최준호',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53259.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '콜어빈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55257.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '홍건희',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/61643.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '홍민규',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55267.jpg',
        totalPosition: 'pitcher',
      },
    ],
  },
  {
    position: 'catcher',
    playerList: [
      {
        name: '김기연',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66112.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '류현준',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54219.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '박민준',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53204.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '양의지',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/76232.jpg',
        totalPosition: 'catcher',
      },
    ],
  },
  {
    position: 'infielder',
    playerList: [
      {
        name: '강승호',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/63123.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '김동준',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/52267.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '박준순',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55252.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '박지훈',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50204.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '양석환',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/64153.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '여동건',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54205.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '오명진',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/50208.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '이유찬',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/67207.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '임종성',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54236.jpg',
        totalPosition: 'infielder',
      },
    ],
  },
  {
    position: 'outfielder',
    playerList: [
      {
        name: '강현구',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/51269.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '김대한',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/69238.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '김민석',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53554.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '김재환',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/78224.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '전다민',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/54214.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '정수빈',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/79231.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '조수행',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/66209.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '추재현',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/68362.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '케이브',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/55208.jpg',
        totalPosition: 'outfielder',
      },
    ],
  },
];
