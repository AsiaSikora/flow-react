import Menu from './components/Menu/Menu';
import FetchApi from './FetchApi';
import FetchApiHook from './FetchApiHook';
import HomePage from './components/HomePage/HomePage';
import NewMeasurement from './components/NewMeasurement/NewMeasurement';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Details from './components/Details/Details';

function App() {
    return (
        <div>
            <Menu/>
            <Details/>
            <NewMeasurement/>
            <HomePage />
            <PrivacyPolicy/>
        </div>
    );
}

export default App;
