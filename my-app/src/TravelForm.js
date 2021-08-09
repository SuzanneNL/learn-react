import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "male",
            destination: "Paris",
            isVegetarian: false,
            isVegan: false,
            isLactoseFree: false
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            }) 
        : 
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        // Code for submitting here
    }
    
    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <h3>Personal information</h3>
                    <input 
                        placeholder="First Name"
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleChange}
                    /><br />
                    <input 
                        placeholder="Last Name"
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleChange}
                    /><br />
                    <input 
                        placeholder="Age"
                        type="text" 
                        value={this.state.age}
                        name="age"
                        onChange={this.handleChange}
                    /><br />
                    
                    <h3>Gender</h3>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        >
                        </input> Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        >
                        </input> Female
                    </label>
                    <br />
                    
                    <h3>Location</h3>
                    <label>Select your location</label>
                    <br />
                        <select
                            name="destination"
                            value={this.state.destination}
                            onChange={this.handleChange}
                        >
                            <option value="Paris">Paris</option>
                            <option value="London">London</option>
                            <option value="Berlin">Berlin</option>
                        </select>
                    
                    <br />
                    
                    <h3>Dietary restrictions</h3>
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegetarian"
                            onChange={this.handleChange}
                            checked={this.state.isVegetarian}
                        /> Vegetarian
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> Lactose free
                    </label>
                    
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    <br />
                    {this.state.isVegetarian ? "Vegetarian" : ""}
                    <br />
                    {this.state.isVegan ? "Vegan" : ""}
                    <br />
                    {this.state.isLactoseFree ? "Lactose Free" : ""}
                </p>
            </main>
        )
    }
}

export default App
