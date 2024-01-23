import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import ActivitiesList from "./components/ActivitiesList.jsx";
import { uid } from "uid";
import WeatherHeader from "./components/WeatherHeader.jsx";

function App() {
  const [activities, setActivities] = useState([]);
  console.log("activities: ", activities);

  const [weather, setWeather] = useState("");

  useEffect(
    () =>
      async function getWeatherData() {
        try {
          const response = await fetch(
            "https://example-apis.vercel.app/api/weather"
          );

          const weatherData = await response.json();
          console.log(weatherData);
          setWeather(weatherData);
        } catch (error) {
          console.log(error);
        }
      },
    []
  );

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );
  console.log("filteredActivities: ", filteredActivities);

  function handleAddActivity(newActivity) {
    setActivities((prevstate) => [...prevstate, { ...newActivity, id: uid() }]);
  }

  return (
    <>
      <WeatherHeader
        weatherEmoji={weather.condition}
        temperature={weather.temperature}
      />
      <ActivitiesList
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
// App();

export default App;
