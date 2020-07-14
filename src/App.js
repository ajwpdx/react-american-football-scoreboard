//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

const actions = ['Run', 'Short Throw', 'Long Throw', 'Kick Field Goal']
const [run, sThrow, lThrow, fieldGoal] = actions

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homePossession, setPossession] = useState(true)
  const [downCount, setDown] = useState(1)
  const [yardsGained, setYardsGained] = useState("[#]")
  const [actionName, setActionName] = useState('[action]')
  const [ballOn, setBallOn] = useState(75)
  const [toGo, setToGo] = useState(10)
  const [status, setStatus] = useState('')
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const takeAction = e => {
    

    }

  const runAttempt = e => {
    let gain = Math.floor(Math.random() * (9 + 4) - 3 ) //run formula
    setActionName('run attempt') //states action
    setStatus("") //resets status
    
    setYardsGained(gain)
    
    
    if(ballOn - gain <= 0 ){ //check for touchdown
      setStatus('Touchdown!')
      setDown(1)
      setBallOn(75)
      if(homePossession === true){
        setHomeScore(homeScore + 7)
        setPossession(false)
      } else {
        setAwayScore(awayScore + 7)
        setPossession(true)
      }  

    } else if (gain >= toGo) { //check for first down
      setStatus('First Down!')
      setToGo(10)
      setDown(1)
      setBallOn(ballOn - gain)

     } else if (gain < toGo && downCount === 4){ //check for turnover
      setToGo(10)
      setBallOn(100-ballOn + gain)
      setStatus('Turnover!')
      setDown(1)
      if (homePossession === true){
        setPossession(false)
        setToGo(10)
      } else {
        setPossession(true)
        setToGo(10)
      }
     } else {
      setToGo(toGo - gain)
      setDown(downCount + 1)
      setBallOn(ballOn - gain)
     }
  }

  const sThrowAttempt = e => {
    let gain = Math.round(Math.random()*1.2)*Math.floor(Math.random() * (12 - 2 + 1) + 2 ) //run formula
    setActionName('short throw attempt') //states action
    setStatus("") //resets status
    
    setYardsGained(gain)
    
    
    if(ballOn - gain <= 0 ){ //check for touchdown
      setStatus('Touchdown!')
      setDown(1)
      setBallOn(75)
      if(homePossession === true){
        setHomeScore(homeScore + 7)
        setPossession(false)
      } else {
        setAwayScore(awayScore + 7)
        setPossession(true)
      }  

    } else if (gain >= toGo) { //check for first down
      setStatus('First Down!')
      setToGo(10)
      setDown(1)
      setBallOn(ballOn - gain)

     } else if (gain < toGo && downCount === 4){ //check for turnover
      setToGo(10)
      setBallOn(100-ballOn + gain)
      setStatus('Turnover!')
      setDown(1)
      if (homePossession === true){
        setPossession(false)
        setToGo(10)
      } else {
        setPossession(true)
        setToGo(10)
      }
     } else {
      setToGo(toGo - gain)
      setDown(downCount + 1)
      setBallOn(ballOn - gain)
     }
  }

  const lThrowAttempt = e => {
    let gain = Math.round(Math.random()*.75)*Math.floor(Math.random() * (40 - 10 + 1) + 10 ) //run formula
    setActionName('long throw attempt') //states action
    setStatus("") //resets status
    
    setYardsGained(gain)
    
    
    if(ballOn - gain <= 0 ){ //check for touchdown
      setStatus('Touchdown!')
      setDown(1)
      setBallOn(75)
      if(homePossession === true){
        setHomeScore(homeScore + 7)
        setPossession(false)
      } else {
        setAwayScore(awayScore + 7)
        setPossession(true)
      }  

    } else if (gain >= toGo) { //check for first down
      setStatus('First Down!')
      setToGo(10)
      setDown(1)
      setBallOn(ballOn - gain)

     } else if (gain < toGo && downCount === 4){ //check for turnover
      setToGo(10)
      setBallOn(100-ballOn + gain)
      setStatus('Turnover!')
      setDown(1)
      if (homePossession === true){
        setPossession(false)
        setToGo(10)
      } else {
        setPossession(true)
        setToGo(10)
      }
     } else {
      setToGo(toGo - gain)
      setDown(downCount + 1)
      setBallOn(ballOn - gain)
     }
  }

  const fieldGoalAttempt = e => {
    setActionName('field goal attempt')
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
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
      </div>
    </div>
      </section>
        <section className="buttons">
          <button className="action-buttons" onClick={runAttempt}>{run}</button>
          <button className="action-buttons" onClick={sThrowAttempt}>{sThrow}</button>
          <button className="action-buttons" onClick={lThrowAttempt}>{lThrow}</button>
          <button className="action-buttons" onClick={fieldGoalAttempt}>{fieldGoal}</button>
      </section>
      <section>
  <h1 className = "action-message">{status} The {actionName} gained {yardsGained} yards.  {homePossession ? 'Home' : 'Away'} team ball.</h1>
      </section>
    </div>
  );
}

export default App;
