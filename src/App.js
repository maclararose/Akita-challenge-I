import React, { useReducer, useEffect } from "react";
import './App.css';

const updateLS = (items, hours) => {
  localStorage.setItem("item", JSON.stringify(items));
  localStorage.setItem("hours", JSON.stringify(hours));
};

const reducer = (state, action) => {
  switch(action.type){
    case "SET":{
      return {...state, ...action.state};
    }
    case "ADD":{
      const { items, totHours } = { ...state };
      const { item } = action;
      const newItem = [...items, item];
      const newHours = totHours+ parseInt(item.time_spent);

      updateLS(newItem, newHours);

      return{
        ...state,
        items: newItem,
        totHours: newHours,
      };
    }

    case "DELETE":{
      const { items, totHours } = { ...state };
      const { item } = action;
      const indexRemove = items.indexOf(item);

      const newArrayItems = [
        ...items.slice(0, indexRemove),
        ...item.slice(indexRemove+1, items.length)
      ];

      const newHours = totHours - item.time_spent;

      updateLS(newArrayItems, newHours);

      return{
        ...state,
        items: newArrayItems,
        totHours: newHours
      };
    }
    
    default:{
      return state;
    }
  }
};

const Submit = (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const obj = Object.fromEntries(formData);

  dispatch({ type: "ADD", item: obj});

  const exerciseList = [...state.items, obj];

  localStorage
}

const initilizerState = { item: [], totHours: 0};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initilizerState);
  
  useEffect(() => {
    let existState = {};

    if(localStorage.getItem("items")){
      existState.items = JSON.parse(localStorage.getItem("items"));
    }

    if(localStorage.getItem("totHours")){
      existState.totHours = JSON.parse(localStorage.getItem("totHours"));
    }

    dispatch({ type: "SET", state: existState});
  }, []);

  return(
    <div>
      <form onSubmit={Submit}>
        <input type="number" name="time_stemps" />
        <select name="activity">
          <option value="" disabled>Chose an activity</option>
          <option value="Run">Run</option>
          <option value="Swimming">Swimming</option>
          <option value="Bike">Bike</option>
        </select>
        <input type="date" name="date" />
        <button type="submit">Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <td>Timer</td>
            <td>Type</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          <td></td>
          <td></td>
          <td></td>
        </tbody>
      </table>
    </div>
  );
};

export default App;
