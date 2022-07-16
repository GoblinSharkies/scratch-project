/**
 * ************************************
 *
 * @module  ResultDisplay
 * @author Darin Ngau
 * @date 2022-07-16
 * @description Presentation component that displays the resulting matches
 *
 * ************************************
 */

 import React, {useState} from 'react';

 const ResultDisplay = (props) => {
  
  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
   );
 };

 export default ResultDisplay;