//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

const actions = ['Run', 'Short Throw', 'Long Throw', 'Kick Field Goal']
const [run, sThrow, lThrow, fieldGoal] = actions

function App() {
  const [coinFlip, setCoinFlip] = useState(false)
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homePossession, setPossession] = useState(true)
  const [downCount, setDown] = useState(1)
  const [yardsGained, setYardsGained] = useState(1)
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const takeAction = e => {
    setYardsGained(yardsGained*5)
    setDown(downCount + 1)
  }


  // const downTick = e => {
  //   if setDown
  // }

  const homeTouchodwn = e => {
    setHomeScore(homeScore + 7)
    
  }

  const awayTouchdown = e => {
    setAwayScore(awayScore + 7)
  }

  const homeFieldGoal = e => {
    setHomeScore(homeScore + 3)
  }

  const awayFieldGoal = e => {
    setAwayScore(awayScore + 3)
  }

  const changePossession = e => {
    if(homePossession === true){
      setPossession(false)
    } else {
      setPossession(true)
    }
  }
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Home</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
          <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Away</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <div className = "possession">
        <h2>{homePossession ? '🔴' : ''} POSSESSION {homePossession ? '' : '🔴'}</h2>
        </div>
        <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downCount}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
      </div>
    </div>
      </section>
        <section className="buttons" onClick = {takeAction}>
          <button className="action-buttons" onClick={homeTouchodwn}>{run}</button>
          <button className="action-buttons" onClick={homeFieldGoal}>{sThrow}</button>
          <button className="action-buttons" onClick={awayTouchdown}>{lThrow}</button>
          <button className="action-buttons" onClick={awayFieldGoal}>{fieldGoal}</button>
      </section>
      <section>
  <h1 className = "action-message">The action gained {yardsGained} yards. It is down x with x yards to go. Home team ball.</h1>
      </section>
    </div>
  );
}

export default App;
