import KiaImage from '@/assets/png/clubLogo/kia.png';
import EaglesImage from '@/assets/png/clubLogo/eglse.png';
import KiwoomImage from '@/assets/png/clubLogo/kiwoom.png';

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
    totalValue: 'infield',
    value: 'oneInfield',
  },
  {
    name: '2루수',
    totalValue: 'infield',
    value: 'twoInfield',
  },
  {
    name: '유격수',
    totalValue: 'infield',
    value: 'shortstopInfield',
  },
  {
    name: '3루수',
    totalValue: 'infield',
    value: 'threeInfield',
  },
  {
    name: '좌익수',
    totalValue: 'outfield',
    value: 'leftOutfield',
  },
  {
    name: '중견수',
    totalValue: 'outfield',
    value: 'middleOutfield',
  },
  {
    name: '우익수',
    totalValue: 'outfield',
    value: 'rightOutfield',
  },
  {
    name: '지명타자',
    totalValue: ['outfield', 'infield'],
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
    name: 'KIA 타이거즈2',
    value: 'kia',
    logo: KiaImage,
  },
  {
    name: '한화 이글스2',
    value: 'eagles',
    logo: EaglesImage,
  },
  {
    name: '키움 히어로즈2',
    value: 'kiwoom',
    logo: KiwoomImage,
  },
];

export const KIA_PLAYER = [
  {
    position: 'pitcher',
    playerList: ['양현종'],
  },
  {},
];

export const KIWOOM_PLAYER = [
  // 완료
  {
    position: 'pitcher',
    playerList: [
      '원종현',
      '김선기',
      '김성민',
      '하영민',
      '주승우',
      '박주성',
      '이강준',
      '김동규',
      '김윤하',
      '박범준',
      '김연주',
      '손현기',
      '로젠버그',
    ],
  },
  {
    position: 'catcher',
    playerList: ['김재현', '김건희', '김동헌'],
  },
  {
    position: 'infielder',
    playerList: [
      '송성문',
      '이원석',
      '오선진',
      '최주환',
      '강진성',
      '김태진',
      '김웅빈',
      '김병휘',
      '서유신',
    ],
  },
  {
    position: 'outfielder',
    playerList: ['이용규', '이형종', '김동엽', '임지열', '박수종', '이주형', '푸이그', '카디네스'],
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
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
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
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이태양',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '주현상',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '한승혁',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박상원',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김범수',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '엄상백',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '이상규',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김기중',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '배동현',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '문승진',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '문동주',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김서현',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '성지훈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '조동욱',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '김도빈',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '정우주',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '권민규',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'pitcher',
      },
      {
        name: '박부성',
        position: '투수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
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
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '최재훈',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '박상언',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '박부성',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '허인서',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'catcher',
      },
      {
        name: '한지윤',
        position: '포수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'catcher',
      },
    ],
  },
  {
    position: 'infield',
    playerList: [
      {
        name: '채은성',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '안치홍',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '이도윤',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '노시환',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '김건',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '권광민',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '문현빈',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '황영묵',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'infielder',
      },

      {
        name: '이승현',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'infielder',
      },
      {
        name: '심우준',
        position: '내야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'infielder',
      },
    ],
  },
  {
    position: 'outfield',
    playerList: [
      {
        name: '플로리얼',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '김태연',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이진영',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이원석',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '임종찬',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '최인호',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이상혁',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '최준서',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'outfielder',
      },
      {
        name: '이민재',
        position: '외야수',
        image: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2025/53123.jpg',
        totalPosition: 'outfielder',
      },
    ],
  },
];
