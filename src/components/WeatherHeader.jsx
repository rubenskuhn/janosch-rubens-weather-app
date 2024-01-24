export default function WeatherHeader({ weatherEmoji, temperature, loaded }) {
  return (
    <>
      {loaded ? (
        <h1>{`${weatherEmoji}  ${temperature} °C`}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
