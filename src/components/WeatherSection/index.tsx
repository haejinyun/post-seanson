'use client';

// import sun from '@/assets/png//weatherPng/sun.png';
import useNowTime from '@/hooks/useNowTime';
import { useState } from 'react';
import WeatherCard from '../WeatherCard';
import * as S from './WeatherSection.css';

const SAMPLE_STATE = [
  {
    key: '1',
    title: '잠실',
    lat: 37,
    lon: 37,
    // temperature: '34',
    // image: sun,
  },
  {
    key: '2',
    title: '고척',
    // temperature: '34',
    lat: 37,
    lon: 126,
    // image: sun,
  },
  {
    key: '3',
    title: '인천',
    // temperature: '34',
    lat: 37,
    lon: 126,
    // image: sun,
  },
  {
    key: '4',
    title: '수원',
    // temperature: '34',
    lat: 37,
    lon: 126,
    // image: sun,
  },

  {
    key: '5',
    title: '대전',
    temperature: '34',
    lat: 36,
    lon: 127,
    // image: sun,
  },
  {
    key: '6',
    title: '광주',
    // temperature: '34',
    lat: 35,
    lon: 126,
    // image: sun,
  },
  {
    key: '7',
    title: '대구',
    // temperature: '34',
    lat: 35,
    lon: 128,
    // image: sun,
  },

  {
    key: '8',
    title: '창원',
    // temperature: '34',
    lat: 35,
    lon: 128,
    // image: sun,
  },
  {
    key: '9',
    title: '부산',
    // temperature: '34',
    lat: 35,
    lon: 129,
    // image: sun,
  },
];

function WeatherSection() {
  const { date, time, dayOfWeek } = useNowTime();

  const [pickWeatherRegion, setPickWeatherRegion] = useState<string>('잠실');

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#EBEEF3',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          paddingTop: '80px',
          height: '444px',
        }}
      >
        <div className={S.infoWrapper}>
          <span className={S.infoTitle}>구장별 날씨</span>
          <span className={S.info}>불러온 시간:{`${date} (${dayOfWeek}) ${time}`} </span>
        </div>
        <div className={S.wrapper}>
          {SAMPLE_STATE.map(weather => (
            <button
              type="button"
              key={weather.key}
              onClick={() => setPickWeatherRegion(weather.title)}
            >
              <WeatherCard
                title={weather.title}
                // temperature={weather.temperature}
                // image={weather.image}
                lat={weather.lat}
                lon={weather.lon}
                isOpen={pickWeatherRegion === weather.title}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherSection;
