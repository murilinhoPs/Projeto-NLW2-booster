export default function convertHourToMin(
  time: string
) {
  const example: string = '8:30';

  const [hour, minutes] = time
    .split(':')
    .map(Number);
}
