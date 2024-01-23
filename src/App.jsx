import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import ActivitiesList from "./components/ActivitiesList.jsx";
import { uid } from "uid";
import WeatherHeader from "./components/WeatherHeader.jsx";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  console.log("activities: ", activities);

  const [weather, setWeather] = useState("");

  useEffect(() => {
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
    }
    getWeatherData();
  }, []);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );
  console.log("filteredActivities: ", filteredActivities);

  function handleAddActivity(newActivity) {
    setActivities((prevstate) => [...prevstate, { ...newActivity, id: uid() }]);
  }

  function handleDeleteActivity(id) {
    const newList = activities.filter((activity) => activity.id !== id);
    setActivities(newList);
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
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
// App();

export default App;

// change a bit but no much
