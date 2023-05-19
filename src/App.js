import './App.css';
import HomePage from './components/home-page/Home';
import CARDSINFO from './components/card-info/CardsInfo';

// main app component.
function App() {
  return (
    <div className="App">
      <div className='image' ></div>
      <HomePage cards={CARDSINFO}/>
    </div>
  );
}

export default App;
