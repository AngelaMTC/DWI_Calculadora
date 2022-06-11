//Imputs nombres:

import React, { useState } from "react";
import "./App.css";

function App() {

  let student = "Ángela María Talamantes Castañeda ~ 101243 ~ IDGS ~ 9°A";
  let subject = "Desarrollo Web Integral."


  const [people, setPeople] = useState([
    {
      name: "John",
      lastName: "Doe",
      counter: 0,
    },
  ]);

// Funciones:
  // function sumar(a, b) {
  //   return a + b;
  //   }

  // function restar (a, b) {
  //   return a - b;
  //   }
    
  // function multiplicar(a, b) {
  //    return a * b;
  //     }

  // function dividir(a, b) {
  //     return a / b;
  //       }

  const [name, setName] = useState("");
  const [counter, setCounter] = useState("");
  const [lastName, setLastname] = useState("");
  let numberOne = 0;
  let numberTwo = 0;
  // let result = 0;


  return (
    <div className="App">
      <h2 className='textName'>Nombre: {student}</h2>
      <h2 className='textName'>Materia: {subject}</h2>
      <input
        type="text"
        name="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        name="lastName"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setPeople((current) => [{ name, lastName }, ...current]);
        }}
      >
        Add user
      </button>
      <ul>
        {people.map((people, idx) => (
          <li id={idx}>{`${people.name} ${people.lastName}`}</li>
        ))}
      </ul>

      {/* / */}
      
          <div>
          <input type="number" name="fistNumber" onChange={(event) =>{
        numberOne = event.target.value;
        console.log(numberOne);
        }}
        />
        <input type="number" name="secondNumber" onChange={(event) => {
          numberTwo = event.target.value;
          console.log(numberTwo);
        }}/>

        {/* Botones */}
        <button onClick={() => {setCounter((+numberOne) + (+numberTwo))}}>SUMAR</button>
        <button onClick={() => {setCounter(numberOne - numberTwo)}}>RESTAR</button>
        <button onClick={() => {setCounter(numberOne * numberTwo)}}>MULTIPLICAR</button>
        <button onClick={() => {setCounter(numberOne / numberTwo)}}>DIVIDIR</button>
        
        
        {/* <button onClick={() => {setCounter((current) => ({
          ...current === +numberOne + +numberTwo,
        }))}}>SUMAR</button> */}

        {/* <button onClick={() => {setPeople((current) => ({
          ...current,
          counter: current.counter - 1,
        }))}}>RESTAR</button>
        <button onClick={() => {setPeople((current) => ({
          ...current,
          counter: current.counter * 1,
        }))}}>MULTIPLICAR</button>
        <button onClick={() => {setPeople((current) => ({
          ...current,
          counter: current.counter / 1,
        }))}}>DIVIDIR</button> */}


        {/* <button onClick={() => sumar(numberOne, numberTwo)}>SUMAR</button>
        <button onClick={() => restar(numberOne, numberTwo)}>RESTAR</button>
        <button onClick={() => dividir(numberOne, numberTwo)}>DIVIDIR</button>
        <button onClick={() => multiplicar(numberOne, numberTwo)}>MULTIPLICAR</button> */}
        <h1 className='textRed'> Result: {[counter]}</h1>
          </div>

    </div>

  );

}



export default App;
