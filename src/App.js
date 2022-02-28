import Menu from './components/Menu/Menu';
import FetchApi from './FetchApi';
import FetchApiHook from './FetchApiHook';
import HomePage from './components/HomePage/HomePage';
import NewMeasurement from './components/NewMeasurement/NewMeasurement';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Graph from './components/Details/Graph/Graph.tsx';

function App() {
    return (
        <div>
            <Menu/>
            <Graph/>
            <NewMeasurement/>
            <HomePage />
            <PrivacyPolicy/>
        </div>
    );
}

export default App;
