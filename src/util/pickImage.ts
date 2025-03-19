export type WeatherImage =
  | 'sun'
  | 'semiCloud'
  | 'cloud'
  | 'rain'
  | 'rainSnow'
  | 'snow'
  | 'semiRain'
  | 'flashRainSnow'
  | 'flashSnow';

export const pickImage = (rainData: string, skyData: string): WeatherImage => {
  if (rainData === '0') {
    // rainData가 0이면 skyData에 따라 이미지 결정
    switch (skyData) {
      case '1':
        return 'sun';
      case '3':
        return 'semiCloud';
      case '4':
        return 'cloud';
      default:
        return 'sun'; // 기본값
    }
  } else {
    // rainData가 0이 아니면 rainData에 따라 이미지 결정
    switch (rainData) {
      case '1':
        return 'rain';
      case '2':
        return 'rainSnow';
      case '3':
        return 'snow';
      case '5':
        return 'semiRain';
      case '6':
        return 'flashRainSnow';
      case '7':
        return 'flashSnow';
      default:
        return 'sun'; // 기본값
    }
  }
};
