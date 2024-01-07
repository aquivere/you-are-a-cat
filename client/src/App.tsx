import { useState } from 'react';
import './App.css';
import catGif from './assets/cat.gif';
import chipiGif from './assets/chipi-chipi-chapa-chapa.gif';
import titleText from './assets/title.svg';
import zoningGif from './assets/zoning-out.gif';

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
      catType: "chipi chipi chapa chapa",
      image: chipiGif,
      description: "chipi chipi chapa chapa dubi dubi daba daba"
    },
    {
      catType: "zoning out",
      image: zoningGif,
      description: "what'd you say again?"
    },
    {
      catType: "sleepy cat 2",
      image: chipiGif,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 3",
      image: chipiGif,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 4",
      image: chipiGif,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 5",
      image: chipiGif,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 6",
      image: chipiGif,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 7",
      image: chipiGif,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 8",
      image: chipiGif,
      description: "you are a sleepy cat!"
    },
    {
      catType: "sleepy cat 9",
      image: chipiGif,
      description: "you are a sleepy cat!"
    }
  ];

  const handleCat = () => {
    const number = Math.floor(Math.random() * 10);
    setChosenCat(number);
  };

  const handleAgain = () => {
    setChosenCat(-1);
  }

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
            <div className="cat-content">
              <img src={cats[chosenCat]["image"]} className="content" alt="cat" />
              <div className="cat-type">{cats[chosenCat]["catType"]}</div>
              <div className="cat-desc">{cats[chosenCat]["description"]}</div>
              <button className="again-button" onClick={handleAgain}>go again</button>
            </div>}
        </div>
      </div>
    </>
  )
}

export default App
