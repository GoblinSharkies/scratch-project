import React from 'react';
import { useState ,useEffect } from 'react';
import '../css/_form.css';


const userSubmissions = ({userEntries}) => {

  let userEntriesArray = [];
  for (let i = 0; i < userEntries.length; i++) {
    userEntriesArray.push(userEntries[i]);
  }

  return(
    <div>
      {userEntriesArray}
    </div>

  )

}


export default userSubmissions;