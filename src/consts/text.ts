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
