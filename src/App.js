import React, { useState, useEffect } from "react";
import Form from './components/Form';
import FormTable from './components/FormTable';
import './App.css'
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 850px;
  margin: 0 auto;
`;

const TitleApp = styled.h1`
  text-align: center;
`;

function App() {
  const [activities, setActivities] = useState([]);
  const [totHours, setTotHours] = useState(0);

  useEffect(() => {
    const initialActivities = JSON.parse(localStorage.getItem('workout-activities'));
    const initialHours = JSON.parse(localStorage.getItem('workout-hours'));

    setActivities(initialActivities || []);
    setTotHours(initialHours || 0);
  }, [])

  const saveToLocalStorage = (activities, totHours) => {

    const activitiesJson = JSON.stringify(activities);
    const hoursJson = JSON.stringify(totHours);

    localStorage.setItem('workout-activities', activitiesJson);
    localStorage.setItem('workout-hours', hoursJson);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const itemAttributes = Object.fromEntries(formData);
    const newActivities = [...activities, itemAttributes];

    const newHours = totHours + parseInt(itemAttributes.time_spent)

    setActivities(newActivities);
    setTotHours(newHours);

    saveToLocalStorage(newActivities);

    form.reset();
  }

  const removeItem = (activity) => {
    const indexToRemove = activities.indexOf(activity);

    if (indexToRemove !== -1){
      const newActivities = [
        ...activities.slice(0, indexToRemove),
        ...activities.slice(indexToRemove+1, activities.length)
      ];

      const newHours = totHours - activity.time_spent;

      setActivities(newActivities);
      setTotHours(newHours);

      saveToLocalStorage(newActivities, newHours);
    }
  }

  return(
    <AppContainer>
      <TitleApp>Workout Log</TitleApp>
      <Form onSubmit={onSubmit}/>
      <FormTable activities={activities} removeItem={removeItem}/>

      <h1>{totHours} hour(s) of exercise</h1> 
    </AppContainer>
  );
}

export default App;
