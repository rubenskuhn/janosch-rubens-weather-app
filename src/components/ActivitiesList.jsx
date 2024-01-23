export default function ActivitiesList({
  activities,
  isGoodWeather,
  onDeleteActivity,
}) {
  console.log("activities", activities);

  let listHeadline = "";

  function weatherHeadline() {
    if (isGoodWeather === true) {
      listHeadline = "The weather is awesome! Go outside and:";
    } else {
      listHeadline = "Bad weather outside! Here is what you can do now:";
    }
  }
  weatherHeadline();

  return (
    <>
      <ul class="activity-list">
        <h2>{listHeadline}</h2>
        {activities.map((activity) => (
          <li key={activity.id} className="abunak-list_item">
            <h3>{activity.name}</h3>
            <button onClick={() => onDeleteActivity(activity.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
