export default function WeatherHeader({ weatherEmoji, temperature }) {
  return <h1>{`${weatherEmoji}  ${temperature} °C`}</h1>;
}
