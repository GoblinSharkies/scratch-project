import React from 'react';
import { useState ,useEffect } from 'react';
import '../css/_form.css';


const UserSubmissions = ({userEntries}) => {
  console.log('user entries on UserSubmissions' , userEntries)
  let userEntriesArray = [];

  for (let i = 0; i < userEntries.length; i++) {
    userEntriesArray.push(
      <div key={i} className="mySubmissions">
        {/* <div>{userEntries[i].first_name} {userEntries[i].last_name}</div> */}
        <div>{userEntries[i].day}</div>
        <div>{userEntries[i].activity}</div>
      </div>
    );
  }
  

  return(
    <div className='usersubmissions'>
      {userEntriesArray}
    </div>

  )

}


export default UserSubmissions;