function useNowTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const date = `${year}.${month}.${day}`;

  const hours = now.getHours();
  const minutes = now.getMinutes();
  // const seconds = now.getSeconds();

  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[now.getDay()];

  const time = `${hours - 1}:${minutes}`;

  const dateSample = now.getDate().toString().padStart(2, '0');

  const dateSampleToFetch = `${year}${month}${dateSample}`;
  return { date, time, dayOfWeek, dateSampleToFetch };
}

export default useNowTime;
