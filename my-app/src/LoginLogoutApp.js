import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
        
    render() {
        let displayText = this.state.isLoggedIn ? "logged in" : "logged out"
        let buttonText = this.state.isLoggedIn ? "Logout" : "Login"
        return (
            <div>
                <h1>You are {displayText}</h1>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div> 
        )
    }
}

export default App