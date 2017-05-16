import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Store, wrapStore} from "./redux.js"



function reducer(state, action){
  return state;
}


function render(dispatch, getState){
  var store = {
    dispatch,
    getState
  };
  return function(action){
    ReactDOM.render(
      <App store={store}/>,
      document.getElementById('root')
    );
    return dispatch(action);
  }
}

var store = new Store({}, reducer);
store = wrapStore(store, [render]);

const cardStyle = {
  maxWidth : "300px"
};

const cardImage = {
  width : "100%"
};

const paddingMarginZero = {
  padding : "0",
  margin : "0",
  marginBottom : "10"
};

function App({store}){
  return (
    <div className="App">
      <div className="w3-container" style={paddingMarginZero}>
        <h1 className="w3-teal" style={paddingMarginZero}>Pizza Scrapper</h1>
      </div>
      <div className="w3-container">
        <div className="w3-card-2" style={cardStyle}>
          <img src="http://www.dopopoco.ro/images/produse/pizza_diavolo_small.png" style={cardImage}/>
          <div className="w3-container">
            <h4>
              <b>Pizza Diavolo</b>
            </h4>
            <p>
              Ingrediente: the fires of hell its self
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

store.dispatch({ type : "_INIT_" });

export default App;
