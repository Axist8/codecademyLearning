// React

    // NPM command for initiating a new react app
    npx create-react-app my-app
    cd my-app
    npm start

// JSX
    // jsx spanning more than one line must be encapsulated by ()
    // a jsx element must begin and end with the same html tag. div for safety
    // a class tag must be denoted by className
    // self closing tags must include the /
    // if statements do not work inside JSX
    // ternary operator = used often => x ? y : z;

    //imports
    import React from 'react';
    import ReactDOM from 'react-dom';

    // rendering jsx
    const helloWorld = <h1>Hello world</h1>;
    ReactDOM.render(helloWorld, document.getElementById('app'));

    // JavaScript inside JSX inside Javascript
    const meta = <h1>{2 + 3}</h1>; // will show as 5

    //variables as attributes
    const sideLength = "200px";
    const panda = (
        <img 
            src="images/panda.jpg" 
            alt="panda" 
            height={sideLength} 
            width={sideLength} />
        );

    //Event Listeners
    function myFunc() {
        console.log("I've been clicked");
    }   
    <img onClick={myFunc} />

    // &&
    const tasty = (
        <ul>
          <li>Applesauce</li>
          { !baby && <li>Pizza</li> }
          { age > 15 && <li>Brussels Sprouts</li> }
          { age > 20 && <li>Oysters</li> }
          { age > 25 && <li>Grappa</li> }
        </ul>
    );

    // .map
    const strings = ['Home', 'Shop', 'About Me'];
    const listItems = strings.map(string => <li>{string}</li>);
    <ul>{listItems}</ul>

    // keys
    const liKeys = (
    <ul>
        <li key="li-01">Example1</li>
        <li key="li-02">Example2</li>
        <li key="li-03">Example3</li>
    </ul>
    ) // used to keep lists in order & give list elements memory

    // .map keys
    const peopleLis = people.map((person, i) =>
        <li key={'person_' + i}>{person}</li>
    );

    // .createElement
    const h1 = React.createElement(
        "h1",
        null,
        "Hello, world"
      );

// Components
class MyComponentClass extends React.Component {
    render() {
      return <h1>Hello world</h1>;
    }
}
ReactDOM.render(
    <MyComponentClass />, 
    document.getElementById('app')
);

// using object variables as elements in JSX
const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width:  '200px'
};
class RedPanda extends React.Component {
    render() {
      return (
        <div>
          <h1>Cute Red Panda</h1>
          <img 
            src={redPanda.src}
            alt={redPanda.alt}
            width={redPanda.width} />
        </div>
      );
    }
}

// including functions in render
class Random extends React.Component {
    render() {
      const n = Math.floor(Math.random() * 10 + 1);
      return <h1>The number is {n}!</h1>;
    }
}
class TodaysPlan extends React.Component {
    render() {
      let task;
      if (!apocalypse) {
        task = 'learn React.js'
      } else {
        task = 'run around'
      }
  
      return <h1>Today I am going to {task}!</h1>;
    }
}

// .this
class IceCreamGuy extends React.Component {
    get food() {
      return 'ice cream';
    }
   
    render() {
      return <h1>I like {this.food}.</h1>;
    }
}

// events
class MyClass extends React.Component {
    myFunc() {
      alert('Stop it.  Stop hovering.');
    }
   
    render() {
      return (
        <div onHover={this.myFunc}>
        </div>
      );
    }
}

// rendering components with components
class OMG extends React.Component {
    render() {
      return <h1>Whooaa!</h1>;
    }
}
class Crazy extends React.Component {
    render() {
      return <OMG />;
    }
}

// import export
    // import
    import { NavBar } from './NavBar.js'; // .js optional

    // export
    export class NavBar extends React.Component {
        render() {
          const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
          const navLinks = pages.map(page => {
            return (
              <a href={'/' + page}>
                {page}
              </a>
            )
          });
          return <nav>{navLinks}</nav>;
        }
      }

// props
    // .this props
    class PropsDisplayer extends React.Component {
        render() {
            const stringProps = JSON.stringify(this.props);
            return (
                <div>
                    <h1>CHECK OUT MY PROPS OBJECT</h1>
                    <h2>{stringProps}</h2>
                </div>
            );
        }
    }
    ReactDOM.render(<PropsDisplayer myProp='Hello' />, document.getElementById('app'));

    // props examples
    <Greeting name="Frarthur" town="Flundon" age={2} haunted={false} /> // non strings are kept in curly braces

    // accessing props
    class Greeting extends React.Component {
        render() {
          return <h1>Hi there, {this.props.firstName}</h1>;
        }
    }
    ReactDOM.render(
        <Greeting firstName='Axist' />, 
        document.getElementById('app')
    );

    // passing props
        // Greeting.js
        import React from 'react';
        export class Greeting extends React.Component {
            render() {
                return <h1>Hi there, {this.props.name}!</h1>;
            }
        }
        // App.js
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { Greeting } from './Greeting.js';
        class App extends React.Component {
            render() {
                return (
                    <div>
                    <h1>
                        Hullo and, "Welcome to The Newzz," "On Line!"
                    </h1>
                    <Greeting name='Axist' />
                    <article>
                        Latest newzz:  where is my phone?
                    </article>
                    </div>
                );
            }
        }
        ReactDOM.render(
        <App />, 
        document.getElementById('app')
        );

    // Rendering different things based on props
        // Welcome.js
        import React from 'react';
        import ReactDOM from 'react-dom';
        export class Greeting extends React.Component {
            render() {
  	            if (this.props.signedIn === false) {
  	                return <h1>GO AWAY</h1>;
  	            } else {
  	                return <h1>Hi there, {this.props.name}!</h1>;
  	            }
            }
        }
        // Home.js
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { Greeting } from './Greeting';
        class App extends React.Component {
            render() {
                return (
                    <div>
                        <h1>
                            Hullo and, "Welcome to The Newzz," "On Line!"
                        </h1>
                        <Greeting name="Alison" signedIn={true} />
                        <article>
                            Latest:  where is my phone?
                        </article>
                    </div>
                );
            }
        }
        ReactDOM.render(
            <App />, 
            document.getElementById('app')
        );

