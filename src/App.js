import Menu from './components/Menu/Menu';
import FetchApi from './FetchApi';
import FetchApiHook from './FetchApiHook';
import HomePage from './components/HomePage/HomePage';
import NewMeasurement from './components/NewMeasurement/NewMeasurement';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Details from './components/Details/Details';
import SpecialPoints from './components/Details/SpecialPoints/SpecialPoints';


function App() {
    return (
        <div>
            <Menu/>
            <SpecialPoints/>
            <Details/>
            <NewMeasurement/>
            <HomePage />
            <PrivacyPolicy/>
        </div>
    );
}

export default App;
