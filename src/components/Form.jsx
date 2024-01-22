export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById("name").value;
    const isGoodWeatherInput = document.getElementById("good-weather").checked;
    const formInput = {
      name: nameInput,
      isGoodWeather: isGoodWeatherInput,
    };

    console.log("formInput: ", formInput);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Activity</h1>
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
