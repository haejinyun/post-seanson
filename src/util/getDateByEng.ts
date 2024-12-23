function getDateByEng() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  const monthEng = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'Jun',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayOfWeekEng = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return {
    monthEng: monthEng[month],
    day,
    dayOfWeekEng: dayOfWeekEng[dayOfWeek],
  };
}

export default getDateByEng;
