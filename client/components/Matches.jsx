import React from 'react';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/_form.css';
import UserSubmissions from './UserSubmissions'
import axios from 'axios';
import MatchResults from './MatchResults'

const matchUrl = 'http://localhost:3000/getAllWithMatch'

function Matches({ day, activity, setDay, setActivity, userEntries, setUserEntries, username, first, last }) {
  const [matchEntries, setMatchEntries] = useState([])

  const onDayChange = (e) => {
    console.log('onDayChange', e.target.value)
    setDay(e.target.value);
  }

  const onActivityChange = (e) => {
    console.log('onActivityChange', e.target.value)
    setActivity(e.target.value);

  }
  
  const clickHandle = async (e) => {
    const data = await axios.get(matchUrl, {
            params: {
              day: day,
              activity: activity,
              username: username
            }
          });
    console.log('51 data', data);  
    setMatchEntries(data.data);
  }

  
  
return (
    
      <div className='App'>
        <div className='title'>Find others in your area to do activites with! (asl?)</div>
        <form onSubmit={(e)=> e.preventDefault()}>
          <label className='questions'>Choose a day of the week  </label>
          <select defaultValue={''} className='drop-down' onChange={onDayChange}>
            <option value={''}></option>
            <option value={'Monday'}>Monday</option>
            <option value={'Tuesday'}>Tuesday</option>
            <option value={'Wednesday'}>Wednesday</option>
            <option value={'Thursday'}>Thursday</option>
            <option value={'Friday'}>Friday</option>
            <option value={'Saturday'}>Saturday</option>
            <option value={'Sunday'}>Sunday</option>
          </select>
          <p></p>
          <label className='questions'>And/or choose an activity  </label>
          <select defaultValue={''} className='drop-down' label ="activity" onChange={onActivityChange}>
            <option value={''}></option>
            <option value={'climbing'}>climbing</option>
            <option value={'hiking'}>hiking</option>
            <option value={'yoga'}>yoga</option>
            <option value={'exercising'}>exercising</option>
            <option value={'coffee'}>coffee</option>
            <option value={'beer'}>beer</option>
            <option value={'cocktails'}>cocktails</option>
            <option value={'other beverage'}>other beverage</option>
            <option value={'gym'}>gym</option>
            <option value={'dinner'}>dinner</option>
          </select>
          <p></p>
          <button onClick={clickHandle} className='button'>Submit</button>
          {/* <Link to="/matches" onClick={clickHandle} className='button'>Submit</Link> */}
        </form>

        <h2>Matches</h2>
        <MatchResults matchEntries={matchEntries}/>
        
      </div> 
     
  
  );
}






export default Matches;






// /**
//  * ************************************
//  *
//  * @module  Task
//  * @author  Darin Ngau
//  * @date    2022-07-16
//  * @description presentation component that renders a single box for each match
//  *
//  * ************************************
//  */

//  import React from 'react';
//  import axios from "axios"; // maybe abstract this away into the MatchService.js file?

//  const Task = props => {
  
//   //need to fetch data here
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   //creating empty array to hold our unique matches
//   const result = [];
 
//   //looping through the data obtained from the useEffect
//   matches.forEach((el,i) => {
//     result.push(
//       <div className="taskBox" key = {i}>
//         <p>{matches[i]}
//         <button id='edit' onClick={() => console.log('edit button works')}>Edit Task</button>
//         <button id='delete' onClick={() => console.log('delete button works')}>Delete Task</button>
//         </p>
//       </div>
//     );
//   });
 
//    return (
//      <div>
//         {result}
//      </div>
//    );
//  };
 
//  export default Task;