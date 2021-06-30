import React, { useState } from 'react'
import "../src/App.css"


const App = () => {
  const [bg, setBg] = useState("red");
  const [name, setName] = useState('clicked me')

  const bgchange = () => {
    console.log('Press');
    let newBg = "green";
    setBg(newBg);
    setName("Button Clicked");

  }


  return (
    <>
      <div className="button-container-div" >
        <button style={{ backgroundColor: bg }} onClick={bgchange} >{name}</button>
      </div>
    </>


  )

}

export default App
