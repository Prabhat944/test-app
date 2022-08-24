import './App.css';
import BottomSection from './component/BottomSection/bottomSection';
import Header from './component/Header/Header';
import TopSection from './component/TopSection/TopSection';

function App() {
  return (
    <div className="App">
      <Header />
      <TopSection/>
      <BottomSection/>
    </div>
  );
}

export default App;
