import { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";
// import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
  // const newActivity = {}
  console.log("activities: ", activities);
  function handleAddActivity(newActivity) {
    setActivities((prevstate) => [...prevstate, newActivity]);
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
// App();

export default App;
