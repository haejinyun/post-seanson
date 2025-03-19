import KiaImage from '@/assets/png/clubLogo/kia.png';
import EaglesImage from '@/assets/png/clubLogo/eglse.png';
import KiwoomImage from '@/assets/png/clubLogo/kiwoom.png';
import BearsImage from '@/assets/png/clubLogo/bears.png';
import SsgImage from '@/assets/png/clubLogo/landers.png';
import LionsImage from '@/assets/png/clubLogo/lions.png';

import colors from '@/styles/colors';

const pickClubInfo = (pick: string) => {
  if (pick === 'kia') {
    return {
      value: '기아 타이거즈',
      logo: KiaImage,
      color: colors.kiaColor,
    };
  }
  if (pick === 'eagles') {
    return {
      value: '한화 이글스',
      logo: EaglesImage,
      color: colors.hanwhaColor,
    };
  }
  if (pick === 'kiwoom') {
    return {
      value: '키움 히어로즈',
      logo: KiwoomImage,
      color: colors.kiwoomColor,
    };
  }
  if (pick === 'lions') {
    return {
      value: '삼성 라이온즈',
      logo: LionsImage,
      color: colors.lionsColor,
    };
  }
  if (pick === 'ssg') {
    return {
      value: 'SSG 랜더스',
      logo: SsgImage,
      color: colors.ssgColor,
    };
  }
  if (pick === 'doosan') {
    return {
      value: '두산 베어스',
      logo: BearsImage,
      color: colors.bearsColor,
    };
  }
  return null;
};

export default pickClubInfo;
