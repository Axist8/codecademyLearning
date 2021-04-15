// functional components
// stateless
const Friend = () => {
    return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
};

// props
export function YesNoQuestion (props) {
    return (
        <div>
        <p>{props.prompt}</p>
        <input value="Yes" />
        <input value="No" />
        </div>
    );
}
    
ReactDOM.render(
    <YesNoQuestion prompt="Have you eaten an apple today?" />,
    document.getElementById('app');
);

// useState 
    // import
    import React, { useState } from 'react';

    // use
    function Toggle() {
        const [toggle, setToggle] = useState();
        
        return (
            <div>
            <p>The toggle is {toggle}</p>
            <button onClick={() => setToggle("On")}>On</button>
            <button onClick={() => setToggle("Off")}>Off</button>
            </div>
        );
    }

// initialize state
const [isLoading, setIsLoading] = useState(true);

// object destructure
const handleChange = (event) => setEmail(event.target.value);
    //becomes
const handleChange = ({target}) => setEmail(target.value);

// use a callback function to set state based on a prev state
import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);
    return (
        <div>
            <p>Wow, you've clicked that button: {count} times</p>
            <button onClick={increment}>Click here!</button>
        </div>
    );
}

// arrays in state
import React, { useState } from "react";
 
const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];
 
export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);
 
  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
      if (prev.includes(clickedTopping)) {
        return prev.filter(t => t !== clickedTopping);
      } else {
        return [clickedTopping, ...prev];
      }
    });
  };
 
  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}

// objects in state
export default function Login() {
    const [formState, setFormState] = useState({});
   
    const handleChange = ({ target }) => {
      const { name, value } = target;
      setFormState((prev) => ({
        ...prev,
        [name]: value
      }));
    };
   
    return (
      <form>
        <input
          value={formState.firstName}
          onChange={handleChange}
          name="firstName"
          type="text"
        />
        <input
          value={formState.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
      </form>
    );
  }
  
  // seperate hooks
    // non seperated
    function Subject() {
        const [state, setState] = useState({
          currentGrade: 'B',
          classmates: ['Hasan', 'Sam', 'Emma'],
          classDetails: {topic: 'Math', teacher: 'Ms. Barry', room: 201};
          exams: [{unit: 1, score: 91}, {unit: 2, score: 88}]);
        });

    //seperated
    function Subject() {
        const [currentGrade, setGrade] = useState('B');
        const [classmates, setClassmates] = useState(['Hasan', 'Sam', 'Emma']);
        const [classDetails, setClassDetails] = useState({topic: 'Math', teacher: 'Ms. Barry', room: 201});
        const [exams, setExams] = useState([{unit: 1, score: 91}, {unit: 2, score: 88}]);
        // ...
      }

// useEffect occurs after each render
import React, { useState, useEffect } from 'react';
 
function PageTitle() {
  const [name, setName] = useState('');
 
  useEffect(() => {
    document.title = `Hi, ${name}`;
  });
 
  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input onChange={({target}) => setName(target.value)} value={name} type='text' />
    </div>
  );
}

    // Cleaning up effects
    useEffect(()=>{
        document.addEventListener('keydown', handleKeyPress);
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      })

    // only produces effect at initial render
    useEffect(() => {
        alert("component rendered for the first time");
        return () => {
          alert("component is being removed from the DOM");
        };
      }, []); 

    // dependency array
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      }, [count]); // Only re-run the effect if the value stored by count changes

    
// hooks are only called at top level
      // nono
      if (userName !== '') {
        useEffect(() => {
          localStorage.setItem('savedUserName', userName);
        });
      }

      // yesyes
      useEffect(() => {
        if (userName !== '') {
          localStorage.setItem('savedUserName', userName);
        }
      });

// just a solid example
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Shop() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState({});

  useEffect(() => {
    get('/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory && !items[selectedCategory]) {
      get(`/items?category=${selectedCategory}`).then((response) => {
        setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
      });
    };
  }, [selectedCategory, items]);

  if (!categories) {
    return <p>Loading..</p>;
  }

  return (
    <div className='App'>
      <h1>Clothes 'n Things</h1>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2>{selectedCategory}</h2>
      <ul>
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

// separating concerns
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    get('/menu').then(response => {
      setMenu(response.data);
    });
  }, []);

  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get('/news-feed').then(response => {
      setNewsFeed(response.data);
    });
  }, []);

  const [friends, setFriends] = useState(null);
  useEffect(() => {
    get('/friends').then(response => {
      setFriends(response.data);
    });
  }, []);

  return (
    <div className='App'>
      <h1>My Network</h1>
      {!menu ? <p>Loading..</p> : (
        <nav>
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!newsFeed ? <p>Loading..</p> : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!friends ? <p>Loading..</p> : (
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}

// simple final example
import React, { useState, useEffect } from 'react';
 
export default function PageTitle() {
  const [name, setName] = useState('');
 
 useEffect(() => {
    document.title = `Hi, ${name}`;
  }, [name]);
 
  return (
    <div>
      <p>Use {name} input field below to rename this page!</p>
      <input 
        onChange={({target}) => setName(target.value)} 
        value={name} 
        type='text' />
    </div>
  );
}

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

