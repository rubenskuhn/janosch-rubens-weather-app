export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
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
