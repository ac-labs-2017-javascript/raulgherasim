import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Store, wrapStore} from "./redux.js"



function appLogic(state, action){
  if(action.type === "INC"){
    return {
      counter : state.counter + 1
    };
  }else if(action.type === "DEC"){
    return {
      counter : state.counter - 1
    };
  }

  return state;
}

function render(dispatch, getState){
  return function(action){
    ReactDOM.render(
      <App state={getState()}/>,
      document.getElementById('root')
    );
    return dispatch(action);
  }
}

var store = new Store({ counter : 0 }, appLogic);
store = wrapStore(store, [render]);

function Hello({name, counter}){
  return (
    <div>
      <div>Hello {name} {counter}</div>
      <button onClick={()=>store.dispatch({type : "INC"})}>Click me! (Inc)</button>
      <button onClick={()=>store.dispatch({type : "DEC"})}>Click me! (Dec)</button>
    </div>
  );
}

function App({state}){
  return (
    <div className="App">
      <Hello name="Boogie" counter={state.counter}/>
    </div>
  );
}

store.dispatch({ type : "_INIT_" });

export default App;
