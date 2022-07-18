import React from 'react';


const SignUpForm = () => {

    const onDayChange = (e) => {
        console.log('onDayChange', e.target.value);
      }
    
    const onActivityChange = (e) => {
        // if (e.target === "activity")
        // setDa(prev => {}e.target.value)
        console.log('onActivityChange', e.target.value);
    
    }


    return (

        <div className='App'>
        <div className='title'>Sigm up and start matching today!</div>
        <form>
          <label>First Name</label>  
          <input type='text' placeholder='first name' required/>
          <label>Last Name</label>  
          <input type='text' placeholder='last name' required/>
          <label>Username</label>  
          <input type='text' placeholder='username' required/>


          <label className='questions'>Choose a day of the week</label>
          <select className='drop-down' onChange={onActivityChange}>
            <option value={'Monday'}>Monday</option>
            <option value={'Tuesday'}>Tuesday</option>
            <option value={'Wednesday'}>Wednesday</option>
            <option value={'Thursday'}>Thursday</option>
            <option value={'Friday'}>Friday</option>
            <option value={'Saturday'}>Saturday</option>
            <option value={'Sunday'}>Sunday</option>
          </select>
          <p></p>
          <label className='questions'>Choose an activity</label>
          <select className='drop-down' label ="activity" onChange={onDayChange}>
            <option value={'climbing'}>climbing</option>
            <option value={'cave splunking'}>cave splunking</option>
            <option value={'coffee'}>coffee</option>
            <option value={'coffee splunking'}>coffee splunking</option>
          </select>
          <p></p>
          <button className='button'>Submit</button>
        </form>
        <div className='usersubmissions'></div>
      </div> 

    )

}

export default SignUpForm;