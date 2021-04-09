import React, { useState } from "react";

function App() {
  const [activities, setActivity] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    
    console.log("Clicou");
  }

  return (
    <div>
      <h1>Workout log</h1>

      <form>
        <h2>Insert an item</h2>
        <input type="number" name="time_spent" />
        <select name="activity">
          <option disabled>Chose an activity</option>
          <option value="Run">Run</option>
          <option value="Swimming">Swimming</option>
          <option value="Bike">Bike</option>
        </select>
        <input type="date" name="date"></input>

        <button type="submit" onClick={onSubmit}>Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <td>Timer</td>
            <td>Type</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => {
            <tr key={index}>
              <td>{activity.time_spent}</td>
              <td>{activity.type}</td>
              <td>{activity.date}</td>
            </tr>
            })}
        </tbody>
      </table>

      <h1>X hour(s) of Exercise</h1>
    </div>
  );
}

export default App;
