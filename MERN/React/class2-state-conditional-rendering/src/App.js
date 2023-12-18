import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//Problem: Jab hum click per variable update karrahe hain, to UI per wo variable
//updated nahi araha.

//Solution: State
//Kaam: Jab update hoti to UI per update value ajati hai
//1. Jab state update hoti hai to component rerender hota hai.
//2. States are directly immutable (direct change nahi hosakti)

function App() {
  const [meme, setMeme] = useState("Mast joke mara!");
  //[<state ka name>, <state update karne ka method>] = useState(<intial value>)
  const [show, setShow] = useState(true);

  function updateMeme() {
    setMeme("Moye Moye!");
  }

  function reverseMeme() {
    const reverse = meme.split("").reverse().join("");
    setMeme(reverse);
  }

  function hide() {
    setShow(false);
  }

  function dikhao() {
    setShow(true);
  }

  function toggle() {
    setShow(!show);

    // if (show === true) {
    //   setShow(false)
    // } else {
    //   setShow(true)
    // }
  }

  return (
    <div>
      <h2>{meme}</h2>

      <button onClick={updateMeme}>Update</button>
      <button onClick={reverseMeme}>Reverse</button>

      <br />
      <br />
      <br />

      <button onClick={hide}>Hide</button>
      <button onClick={dikhao}>Show</button>
      <button onClick={toggle}>Toggle</button>

      <br />
      <br />
      <br />

      {show && <img src={logo} width="200" />}
    </div>
  );
}

export default App;
