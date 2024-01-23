import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import ActivitiesList from "./components/ActivitiesList.jsx";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
  console.log("activities: ", activities);

  const [isGoodWeather, setIsGoodWeather] = useState(true);

  // const isGoodWeather = true;

  useEffect(
    () =>
      async function getWeatherData() {
        try {
          const response = await fetch(
            "https://example-apis.vercel.app/api/weather"
          );

          const weatherData = await response.json();
          console.log(weatherData);

          setIsGoodWeather(weatherData.isGoodWeather);
        } catch (error) {
          console.log(error);
        }
      },
    []
  );
  console.log("isGoodWeather", isGoodWeather);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  console.log("filteredActivities: ", filteredActivities);

  function handleAddActivity(newActivity) {
    setActivities((prevstate) => [...prevstate, { ...newActivity, id: uid() }]);
  }
  return (
    <>
      <ActivitiesList
        activities={filteredActivities}
        isGoodWeather={isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
// App();

export default App;
