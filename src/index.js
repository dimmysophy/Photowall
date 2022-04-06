import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
// //const element = React.createElement('h1', null, 'I love coding with react');
// // const elements = React.createElement('ol', null,
// //   React.createElement('li', null, "List iten 1"),
// //   React.createElement('li', null, 'This is the second list item'),
// //   React.createElement('li', null, 'the third list item'),
// //   React.createElement('li', null, 'The fourth list item')
// // );
// //The array style with arrow function was then introduced to ease the stress of repetting thee lines and having to render only one element on the dom each time.
// const tasks = ["List iten 1", 'This is the second list item', "the third list item", "The fourth list item"]
// //const elements = tasks.map((task, index) => React.createElement('li', { key: index }, task));
// //still this method isnt effective enough ehence we use this
// const element = <div>
//   <h1 > List of items</h1 >

//   <ol>

//     {tasks.map((task) => <li key={task} > {task} </li>)}
//   </ol>
// </div>
// function Hello(props) {
//   return <h1>Hello Team!</h1>

// }
// //const taskss = ['Report the stolen sim', 'Welcome back the older one', 'Recharge the old one', 'insert it into the new one'];
// //const elementss = <ol>
// //{taskss.map((eachtask) => <li>{eachtask}</li>)}
// //</ol>
// class Car {
//   constructor(name, spec) {
//     this.brand = name;
//     this.spec = spec;
//     console.log('the car class just ran');
//   }
//   present() {
//     return this.brand + ' is a brown new model and excatly ' + this.spec;

//   }
// }
// class NewCar extends Car {
//   constructor(name, spec, model) {
//     super(name, spec);
//     this.model = model;
//     console.log('the new car class also just ran now');
//   }
//   show() {
//     return this.present() + ' it is a ' + this.model + ' model, Do u need a ride in it?';
//   }
// }
// const Dimmacar = new Car('Ford', 'my spec');
// const Johns = new NewCar('Venza', '504');
// const press = new NewCar('Toyota muscle', 'my spec', 390);
// console.log(press.show());

// const helo = value => console.log('I love my family ' + value);
// const myHeader = function Header(name) {
//   document.getElementById('mypara').innerHTML = 'I love my God';

// }
// const paragraph = React.createElement('p', null, "This is dimma");
// //React.addAttribute('id') = 'mypara';
// //helo("says Dimma");
//const tasks = ["List iten 1", 'This is the second list item', "the third list item", "The fourth list item"]

ReactDOM.render(<Main></Main>, document.getElementById('root'));

//USIng the keyword extends makes a class to inherit the attribute form another one, it is simply a way of extending the attributes of a class to anther
//still the array method wasnt sufficient enough hence the idea of JSX was introduced

