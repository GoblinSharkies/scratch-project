import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/_form.css';
import UserSubmissions from './UserSubmissions'
import axios from 'axios';

const postUrl = 'http://localhost:3000/newEntry'
const userUrl = 'http://localhost:3000/userEntries'

function Form({ day, activity, setDay, setActivity, userEntries, setUserEntries, username, setFirst, setLast, first, last }) {
  const [submitted, setSubmitted] = useState(false);
  


  useEffect(() => {
    console.log('username from login', username)
    const fetchUserEntries = async() => {
      const data = await axios.get(userUrl, {
        params: {
          username: username
        }
      });
      console.log(data.data);
      setUserEntries(data.data);
      setFirst(data.data[0].first_name);
      setLast(data.data[0].last_name);
      console.log('full name', data.data[0].first_name, data.data[0].last_name)     
    };
    fetchUserEntries();
  }, [username, submitted])
  


  const onDayChange = (e) => {
    console.log('onDayChange', e.target.value)
    setDay(e.target.value);
  }

  const onActivityChange = (e) => {
    console.log('onActivityChange', e.target.value)
    setActivity(e.target.value);

  }
  
  const clickHandle = async (e) => {
    const create = await axios.post(postUrl, {username: username, first_name: first, last_name: last, day: day, activity: activity});
    setSubmitted(!submitted);
  }

  
  
return (
    
  
      <div className='App'>
        <div className='title'>Pick the days and activities that work best for you!</div>
        <form onSubmit={(e)=> e.preventDefault()}>
          <label className='questions'>Choose a day of the week  </label>
          <select defaultValue={'Monday'} className='drop-down' onChange={onDayChange}>
            <option value={'Monday'}>Monday</option>
            <option value={'Tuesday'}>Tuesday</option>
            <option value={'Wednesday'}>Wednesday</option>
            <option value={'Thursday'}>Thursday</option>
            <option value={'Friday'}>Friday</option>
            <option value={'Saturday'}>Saturday</option>
            <option value={'Sunday'}>Sunday</option>
          </select>
          <p></p>
          <label className='questions'>Choose an activity  </label>
          <select defaultValue={'climbing'} className='drop-down' label ="activity" onChange={onActivityChange}>
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
            <option value={'street fighting'}>street fighting</option>
          </select>
          <p></p>
          {/* <Link to="/matches" onClick={clickHandle} className='button'>Submit</Link> */}
          <button onClick={clickHandle} className='button'>Submit</button>
        </form>

        <h2>Your Entries</h2>
        <UserSubmissions userEntries={userEntries}/>
        {/* <div className='secondary'>whats in here?</div> */}
      </div> 
      
   
  
  );
}



// dropdown for day (7 days of week)
// dropdown for activity (preselect activities) only 1 activity for worst case scenario

//handlesubmit handlechange to grab form entries

/*
    <div style={{display: 'flex', alignItems: 'center', gap: '50px'}} >
      <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}} >
        <div className = "card" style={{border: '1px', display: 'flex',flexDirection: 'column', width:'25vw', alignItems: "center", gap: '10px', backgroundColor: '#ffa', backgroundImage: "url(" + "http://res.cloudinary.com/cspaveljb/image/upload/v1499110956/note_font_pcdcst.png" + ")", backgroundSize: "contain"}} >
        <TextField label = "First name" value ={postData.first_name} onChange ={(e)=>setPostData({...postData, first_name: e.target.value})}></TextField>
        <TextField label = "Last Name" value ={postData.last_name} onChange ={(e)=>setPostData({...postData, last_name: e.target.value})}></TextField>
        <TextField label = "Title" value ={postData.title} onChange ={(e)=>setPostData({...postData, title: e.target.value})}></TextField>
        <TextField multiline rows ={3} maxRows={4} label = "Description" value ={postData.description} onChange ={(e)=>setPostData({...postData, description: e.target.value})}></TextField>

        <div >
        <button style={{fontFamily: 'Permanent Marker',backgroundColor:'#ffa', padding:'10px', cursor: 'pointer'}} type = "submit">Submit Achievement! Good Job</button>
        </div>
        </div>

      </form>
      <div style={{display: 'flex',flexDirection: 'column', alignItems: "flex-start", backgroundColor: '#ffa', backgroundImage: "url(" + "http://res.cloudinary.com/cspaveljb/image/upload/v1499110956/note_font_pcdcst.png" + ")", backgroundSize: "cover", padding:'50px'}}>
        {submitted && <Navigate to="/" />}
        <Link onClick ={handleClick} style={{color: 'black', fontSize: '32px'}} to ='/'> Go Back </Link>
      </div>
    </div>

*/



export default Form;
