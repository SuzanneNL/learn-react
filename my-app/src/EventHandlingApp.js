import React from 'react'

function App() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovering!")} src="https://www.fillmurray.com/200/100"/>
            <br></br>
            <br></br>
            <button onClick={function() {console.log("I was clicked")}}>Click me</button>
        </div>
    )
}

export default App

// ES6:
// <button onClick={() => console.log("I was clicked")}>Click me</button>

// Separate function:
/* <button onClick={handleClick}>Click me</button>

function handleClick() {
    console.log("I was clicked")
} */
