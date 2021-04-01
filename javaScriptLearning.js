// single line comment
/* multiple line
comment */

/* Datatypes: 
    Strings,
    numbers,
    booleans,
    null,
    undefined,
    symbol,
    Object

'example' (typeof = 'String') etc */

// switch (case scenario)
    switch(expression) {
        case x:
            console.log(`it's ${x}`);
        break;
        case y:
            console.log(`it's ${y}`);
        break;
        default:
            console.log('what');
    }

// ternaryRefactor:
    let signal = 'walk';
    if (signal === 'walk') {
        console.log('walk')
    } else {
        console.log('stop')
    };
        // refactor
    signal === 'walk' ? console.log('walk') : console.log('stop');

// functionDeclaration:
    function example() {
        console.log('example');
    }
// functionExpression:
    const example = function(parameter) {
        console.log('example');
    }
// arrowFunction:
    const example = parameter => console.log(parameter);

function defaults(default='functions can have default parameters'){};



// Arrays:
    const axist = ['alpha', 'beta', 'gamma', 'delta'];
    axist.push('zeta');
    axist.pop;

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]
    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    let fruits = ['Apple', 'Banana', 'mango']
    let first = fruits.shift() // remove Apple from the front
    let newLength = fruits.unshift('Strawberry') // add to the front
    let pos = fruits.indexOf('Banana') // 1
    let removedItem = fruits.splice(pos, 1) // removed banana

    // Iterators:
        const infin = [1, 2, 3, 4, 5];

        infin.forEach(number => console.log(number));

        const bigNumbers = infin.map(number => number * 10);

        const smallerNumbers = infin.filter(number => number < 4);

        const threesPos = infin.findIndex(number => number === 3);

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const infinSum = infin.reduce(reducer); // adds em all together

        const isEven = element => element % 2 === 0;
        const evenNumbers = infin.some(isEven);

        


// Loops:
    let arra = [1, 2, 3]
    // for
        for (let i = 0; i < arra.length; i++) {
            example();
        }
    // while
        let j = 0;
        while (j < Array.length) {
            example();
            j++
        }
    // do while
        let k = 0;
        do {
            example();
        } while (k < arra.length);

// Objects:
    // property naming and calling convention
        const spaceShip = {
            'fuel type': 'turbo',
            fuelType: 'atom'
        }
        spaceShip['fuel type'] // 'turbo'
        spaceShip.fuelType // 'atom'
    // methods
        const zombie = {
            eatBrain(){
                console.log('nom');
            },
        }
        zombie.eatBrain();
    // for in loop
        const ranks = {
            ace: {
                name: 'axist',
                discipline: 'focus',
                weapon: 'doubleStaffs'
            },
            king: {
                name: 'darkener',
                discipline: 'holy',
                weapon: 'sword'
            },
            queen: {
                name: 'noxia',
                discipline: 'dominion',
                weapon: 'magus'
            },
            jack: {
                name: 'ryu',
                discipline: 'power',
                weapon: 'strength'
            }
        }
        for (let rank in ranks) {
            console.log(`The ${rank}, ${ranks[rank].name}, has come with ${ranks[rank].discipline} weilding their ${ranks[rank].weapon}!`)
        }

    // getter setter
        const bigObject = {
            _name: 'biggie',
            _size: 'enormous',
            _favorite: 'i dont know',
            get name() {
                return this._name;
            },
            get size() {
                return this._size;
            },
            set favorite(newFav) {
                if (typeof newFav === 'string') {
                    _favorite = newFav;
                } else {
                    console.log('danger will robinson');
                }
            }
        }
    // factory function
        const buildUser = (name, age, gender, email) => {
            name,
            age,
            gender,
            email
        }

//Interacting with html:
    // basics
        <script id="whatever" src="file.js"></script>
        
        document.body.innerHTML = '<h1>example</h1>'; 
        document.querySelector('p');
        document.getElementById('someId').innerHTML = 'example';
        let blueStyle = document.querySelector('.blue');
        blueStyle.style.backgroundColor = 'blue';
        document.querySelector('.blue').style.fontFamily = 'Roboto';
        let paragraph = document.createElement('p');
        paragraph.id = 'info'; 
        paragraph.innerHTML = 'The text inside the paragraph';
        document.body.appendChild(paragraph);
        document.body.removeChild(paragraph);
        document.getElementById('sign').hidden = true;

    // implementation
        let element = document.querySelector("button");
        function turnButtonRed (){
            element.style.backgroundColor = "red";
            element.style.color = "white";
        }
        element.onclick = turnButtonRed;

        let eventTarget = document.getElementById('targetElement');
        function eventHandlerFunction() {
            // this block of code will run when click event happens
        }
        eventTarget.addEventListener('click', eventHandlerFunction);

        eventTarget.onclick = eventHandlerFunction;
        eventTarget.removeEventListener('click', eventHandlerFunction);

        function eventHandlerFunction(event){
            console.log(event.timeStamp);
         }
         eventTarget.addEventListener('click', eventHandlerFunction);

