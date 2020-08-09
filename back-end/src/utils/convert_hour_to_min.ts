export default function ConvertHourToMin(time: string) {
  const [hour, minutes] = time.split(':').map(Number);

  const timeInMin = hour * 60 + minutes;

  return timeInMin;
}
