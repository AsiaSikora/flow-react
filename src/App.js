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
    return (
        <div>
            <Router>
                <Menu/>
                <Routes>
                    <Route path="/surveys/:id" element={<Details />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/surveys" element={<Reports />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/signin" element={<SignIn/>}/>
                </Routes>
                <PrivacyPolicy/>
            </Router>
        </div>
    );
}

export default App;
