import React from 'react';
import { useState ,useEffect } from 'react';
import '../css/_form.css';


const MatchResults = ({ matchEntries }) => {
  console.log('match entries on MatchEntries' , matchEntries)
  let matchEntriesArray = [];

  for (let i = 0; i < matchEntries.length; i++) {
    matchEntriesArray.push(
      <div key={i} className="mySubmissions">
        <div>{matchEntries[i].first_name} {matchEntries[i].last_name}</div>
        <div>{matchEntries[i].day}</div>
        <div>{matchEntries[i].activity}</div>
      </div>
    );
  }
  

  return(
    <div className='usersubmissions'>
      {matchEntriesArray}
    </div>

  )

}


export default MatchResults;