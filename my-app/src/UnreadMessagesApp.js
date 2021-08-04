import React, {Component} from "react"

// Conditional statements part 2
class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "Call your mom!",
                "New spam email available. All links are definitely safe to click."
            ]
        }
    }
    
    render() {
        return (
            <div>
                {
                    //this.state.unreadMessages.length > 0 ?
                    // <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                    // null
                    this.state.unreadMessages.length > 0 &&
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App