import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "male",
            favColor: "red"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    handleSubmit(event) {
        // Code for submitting here
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <textarea 
                    value={"Some default value"}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input 
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br />
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                <br />
                <label>
                    Your favorite color
                    <br></br>
                    <select
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"
                    >
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                    </select>
                </label>

                <h3>{this.state.firstName} {this.state.lastName}</h3>
                <h3>You are a {this.state.gender} and your favorite color is {this.state.favColor}</h3>
                <button>Submit</button>
            </form>
        )
    }
}

export default App