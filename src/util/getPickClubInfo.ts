import KiaImage from '@/assets/png/clubLogo/kia.png';
import KiaBackImage from '@/assets/png/clubBackLogo/tigersLogo.png';

import EaglesImage from '@/assets/png/clubLogo/eglse.png';
import EaglesBackImage from '@/assets/png/clubBackLogo/eaglesLogo.png';

import KiwoomImage from '@/assets/png/clubLogo/kiwoom.png';
import KiwoomBackImage from '@/assets/png/clubBackLogo/kiwoomLogo.png';

import BearsImage from '@/assets/png/clubLogo/bears.png';
import BearsBackImage from '@/assets/png/clubBackLogo/doosanLogo.png';

import SsgImage from '@/assets/png/clubLogo/landers.png';
import SsgBackImage from '@/assets/png/clubBackLogo/ssgLogo.png';

import LionsImage from '@/assets/png/clubLogo/lions.png';
import LionsBackImage from '@/assets/png/clubBackLogo/lionsLogo.png';

import colors from '@/styles/colors';

const pickClubInfo = (pick: string) => {
  if (pick === 'kia') {
    return {
      value: '기아 타이거즈',
      logo: KiaImage,
      color: colors.kiaColor,
      backLogo: KiaBackImage,
    };
  }
  if (pick === 'eagles') {
    return {
      value: '한화 이글스',
      logo: EaglesImage,
      color: colors.hanwhaColor,
      backLogo: EaglesBackImage,
    };
  }
  if (pick === 'kiwoom') {
    return {
      value: '키움 히어로즈',
      logo: KiwoomImage,
      color: colors.kiwoomColor,
      backLogo: KiwoomBackImage,
    };
  }
  if (pick === 'lions') {
    return {
      value: '삼성 라이온즈',
      logo: LionsImage,
      color: colors.lionsColor,
      backLogo: LionsBackImage,
    };
  }
  if (pick === 'ssg') {
    return {
      value: 'SSG 랜더스',
      logo: SsgImage,
      color: colors.ssgColor,
      backLogo: SsgBackImage,
    };
  }
  if (pick === 'doosan') {
    return {
      value: '두산 베어스',
      logo: BearsImage,
      color: colors.bearsColor,
      backLogo: BearsBackImage,
    };
  }
  return null;
};

export default pickClubInfo;
