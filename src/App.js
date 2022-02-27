import Menu from './components/Menu/Menu';
import FetchApi from './FetchApi';
import FetchApiHook from './FetchApiHook';
import HomePage from './components/HomePage/HomePage';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'

function App() {
  return (
    <div >
      <Menu />
      <HomePage />
      <PrivacyPolicy/>
    </div>
  );
}

export default App;
