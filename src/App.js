import Menu from './components/Menu/Menu';
import FetchApi from './FetchApi';
import FetchApiHook from './FetchApiHook';
import HomePage from './components/HomePage/HomePage';
import NewMeasurement from './components/NewMeasurement/NewMeasurement';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'

function App() {
    return (
        <div>
            <Menu/>
            {/*<HomePage />*/}
            <NewMeasurement/>
            <PrivacyPolicy/>
        </div>
    );
}

export default App;
