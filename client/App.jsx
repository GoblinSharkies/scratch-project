import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Form from './components/form'
import Login from './components/Login'

const App = () => {
    const [day, setDay] = useState('');
    const [activity, setActivity] = useState('');
    const [username, setUsername] = useState('');
    const [userEntries, setUserEntries] = useState([]);
    

    return (
        <>
        
        <div>I am goin to be a NAV BAR
            <Link to="/form">
                Fill out form
            </Link>
            <Link to="/">
                Home
            </Link>
            <Link to="/matches">
                Matches
            </Link>


        </div>
        <Routes>
            <Route
                path="/"
                element={<Login
                    day={day}
                    setDay={setDay}
                    activity={activity}
                    setActivity={setActivity}
                    userEntries={userEntries}
                    setUserEntries={setUserEntries}
                    username={username}
                    setUsername={setUsername}
                    />}
                />
            <Route
                path="/form"
                element={<Form
                    day={day}
                    setDay={setDay}
                    activity={activity}
                    setActivity={setActivity}
                    userEntries={userEntries}
                    setUserEntries={setUserEntries}
                    username={username}
                />}
            />
        </Routes>
        </>
    )
}

export default App;