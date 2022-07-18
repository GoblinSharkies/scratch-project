import React from 'react';
import { useState } from 'react';
import '../css/_form.css';

function Form() {
  const [meetupInfo, setMeetupInfo] = useState({username: '', first_name: '', last_name: '', activity: '', day: ''});


  const onDayChange = (e) => {
    // if (e.target === "activity")
    // setDa(prev => {}e.target.value)
    console.log('onDayChange')
  }

  const onActivityChange = (e) => {
    // if (e.target === "activity")
    // setDa(prev => {}e.target.value)
    console.log('onActivityChange')

  }

  
  
return (
    <div className='page'>
      <div className='header'></div>
      <div className='App'>
        <div className='title'>Pick the times that work best for you!</div>
        <form>
          <label>Choose an activity</label>
          <select class='drop-down' label ="activity" onChange={onDayChange}>
            <option value={'climbing'}>climbing</option>
            <option value={'cave splunking'}>cave splunking</option>
            <option value={'coffee'}>coffee</option>
            <option value={'coffee splunking'}>coffee splunking</option>
          </select>
        </form>
        <form>
          <label>Choose a day of the week</label>
          <select class='drop-down' onChange={onActivityChange}>
            <option value={'Monday'}>Monday</option>
            <option value={'Tuesday'}>Tuesday</option>
            <option value={'Wednesday'}>Wednesday</option>
            <option value={'Thursday'}>Thursday</option>
            <option value={'Friday'}>Friday</option>
            <option value={'Saturday'}>Saturday</option>
            <option value={'Sunday'}>Sunday</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
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
