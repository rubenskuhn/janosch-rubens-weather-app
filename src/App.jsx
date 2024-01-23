import { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
// import ActivitiesList from "./components/ActivitiesList.jsx";
import { uid } from "uid";

// import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
  // const newActivity = {}
  console.log("activities: ", activities);
  function handleAddActivity(newActivity) {
    const id = uid();
    setActivities((prevstate) => [...prevstate, { newActivity, id: uid() }]);
  }
  return (
    <>
      {/* <ActivitiesList /> */}
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
// App();

export default App;
