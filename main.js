function getCurrentDay() {
  const currentDate = new Date();
  const dayNum = currentDate.getDay();
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return daysOfWeek[dayNum];
}

function getCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const formattedTime = `${hours > 12 ? hours - 12 : hours}:${String(
    minutes
  ).padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
  return formattedTime;
}

const selectorDay = document.getElementById('d');
const selectorTime = document.getElementById('t');
selectorDay.innerHTML = getCurrentDay();
selectorTime.innerHTML = getCurrentTime();
