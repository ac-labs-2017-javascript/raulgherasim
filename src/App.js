import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Store, wrapStore} from "./redux.js";
import $ from 'jquery';

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
      <App store={{getState, dispatch}}/>,
      document.getElementById('root')
    )
    return dispatch(action);
  }
}

var store = new Store({
  pizzas:[{
    title: 'asd',
    ingredients: '1223',
    url: 'http://www.pizzahut-tt.com/wp-content/uploads/2013/06/pizza-hut-trinidad-and-tobago-supreme-lovers.png'
  },
  {
    title: 'assd',
    ingredients: '1223',
    url: 'http://www.pizzahut-tt.com/wp-content/uploads/2013/06/pizza-hut-trinidad-and-tobago-supreme-lovers.png'
  },
  {
    title: 'aasd',
    ingredients: '123',
    url: 'http://www.pizzahut-tt.com/wp-content/uploads/2013/06/pizza-hut-trinidad-and-tobago-supreme-lovers.png'
  },
  {
    title: 'a2sd',
    ingredients: '123',
    url: 'http://www.pizzahut-tt.com/wp-content/uploads/2013/06/pizza-hut-trinidad-and-tobago-supreme-lovers.png'
  }
]
}, appLogic);
store = wrapStore(store, [render]);



const divstyle={
  margin: '0px',
  padding: '0px'
}


function PizzaCard({url, title, ingredients}){
    
    var searchFilter ='';

    return (
      
    <div className="col-md-2" style={{marginTop: '5px'}}>
      <div className="panel panel-default ">
        <div className="panel-heading" style={{padding:'0px'}}>
          <img className="img-responsive"src={url}/>
        </div>
        <div className="panel-body">
          <h4>{title}</h4>
          <h5>{ingredients}</h5>
        </div>
      </div>
    </div>
  )
  
}

function App({store}){
  const pizzas=store.getState().pizzas;
  
  const x = 'asd';
 

  function filterFunction(event){
    const x = event.target.value;
    console.log(x);
    return x;
    
  }

  return (
    <div className="App">
      <div className="col-md-12" style={divstyle}>
        <div className="col-md-12"style={{backgroundColor: '#dfdfdf',padding: '0px'}}>
          <h1>Pizza meniul sef la meniuri</h1>
        </div>
        
        <div className="col-md-12">
          <input id="searchInput"type="text" onChange={filterFunction.bind(event)}/>
        </div>

        {pizzas.filter((pizza)=>{
          return pizza.title == x
        }).map(function(pizza){
            return ( <PizzaCard url={pizza.url} title={pizza.title} ingredients={pizza.ingredients}/> );
          })}
      </div>
    </div>
  );
}

store.dispatch({ type : "_INIT_" });

export default App;
