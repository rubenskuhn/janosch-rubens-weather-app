export default function Form({ onAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById("name").value;
    const isGoodWeatherInput = document.getElementById("good-weather").checked;
    const newActivity = {
      name: nameInput,
      isForGoodWeather: isGoodWeatherInput,
    };
    console.log("newActivity: ", newActivity);
    onAddActivity(newActivity);

    e.target.reset();
    e.target.elements.name.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Activity</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="good-weather">Good-weather activity:</label>
        <input type="checkbox" name="isForGoodWeather" id="good-weather" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
