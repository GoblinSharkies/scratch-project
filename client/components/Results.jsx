/**
 * ************************************
 *
 * @module  Task
 * @author  Darin Ngau
 * @date    2022-07-16
 * @description presentation component that renders a single box for each match
 *
 * ************************************
 */

 import React from 'react';
 import axios from "axios"; // maybe abstract this away into the MatchService.js file?

 const Task = props => {
  
  //need to fetch data here
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  //creating empty array to hold our unique matches
  const result = [];
 
  //looping through the data obtained from the useEffect
  matches.forEach((el,i) => {
    result.push(
      <div className="taskBox" key = {i}>
        <p>{matches[i]}
        <button id='edit' onClick={() => console.log('edit button works')}>Edit Task</button>
        <button id='delete' onClick={() => console.log('delete button works')}>Delete Task</button>
        </p>
      </div>
    );
  });
 
   return (
     <div>
        {result}
     </div>
   );
 };
 
 export default Task;