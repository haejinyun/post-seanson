/* eslint-disable import/prefer-default-export */
import getCurrentSharpTime from '@/util/getCurrentSharpTime';

import axios from 'axios';
import getCurrentDate from '@/util/getCurrentDate';

// API 호출 관련 상수

interface WeatherData {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

interface WeatherResultData {
  humidityData: string; // 습도 (예: "85")
  latitude: number; // 위도 (예: 36)
  longitude: number; // 경도 (예: 127)
  rainData: string; // 강수량 (예: "0")
  rainPerOneHourData: string; // 시간당 강수량 상태 (예: "강수없음")
  skyData: string; // 하늘 상태 코드 (예: "1")
  temperatureData: string; // 온도 (예: "2")
  thunderData: string; // 천둥 상태 코드 (예: "0")
  windData: string; // 풍속 (예: "2")
}

const PAGE_NO = `1`;
const NUM_OF_ROWS = `60`;
const DATA_TYPE = `json`;
const BASE_URL = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`;

// Weather Fetcher 함수
export const fetchWeather = async (
  latitude: number,
  longitude: number,
  isCurrentTimeRequired = false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<WeatherResultData> => {
  const baseDate = getCurrentDate(); // 정의되어 있다고 가정
  const baseTime = getCurrentSharpTime(isCurrentTimeRequired); // 정의되어 있다고 가정

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        serviceKey: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        numOfRows: NUM_OF_ROWS,
        pageNo: PAGE_NO,
        dataType: DATA_TYPE,
        base_date: baseDate,
        base_time: baseTime,
        nx: latitude,
        ny: longitude,
      },
    });

    const { data } = response;

    const getWeatherByCategory = (category: string): WeatherData[] => {
      return data.response.body.items.item.filter(
        (item: { category: string }) => item.category === category,
      );
    };

    const skyData = getWeatherByCategory('SKY')[0].fcstValue;
    const windData = getWeatherByCategory('WSD')[0].fcstValue;
    const temperatureData = getWeatherByCategory('T1H')[0].fcstValue;
    const thunderData = getWeatherByCategory('LGT')[0].fcstValue; // 낙뢰
    const rainData = getWeatherByCategory('PTY')[0].fcstValue;
    const rainPerOneHourData = getWeatherByCategory('RN1')[0].fcstValue;
    const humidityData = getWeatherByCategory('REH')[0].fcstValue;

    const result = {
      latitude,
      longitude,
      skyData,
      windData,
      temperatureData,
      thunderData,
      rainData,
      rainPerOneHourData,
      humidityData,
    };

    return result;
  } catch (error) {
    console.error(error);
    return {
      latitude,
      longitude,
      skyData: '0',
      windData: '0',
      temperatureData: '0',
      thunderData: '0',
      rainData: '0',
      rainPerOneHourData: '0',
      humidityData: '0',
    };
  }
};
