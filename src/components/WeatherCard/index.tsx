'use client';

import { fetchWeather } from '@/api/queryFunction/weather';
import { useQuery } from '@tanstack/react-query';
import sunImage from '@/assets/png/weatherPng/sun.png';
import cloudImage from '@/assets/png/weatherPng/cloud.png';
import semiCloudImage from '@/assets/png/weatherPng/semiCloud.png';
import rainImage from '@/assets/png/weatherPng/rain.png';
import Image from 'next/image';
import { pickImage } from '@/util/pickImage';
import getDateByEng from '@/util/getDateByEng';
import * as S from './WeatherCard.css';

const WEATHER_IMAGES = {
  sun: {
    description: '맑음',
    img: sunImage,
  },
  cloud: {
    description: '흐림',
    img: cloudImage,
  },
  semiCloud: {
    description: '약간 흐림',
    img: semiCloudImage,
  },
  rain: {
    description: '비',
    img: rainImage,
  },
  rainSnow: {
    description: '눈/비',
    img: rainImage,
  }, // TODO
  snow: {
    description: '눈',
    img: rainImage,
  }, // TODO
  semiRain: {
    description: '약한 비',
    img: rainImage,
  }, // TODO
  flashRainSnow: {
    description: '눈/비 날림',
    img: rainImage,
  }, // TODO
  flashSnow: {
    description: '눈 날림',
    img: rainImage,
  }, // TODO
};

interface WeatherCardProps {
  title: string;
  lat: number;
  lon: number;
  isOpen: boolean;
}

function WeatherCard({ title, lat, lon, isOpen }: WeatherCardProps) {
  const { monthEng, day, dayOfWeekEng } = getDateByEng();

  const { data } = useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => fetchWeather(lat, lon, false),
  });

  if (!data) return null;

  const weatherImage = pickImage(data.rainData, data.skyData);

  return isOpen ? (
    <div className={S.cardItem.open}>
      <span className={S.cardTitle.open}>{title}</span>
      <div className={S.dateEng}>{`${dayOfWeekEng}, ${day}, ${monthEng}`}</div>
      <div className={S.flex}>
        <div className={S.temperatureSection}>
          <div className={S.temperature}>{data?.temperatureData}℃</div>
          <div className={S.temperatureDescription}>{WEATHER_IMAGES[weatherImage].description}</div>
        </div>
        <div className={S.weatherImageSection}>
          <Image
            src={WEATHER_IMAGES[weatherImage].img}
            width={140}
            height={80}
            alt="weather"
            className={S.cardImage}
          />
          <div className={S.weatherImageDescription}>{`(에상: ${data.rainPerOneHourData})`}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className={S.cardItem.closed}>
      <span className={S.cardTitle.closed}>{title}</span>
      <div className={S.cardDiv} />
      <div className={S.test}>
        <Image
          src={WEATHER_IMAGES[weatherImage].img}
          width={52}
          height={52}
          alt="weather"
          className={S.cardImage}
        />
        <span className={S.cardTemperature}>{data.temperatureData}℃</span>
      </div>
    </div>
  );
}

export default WeatherCard;
