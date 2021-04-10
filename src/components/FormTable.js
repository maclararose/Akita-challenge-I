import React from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

const FormTable = ({activities, removeItem}) => {
  return(
    <div>
      <Table striped hover>
        <thead>
          <tr>
            <td>Timer</td>
            <td>Type</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.time_spent}</td>
                <td>{activity.activity}</td>
                <td>{activity.date}</td>
                <td>
                  <span onClick={() => removeItem(activity)}>
                    X
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FormTable;