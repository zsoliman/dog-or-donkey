import './App.css';
import Header from './components/Header';
import Startgame from './components/Startgame';
import Game from './components/Game';

const randomInt = (max) => {
  let res = Math.floor(Math.random() * max)
  let animal;

  if (res == 1) {
    animal = "donkey"
  } else if (res == 0) {
    animal = "dog"
  } else { animal = "animalistic error" }

  console.log("res: ", res)
  console.log("animal:", animal)
}

const play = () => {
  randomInt(2)
}


function App() {
  return (
    <div className="App">
      <Header />
      <Startgame />
      <Game />

    </div>
  );
}

export default App;
