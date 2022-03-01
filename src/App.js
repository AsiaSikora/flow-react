import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import NewMeasurement from './components/NewMeasurement/NewMeasurement';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Details from './components/Details/Details';
import SpecialPoints from './components/Details/SpecialPoints/SpecialPoints';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <div>
            <Menu/>
            <Router>
                <Routes>
                    <Route path="/surveys/:id" element={<Details />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
            <PrivacyPolicy/>
        </div>
    );
}

export default App;