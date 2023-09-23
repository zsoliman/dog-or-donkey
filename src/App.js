import './App.css';
import Header from './components/Header';
import Startgame from './components/Startgame';


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

// const answerDog = () => {
//   console.log("answer", play())
// }
// answerDog()

function App() {
  return (
    <div className="App">
      <Header />
      <Startgame play={play} />
    </div>
  );
}

export default App;
