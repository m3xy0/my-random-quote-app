import './App.css';
import Quote from './Components/Quote';
import Button from './Components/Button';
import Share from './Components/Share';
import quotes from './quotes.json';
import { useState } from "react";

function randomText(number) {
  return  Object.values(quotes)[0][number];
  
}

function App(props) {
  const [text, setText] = useState(randomText(Math.floor(Math.random() * 100)));

  return (
    <div className="App">
      <div id="quote-box">
        <Quote id="quoteauthor" quotes={text.quote} author={text.author}/>
        <div id="button-wrapper">
          <div id="share-buttons">
            <Share appName="Twitter" appLink="twitter.com/intent/tweet"/>
            <Share appName="Tumblr" appLink="tumblr.com/intent/tumblr"/>
          </div>
          <Button id="new-quote" newText={setText} data={randomText}/>
        </div>
      </div>
    </div>
  );
}

export default App;
