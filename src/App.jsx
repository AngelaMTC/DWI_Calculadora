import React, { useState } from "react";
import "./App.css";

function App() {

  let student = "Ángela María Talamantes Castañeda ~ 191243 ~ IDGS ~ 9°A";
  let subject = "Desarrollo Web Integral."


  const [people, setPeople] = useState([
    {
      name: "Ángela",
      lastName: "TC",
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
      <h2 className='textName' id="textN">Nombre: {student}</h2>
      <h2 className='textName' id="textM">Materia: {subject}</h2>

      <div id="Inputs">
      <input
        id="InName"
        type="text"
        name="name"
        placeholder="Nombre(s)"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        id="InApe"
        type="text"
        name="lastName"
        placeholder="Apellido(s)"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
      <button
        id="BtnAddUsr"
        onClick={() => {
          setPeople((current) => [{ name, lastName }, ...current]);
        }}
      >
        ADD USER
      </button>
      <ul>
        {people.map((people, idx) => (
          <li id={idx}>{`${people.name} ${people.lastName}`}</li>
        ))}
      </ul>
      </div>

      {/* / */}
      
          <div id="Inputs2">
          <input id="InN1" type="number" name="fistNumber" placeholder="Número 1" onChange={(event) =>{
        numberOne = event.target.value;
        console.log(numberOne);
        }}
        />
        <input id="InN2" type="number" name="secondNumber" placeholder="Número 2" onChange={(event) => {
          numberTwo = event.target.value;
          console.log(numberTwo);
        }}/>

        {/* Botones */}
        <button id="BtnSumar" onClick={() => {setCounter((+numberOne) + (+numberTwo))}}>SUMAR</button>
        <button id="BtnRestar" onClick={() => {setCounter(numberOne - numberTwo)}}>RESTAR</button>
        <button id="BtnMultiplicar" onClick={() => {setCounter(numberOne * numberTwo)}}>MULTIPLICAR</button>
        <button id="BtnDividir" onClick={() => {setCounter(numberOne / numberTwo)}}>DIVIDIR</button>
        
        
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
