export default function Form({ onAddActivity }) {
  return (
    <form>
      <h1>Add New Activity</h1>
      <div>
        <label labelFor="name">Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label labelFor="good-weather">Good-weather activity:</label>
        <input type="checkbox" name="good-weather" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
