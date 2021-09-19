import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css';
import Home from './components/pages/Home';
import TipsAndTricks from './components/pages/TipsAndTricks';
import Practice from './components/pages/Practice';
import Timer from 'react-timer';
{/*}// other classes im importing*/}

{/*This code is from a tutorial by Brian Design on YouTube https://www.youtube.com/watch?v=I2UBjN5ER4s*/}

function App() {
  {/*}
  const OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
  return (
    <div className="App">
      <Navbar />
      <div className = "mydiv">
      <header className="App-header">
        <p>

          Interview preparation at your fingertips. Press the button below to get started.
        </p>
        <Questions />
        <Timer options={OPTIONS} />

        {/* React's starter code <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        }
      </header>
    </div>
    </div>
  );
  */}

    return(
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Practice' exact component={Practice}/>
            <Route path='/TipsAndTricks' exact component={TipsAndTricks}/>

            </Switch>
        </Router>
      </>
    );
}

export default App;
