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
    // loops
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
                name: 'xu',
                discipline: 'dominion',
                weapon: 'magus'
            },
            jack: {
                name: 'ryu',
                discipline: 'power',
                weapon: 'strength'
            }
        }
        // for in
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

    