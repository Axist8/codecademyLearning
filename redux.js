// Redux 
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'songs/addSong': {
        return [ ...state, action.payload ];
      }
      case 'songs/removeSong': {
        return state.filter(song => song !== action.payload);
      }
      case 'songs/removeAll': {
        return [];
      }
      default: {
        return state;
      }
    }
  }
  
  const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];
  
  const addNewSong = {
    type: 'songs/addSong',
    payload: 'Halo'
  };
  
  const removeSong = {
    type: 'songs/removeSong',
    payload: 'Take Five'
  };
  
  const removeAll = {
    type: 'songs/removeAll'
  }
  
  // mutable
    // mutates nono
    const mutableUpdater = (obj) => {
      obj.completed = !obj.completed;
      return obj;
    }
     
    const taskState = { text: 'do dishes', completed: false };
    const updatedTask = mutableUpdater(taskState);
    console.log(updatedTask); 
    // Prints { text: 'do dishes', completed: true };
     
    console.log(taskState); 
    // Prints { text: 'do dishes', completed: true };
  
    // immutable updates yesyes
    const immutableUpdater = (obj) => {
      return {
        ...obj,
        completed: !obj.completed
      }
    }
     
    const task = { text: 'iron clothes', completed: false };
    const updatedTask = immutableUpdater(task);
    console.log(updatedTask); 
    // Prints { text: 'iron clothes', completed: true };
     
    console.log(task); 
    // Prints { text: 'iron clothes', completed: false };
  
  // pure 
    // impure nono
    const addItemToList = (list) => {
      let item;
      fetch('https://anything.com/endpoint')
        .then(response => {
          if (!response.ok) {
            item = {};
          }
     
          item = response.json();
       });
     
       return [...list, item];  
    };
  
    // pure yesyes
    let item;
    fetch('https://anything.com/endpoint')
      .then(response => {
        if (!response.ok) {
          item = {};
        }
   
        item = response.json();
     });
   
    const addItemToList = (list, item) => {
      return [...list, item];
    };
  
    // example 1
    const globalSong = 'We are the World';
  
  const playlistReducer = (state = [], action) => {
   switch (action.type) {
     case 'songs/addGlobalSong': {
       return [...state, action.payload];
     }
     default:
       return state;
   }
  }
   
  const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];
  const addAction = { type: 'songs/addGlobalSong', payload: 'We are the World' };
  const newState = playlistReducer(state, addAction);
  
  // example 2
  const todoReducer = (state = [], action) => {
    switch (action.type) {
      case 'todos/addTodo': {
        return [...state, action.payload];
      }
      case 'todos/removeAll': {
        return [];
      }
      default: {
        return state;
      }
    }
   }
   
   const state = [ 'Print trail map', 'Pack snacks', 'Summit the mountain' ];
   const addTodoAction = { type: 'todos/addTodo', payload: 'Descend' };
   const newState = todoReducer(state, addTodoAction);
  
   // example 3
   const initialState = [0, 1, 2];
  
  const reducer = (state = initialState, action) => {
   switch (action.type) {
     case 'numbers/addRandom': {
       return [...state, action.payload];
     }
     default: {
       return state;
     }
   }
  }
   
  const randomAction = { type: 'numbers/addRandom', payload: Math.random() };
  const newState = reducer(undefined, randomAction);
  
  // createStore, action creators, listener, subscribe, unsubscribe
  import { createStore } from 'redux';
  
  const increment = () => {
    return { type: 'increment' }
  }
  
  const decrement = () => {
    return { type: 'decrement' }
  }
  
  const initialState = 0;
  const countReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  }
  
  const store = createStore(countReducer);
  
  const printCountStatus = () => {
    console.log(`The count is ${store.getState()}`);
  };
  store.subscribe(printCountStatus);
  const unsubscribe = store.subscribe(printCountStatus);
  
  store.dispatch(decrement());
  store.dispatch(increment());
  unsubscribe();
  store.dispatch(increment());
  
  // example
    import { createStore } from 'redux';
    // Action Creators
    function increment() { 
      return {type: 'increment'}
    }
  
    function decrement() { 
      return {type: 'decrement'}
    }
  
    // Reducer / Store
    const initialState = 0;
    const countReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'increment':
          return state + 1; 
        case 'decrement':
          return state - 1; 
        default:
          return state;
      }
    };  
    const store = createStore(countReducer);
  
    // HTML Elements
    const counterElement = document.getElementById('counter');
    const incrementer = document.getElementById('incrementer');
    const decrementer = document.getElementById('decrementer');
  
    // Store State Change Listener
    const render = () => {
      counterElement.innerHTML = store.getState();
    }
    render();
    store.subscribe(render);
  
    // DOM Event Handlers
    const incrementerClicked = () => {
      store.dispatch(increment());
    }
    incrementer.addEventListener('click', incrementerClicked);
    
    const decrementerClicked = () => {
      store.dispatch(decrement());
    }
    decrementer.addEventListener('click', decrementerClicked);
  
  // example 2
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { createStore } from 'redux';
  
  // REDUX CODE
  ///////////////////////////////////
  
  const increment = () => {
    return {type: 'increment'} 
  }
  
  const decrement = () => { 
    return {type: 'decrement'}
  }
  
  const initialState = 0;
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state; 
    }
  } 
  
  const store = createStore(counterReducer);
  
  // REACT CODE
  ///////////////////////////////////
  
  const render = () => {
    ReactDOM.render(
      <CounterApp 
        state={store.getState()}
      />,
      document.getElementById('root')
    )
  }
  render();
  
  
  // Render once with the initial state.
  // Subscribe render to changes to the store's state.
  
  function CounterApp(props) {
    const state = props.state;
    const onIncrementButtonClicked = () => {
      store.dispatch(increment());
    }
   
    const onDecrementButtonClicked = () => {
      store.dispatch(decrement());
    }
    
    return (   
      <div id='counter-app'>
        <h1> {state} </h1>
        <button onClick={onIncrementButtonClicked}>+</button> 
        <button onClick={onDecrementButtonClicked}>-</button>
      </div>
    )
  }
  
  store.subscribe(render);      
  
      // *screams* REDUXXXXXX
  
  // Import from redux here.
  import { createStore, combineReducers } from 'redux';
  import allRecipesData from './data.js';
  
  // Action Creators
  ////////////////////////////////////////
  
  const addRecipe = (recipe) => {
    return { 
      type: 'favoriteRecipes/addRecipe', 
      payload: recipe 
    };
  }
  
  const removeRecipe = (recipe) => {
    return { 
      type: 'favoriteRecipes/removeRecipe', 
      payload: recipe 
    };
  }
  
  const setSearchTerm = (term) => {
    return {
      type: 'searchTerm/setSearchTerm',
      payload: term
    }
  }
  
  const clearSearchTerm = () => {
    return {
      type: 'searchTerm/clearSearchTerm'
    }; 
  }
  
  const loadData = () => {
    return { 
      type: 'allRecipes/loadData', 
      payload: allRecipeData
    };
  }
  
  // Reducers
  ////////////////////////////////////////
  
  const initialAllRecipes = [];
  const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
    switch(action.type) {
      case 'allRecipes/loadData': 
        return action.payload
      default:
        return allRecipes;
    }
  }
  
  const initialSearchTerm = '';
  const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch(action.type) {
      case 'searchTerm/setSearchTerm':
        return action.payload
      case 'searchTerm/clearSearchTerm':
        return ''
      default: 
        return searchTerm;
    }
  }
  
  const initialFavoriteRecipes = [];
  const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
    switch(action.type) {
      case 'favoriteRecipes/addRecipe':
        return [...favoriteRecipes, action.payload]
      case 'favoriteRecipes/removeRecipe':
        return favoriteRecipes.filter(recipe => {
          return recipe.id !== action.payload.id
        });
      default:
        return favoriteRecipes;
    }
  }
  
  // Create your `rootReducer` here using combineReducers().
  const reducers = {
    allRecipes: allRecipesReducer,
    searchTerm: searchTermReducer,
    favoriteRecipes: favoriteRecipesReducer
  };
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer);
  
  
      // split it up!
  
  
  // store.js
  import { createStore, combineReducers } from 'redux';
  import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice.js';
  import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';
  import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.js';
  
  export const store = createStore(combineReducers({
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  }));
  
  // app.js
  
  import React from 'react';
  
  import { AllRecipes } from '../features/allRecipes/AllRecipes.js';
  import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
  
  export function App(props) {
    const {state, dispatch} = props;
  
    const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
    const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);
  
    return (
      <main>
        <section>
          <SearchTerm
            searchTerm={state.searchTerm}
            dispatch={dispatch}
          />
        </section>
        <section>
          <h2>Favorite Recipes</h2>
          
        </section>
        <hr />
        <section>
          <h2>All Recipes</h2>
          <AllRecipes
            allRecipes={visibleAllRecipes} 
            dispatch={dispatch}
          />
        </section>
      </main>
    )
  }
  
  /* Utility Helpers */
  
  function getFilteredRecipes(recipes, searchTerm) {
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  
  // index.js
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  import { App } from './app/App.js';
  import { store } from './app/store';
  
  
  const render = () => {
    // Pass `state` and `dispatch` props to <App />
    ReactDOM.render(
      <App 
        state={store.getState()}
        dispatch={store.dispatch}
      />,
      document.getElementById('root')
    )
  }
  render();
  // Subscribe render to changes to the `store`
  store.subscribe(render);
  
  
    // COMPLETE

    


    // nuredux

// Provider on index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App.js';
import { store } from './app/store.js';
 
import { Provider } from 'react-redux'
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// Pure function
// refferential transparency = using f(2) is the same thing as using 4.
// Given an input a pure function will always produce the same output and also produces no side effects

// lol - Perhaps the most important design principle in computer science is 
// KISS (Keep It Simple, Stupid). I prefer Keep It Stupid Simple

// non-determinism = parallel processing + mutable state

// deep-freeze on npm
  // throws an error if original is mutated
  deepFreeze(originalCart);