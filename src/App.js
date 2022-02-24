import Menu from './components/Menu/Menu';
import FetchApi from './FetchApi';
import FetchApiHook from './FetchApiHook';
import ButtonDefault from './components/ButtonDefault/Button';

function App() {
  return (
    <div >
      <Menu />
      <ButtonDefault title="Start measurement"/>
    </div>
  );
}

export default App;
