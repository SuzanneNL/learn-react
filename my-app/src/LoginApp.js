import React from "react"
import { render } from "react-dom"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

// My solution:
    render() {
        return (
            <div>
                <h1><span>You are currently logged </span>
                    <span style={{display: this.state.isLoggedIn ? "inline-block" : "none"}}> in</span>
                    <span style={{display: !this.state.isLoggedIn ? "inline-block" : "none"}}>  out</span></h1>
            </div>
        )
    }
}

// Official solution:
// render() {
//     let wordDisplay
//     if (this.state.isLoggedIn === true) {
//         wordDisplay = "in"
//     } else {
//         wordDisplay === "out"
//     }
//     return (
//         <div>
//             <h1>You are currently logged {wordDisplay}</h1>
//         </div>
//     )
// }

export default App