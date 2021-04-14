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
