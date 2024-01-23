import { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
import ActivitiesList from "./components/ActivitiesList.jsx";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
  console.log("activities: ", activities);

  const isGoodWeather = true;
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
