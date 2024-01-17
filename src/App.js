import './App.css';
import Quote from './Components/Quote';
import Button from './Components/Button';
import Share from './Components/Share';
import quotes from './quotes.json';
import { useState } from "react";
import Twitter from 'D:/coding/freecodecamp/quote machine/random-quote-machine/src/images/Twitter.svg';
import Tumblr from 'D:/coding/freecodecamp/quote machine/random-quote-machine/src/images/Tumblr.svg';

function randomText(number) {
  return  Object.values(quotes)[0][number];
  
}

function App(props) {
  const [text, setText] = useState(randomText(Math.floor(Math.random() * 100)));
  var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
  ];
  const bgColor = colors[Math.floor(Math.random() * (colors.length))];
  const tweet = function(text) {return ("https://twitter.com/intent/tweet?hashtags=quotes&text=" + "\"" + text.quote.replace(" ", "%20") + "\" " + text.author + "\#quotes")};

  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <div id="quote-box">
        <Quote color={bgColor} id="quoteauthor" quotes={text.quote} author={text.author}/>
        <div id="button-wrapper">
          <div id="share-buttons">
            <Share color={bgColor} idName="tweet-quote" path={Twitter} appLink={tweet(text)}/>
            <Share color={bgColor} idName="tumblr-quote" path={Tumblr} appLink="https://tumblr.com/intent/tumblr"/>
          </div>
          <Button bgColor={bgColor} id="new-quote" newText={setText} data={randomText}/>
        </div>
      </div>
    </div>
  );
}

export default App;