// classes:
    class HospitalEmployee {
        constructor(name) {
            this._name = name;
            this._remainingVacationDays = 20;
        }
        
        static generatePassword() {
            const randomNumber = Math.floor(Math.random()*10001);
            return randomNumber;
        }
    
        get name() {
            return this._name;
        }
        
        get remainingVacationDays() {
            return this._remainingVacationDays;
        }
        
        takeVacationDays(daysOff) {
            this._remainingVacationDays -= daysOff;
        }
    }
    
    class Nurse extends HospitalEmployee {
        constructor(name, certifications) {
            super(name);
            this._certifications = certifications;
        } 
        
        get certifications() {
            return this._certifications;
        }
        
        addCertification(newCertification) {
            this.certifications.push(newCertification);
        }
    }
    
    const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
    nurseOlynyk.takeVacationDays(5);
    nurseOlynyk.addCertification('Genetics');
    
// modules:
    // .exports
        let Menu = {};
        Menu.specialty = "Roasted Beet Burger with Mint Sauce";
        module.exports = Menu; 
    
    // module.exports
        module.exports = {
            specialty: "Roasted Beet Burger with Mint Sauce",
            getSpecialty: function() {
                return this.specialty;
            } 
        }; 

    // require()
        const Menu = require('./menu.js');
        function placeOrder() {
            console.log('My order is: ' + Menu.specialty);
        }
        placeOrder();

    // export default
        let Menu = {};
        export default Menu;

    // import
        import Menu from './menu';

    // named exports
        let specialty = '';
        function isVegetarian() {
        }; 
        function isLowSodium() {
        }; 
        export { specialty, isVegetarian };

    // export named exports
        export let specialty = '';
        export function isVegetarian() {
        }; 
        function isLowSodium() {
        }; 

    // named imports
        import { specialty, isVegetarian } from './menu';

    // export as
        let specialty = '';
        let isVegetarian = function() {
        }; 
        let isLowSodium = function() {
        }; 
        export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

    // import as
        import { chefsSpecial, isVeg } from './menu';

// errors:
    console.log(Error('Your password is too weak.'));
    console.log(new Error('Your password is too weak.'));

    throw Error('Something wrong happened'); 
    console.log('This will never run');

    try {
        throw Error('Danger Will Robinson!');
    } catch (e) {
        console.log(e);
    }
      // Prints: Danger Will Robinson! && will continue to run

// Asynchronous computing and Promises
    // Promise
    const executorFunction = (resolve, reject) => {
        if (someCondition) {
            resolve('I resolved!');
        } else {
            reject('I rejected!'); 
        }
    }
    const myFirstPromise = new Promise(executorFunction);

    // setTimeout
    const delayedHello = () => {
        console.log('Hi! This is an asynchronous greeting!');
    };   
    setTimeout(delayedHello, 2000);

    const returnPromiseFunction = () => {
        return new Promise((resolve, reject) => {
          setTimeout(( ) => {resolve('I resolved!')}, 1000);
        });
    };       
    const prom = returnPromiseFunction();

    // .then
    let prom = new Promise((resolve, reject) => {
        let num = Math.random();
        if (num < .5 ){
          resolve('Yay!');
        } else {
          reject('Ohhh noooo!');
        }
    });   
    const handleSuccess = (resolvedValue) => {
        console.log(resolvedValue);
    };   
    const handleFailure = (rejectionReason) => {
        console.log(rejectionReason);
    };   
    prom.then(handleSuccess, handleFailure);

    // .catch
    prom
        .then((resolvedValue) => {
          console.log(resolvedValue);
        })
        .catch((rejectionReason) => {
          console.log(rejectionReason);
        });

    // chaining
    firstPromiseFunction()
        .then((firstResolveVal) => {
          return secondPromiseFunction(firstResolveVal);
        })
        .then((secondResolveVal) => {
          console.log(secondResolveVal);
        });

    // .all
    let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
    myPromises
        .then((arrayOfValues) => {
            console.log(arrayOfValues);
        })
        .catch((rejectionReason) => {
            console.log(rejectionReason);
        });

    // async
    async function myFunc() {
        // Function body here
    };
    const myFunc = async () => {
        // Function body here
    };  
    myFunc();

    // promise conversion to async
    function withConstructor(num){
        return new Promise((resolve, reject) => {
            if (num === 0){
                resolve('zero');
            } else {
                resolve('not zero');
            }
        })
    }  
    withConstructor(0)
        .then((resolveValue) => {
            console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
        })      
    async function withAsync(num) {
        if (num === 0){
            return 'zero';
        } else {
            return 'not zero';
        }
    }
    withAsync(100)
        .then((resolveValue) => {
            console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
        })

    // await
        // The await keyword can only be used inside an async function. 
    function myPromise = () => {
        return new Promise(executorFunction);
    }
    async function asyncFuncExample(){
        let resolvedValue = await myPromise();
        console.log(resolvedValue);
    }   
    asyncFuncExample();

    // promise chain refactored to async await chain
    function nativePromiseVersion() {
        returnsFirstPromise()
        .then((firstValue) => {
            console.log(firstValue);
            return returnsSecondPromise(firstValue);
        })
       .then((secondValue) => {
            console.log(secondValue);
        });
    }
    async function asyncAwaitVersion() {
        let firstValue = await returnsFirstPromise();
        console.log(firstValue);
        let secondValue = await returnsSecondPromise(firstValue);
        console.log(secondValue);
    }

    // try catch in async functions
    async function usingTryCatch() {
        try {
          let resolveValue = await asyncFunction('thing that will fail');
          let secondValue = await secondAsyncFunction(resolveValue);
        } catch (err) {
          // Catches any errors in the try block
          console.log(err);
        }
    }

    // concurrent async functions
    async function waiting() {
        const firstValue = await firstAsyncThing();
        const secondValue = await secondAsyncThing();
        console.log(firstValue, secondValue);
    }    
    async function concurrent() {
        const firstPromise = firstAsyncThing();
        const secondPromise = secondAsyncThing();
        console.log(await firstPromise, await secondPromise);
    }

    // await promise.all
    async function asyncPromAll() {
        const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
        for (let i = 0; i<resultArray.length; i++){
          console.log(resultArray[i]); 
        }
    }

