export default function ActivitiesList({ activities }) {
  console.log("activities", activities);
  return (
    <>
      <ul class="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="abunak-list_item">
            <h3>{activity.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
