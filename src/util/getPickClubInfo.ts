import KiaImage from '@/assets/png/clubLogo/kia.png';
import EaglesImage from '@/assets/png/clubLogo/eglse.png';
import KiwoomImage from '@/assets/png/clubLogo/kiwoom.png';
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
  return null;
};

export default pickClubInfo;