/* JavaScript libraries — Usually one or more JavaScript files containing 
custom functions that you can attach to your web page to speed up or enable 
writing common functionality. Examples include jQuery, Mootools and React.
JavaScript frameworks — The next step up from libraries, JavaScript frameworks 
(e.g. Angular and Ember) tend to be packages of HTML, CSS, JavaScript, and other 
technologies that you install and then use to write an entire web application from scratch. 
The key difference between a library and a framework is “Inversion of Control”. 
When calling a method from a library, the developer is in control. With a framework, 
the control is inverted: the framework calls the developer's code. */

// JSON - APIs - Requests
    // converting JSON data into JavaScript JSON.parse
    const jsonData = '{ "book": { "name": "JSON Primer", "price": 29.99, "inStock": true, "rating": null } }';
    const jsObject = JSON.parse(jsonData);
        // converts to object

    // converting JavaScript into JSON data JSON.stringify
    const jsObject = { book: 'JSON Primer', price: 29.99, inStock: true, rating: null };
    const jsonData = JSON.stringify(jsObject);
    
    // Boilerplate
        // GET AJAX request using an XMLHttpRequest object
        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                return xhr.response;
            }
        }
        xhr.open('GET', url);
        xhr.send();

        // POST AJAX request using an XMLHttpRequest object
        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';
        const data = JSON.stringify({id: '200'});
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                return xhr.response;
            }
        }
        xhr.open('POST', url);
        xhr.send(data);

        // .fetch GET
        fetch('https://api-to-call.com/endpoint').then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message))
        .then(jsonResponse => jsonResponse);

        // .fetch POST
        fetch('https://api-to-call.com/endpoint', {
            method: 'POST',
            body: JSON.stringify({id: '200'})
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
            }, networkError => console.log(networkError.message))
        .then(jsonResponse => {
            return jsonResponse
        });

        // async GET
        const getData = async () => {
            try {
              const response = await fetch('https://api-to-call.com/endpoint');
              if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
              }
              throw new Error('Request failed!');
            } catch (error) {
              console.log(error);
            }
        };

        // async POST
        const getData = async () => {
            try {
              const response = await fetch('https://api-to-call.com/endpoint', {
                method: 'POST',
                body: JSON.stringify({id: 200})
              });
              if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
              }
              throw new Error('Request failed!');
            } catch (error) {
              console.log(error);
            }
        }

// destructuring 
    // arrays
    let cars = ['ferrari', 'tesla', 'cadillac'];
    let [car1, car2, car3] = cars;
    console.log(car1, car2, car3); // Prints: ferrari tesla cadillac

    // object property assignment
    let destinations = { x: 'LA', y: 'NYC', z: 'MIA' };
    let { x, y, z } = destinations;
    console.log(x, y, z); // Prints LA NYC MIA

    // function parameters
    let truck = {
        model: '1977 Mustang convertible',
        maker: 'Ford',
        city: 'Detroit',
        year: '1977',
        convertible: true
    };   
    const printCarInfo = ({model, maker, city}) => {
        console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
    };   
    printCarInfo(truck);
      // Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit.

// for.. of loop
    // typical for loop
    const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
    for (let i = 0; i < hobbies.length; i++) {
        console.log(`I enjoy ${hobbies[i]}.`);
    }
    // for.. of
    for (const hobby of hobbies) {
        console.log(`I enjoy ${hobby}.`);
    }
    // use on strings
    const username = 'joe';
    for (const char of username) {
        console.log(char);
    }
    // break
    const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
    for (const bird of strangeBirds) {
        if (bird === 'Basan'){ 
            break; 
        }
        console.log(bird);
    }
    // continue
    const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
    for (const bird of strangeBirds) {
        if  (bird === 'Cow'){
            continue;
        }
        console.log(bird);
    }