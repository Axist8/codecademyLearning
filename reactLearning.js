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

    // pass an event handler as a prop
        // Button.js
        import React from 'react';
        export class Button extends React.Component {
            render() {
                return (
                    <button onClick={this.props.onClick}>
                        Click me!
                    </button>
                );
            }
        }
        // Talker.js 
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { Button } from './Button';
        class Talker extends React.Component {
            handleClick() {
                let speech = '';
                for (let i = 0; i < 10000; i++) {
                    speech += 'blah ';
                }
                alert(speech);
            }
            render() {
                return <Button onClick={this.handleClick} />;
            }
        }
        ReactDOM.render(
            <Talker />,
            document.getElementById('app')
        );

    // this.props.children
        // List.js
        import React from 'react';
        export class List extends React.Component {
            render() {
                let titleText = `Favorite ${this.props.type}`;
                if (this.props.children instanceof Array) {
                    titleText += 's';
                }
                return (
                    <div>
                        <h1>{titleText}</h1>
                        <ul>{this.props.children}</ul>
                    </div>
                );
            }
        }
        // App.js
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { List } from './List';
        class App extends React.Component {
            render() {
                return (
                    <div>
                        <List type='Living Musician'>
                            <li>Sachiko M</li>
                            <li>Harvey Sid Fisher</li>
                        </List>
                        <List type='Living Cat Musician'>
                            <li>Nora the Piano Cat</li>
                        </List>
                    </div>
                );
            }
        }
        ReactDOM.render(
            <App />, 
            document.getElementById('app')
        );

    // default props
    import React from 'react';
    import ReactDOM from 'react-dom';
    class Button extends React.Component {
        render() {
            return (
                <button>
                {this.props.text}
                </button>
            );
        }
    }
    Button.defaultProps = { text: 'I am a button'}
    ReactDOM.render(
        <Button text="" />, 
        document.getElementById('app')
    );

// state
    // defining state / constructor && props
    class Example extends React.Component {
        constructor(props) {
          super(props);
          this.state = { mood: 'decent' };
        }
    }

    //  accessing state
    render() {
        return (
          <h1>
            I'm feeling {this.state.mood}!
          </h1>
        );
      }
    }

    // changing state with this.setState()
    class Example extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                mood:   'great',
                hungry: false
            };
        }
    }
    this.setState({ hungry: true });
        // this.setState automatically rerenders

    // this.x = this.x.bind(this)
    class Example extends React.Component {
        constructor(props) {
          super(props);
          this.state = { weather: 'sunny' };
          this.makeSomeFog = this.makeSomeFog.bind(this);
        }
       
        makeSomeFog() {
          this.setState({
            weather: 'foggy'
          });
        }
    }

    // stateful inheretence
        // Parent.js (stateful)
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { Child } from './Child';

        class Parent extends React.Component {
            constructor(props) {
                super(props);
                this.state = { name: 'Frarthur' };
            }
            render() {
                return <Child name={this.state.name} />;
            }
        }
        ReactDOM.render(<Parent />, document.getElementById('app'));

        // Child.js (stateless)
        import React from 'react';

        export class Child extends React.Component {
            render() {
                return <h1>Hey, my name is {this.props.name}!</h1>;
            }
        }

    // Updating parent state from child
        // Parent
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { ChildClass } from './ChildClass';
        class ParentClass extends React.Component {
            constructor(props) {
                super(props);
                this.state = { totalClicks: 0 };
                this.handleClick = this.handleClick.bind(this);
            }
            handleClick() {
                const total = this.state.totalClicks;
                // calling handleClick will 
                // result in a state change:
                this.setState(
                    { totalClicks: total + 1 }
                );
            }
            // The stateful component class passes down
            // handleClick to a stateless component class:
            render() {
                return (
                    <ChildClass onClick={this.handleClick} />
                );
            }
        }

        // Child
        import React from 'react';
        import ReactDOM from 'react-dom';
        export class ChildClass extends React.Component {
            render() {
                return (
                    // The stateless component class uses
                    // the passed-down handleClick function,
                    // accessed here as this.props.onClick,
                    // as an event handler:
                    <button onClick={this.props.onClick}>
                        Click Me!
                    </button>
                );
            }
        }

    // Siblings
        // Parent
        import React from 'react';
        import ReactDOM from 'react-dom';
        import { Child } from './Child';
        import { Sibling } from './Sibling';
        class Parent extends React.Component {
            constructor(props) {
                super(props);
                this.state = { name: 'Frarthur' };
                this.changeName = this.changeName.bind(this);
            }
            changeName(newName) {
                this.setState({
                    name: newName
                });
            }
            render() {
                return (
                    <div>
                        <Child onChange={this.changeName} />
                        <Sibling name={this.state.name} />
                    </div>
                );
            }
        });
        ReactDOM.render(
            <Parent />,
            document.getElementById('app')
        );

        // Child
        import React from 'react';
        export class Child extends React.Component {
            constructor(props) {
                super(props);
                this.handleChange = this.handleChange.bind(this);
            }
            handleChange(e) {
                const name = e.target.value;
                this.props.onChange(name);
            }
            render() {
                return (
                    <div>
                        <select
                        id="great-names"
                        onChange={this.handleChange}>
                            <option value="Frarthur">Frarthur</option>
                            <option value="Gromulus">Gromulus</option>
                            <option value="Thinkpiece">Thinkpiece</option>
                        </select>
                    </div>
                );
            }
        }

        // Sibling
        import React from 'react';
        export class Sibling extends React.Component {
            render() {
                const name = this.props.name;
                return (
                    <div>
                        <h1>Hey, my name is {name}!</h1>
                        <h2>Don't you think {name} is the prettiest name ever?</h2>
                        <h2>Sure am glad that my parents picked {name}!</h2>
                    </div>
                );
            }
        }