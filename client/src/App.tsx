import { useState } from 'react';
import './App.css';
import catGif from './assets/cat.gif';
import titleText from './assets/title.svg';
import reactLogo from './assets/react.svg';

function App() {
  const [chosenCat, setChosenCat] = useState(-1);
  type Cat = {
    catType: string;
    image: string;
    description: string;
  }

  // TODO: update placeholders
  const cats: Cat[] = [
    {
      catType: "sleepy cat 0",
      image: reactLogo,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 1",
      image: reactLogo,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 2",
      image: reactLogo,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 3",
      image: reactLogo,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 4",
      image: reactLogo,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 5",
      image: reactLogo,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 6",
      image: reactLogo,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 7",
      image: reactLogo,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 8",
      image: reactLogo,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 9",
      image: reactLogo,
      description: "you are a sleepy cat!"
    }
  ];

  const handleCat = () => {
    const number = Math.floor(Math.random() * 10);
    setChosenCat(number);
  };

  return (
    <>
      <div className="main">
        <div>
          <img src={titleText} className="content" alt="Which cat are you?" />
        </div>
        <div style={{ height: "20rem" }}>
          {chosenCat === -1 ?
            <>
              <button className="button" onClick={handleCat}>
                <img src={catGif} className="content" alt="cat" />
              </button>
              <div className="clickText">click the cat</div>
            </> : 
            <>
              <p>{cats[chosenCat]["catType"]}</p>
              <img src={cats[chosenCat]["image"]} className="content" alt="cat" />
            </>}
        </div>
      </div>
    </>
  )
}

export default App
