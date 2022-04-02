import React, {useEffect, useState} from 'react';
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import NewMeasurement from './components/NewMeasurement/NewMeasurement';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Details from './components/Details/Details';
import SpecialPoints from './components/Details/SpecialPoints/SpecialPoints';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReportsDetails from "./components/Reports/ReportsDetails/ReportsDetails";
import Reports from "./components/Reports/Reports";
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';


function App() {
    const [firstName, setFirstName] = useState ('');
    
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:5000/api/user', {
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                });

                const content = await response.json();

                setFirstName(content.firstName);
            }
        )();
    },[]);


    return (
        <div>
            <Router>
                <Menu firstName={firstName}/>
                <Routes>
                    <Route path="/surveys/:id" element={firstName && <Details firstName = {firstName} />} />
                    <Route path="/" exact element={firstName &&<HomePage firstName = {firstName}/>} />
                    <Route path="/surveys" element={firstName &&<Reports firstName = {firstName}/>} />
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/signin" element={<SignIn />}/>
                </Routes>
                <PrivacyPolicy/>
            </Router>
        </div>
    );
}

export default App;
