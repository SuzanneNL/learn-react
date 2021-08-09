import React from 'react'

function FormComponent(props) {
    return (
        <main>
            <form>
                <h3>Personal information</h3>
                <input 
                    placeholder="First Name"
                    type="text"
                    value={props.data.firstName}
                    name="firstName"
                    onChange={props.handleChange}
                /><br />
                <input 
                    placeholder="Last Name"
                    type="text"
                    value={props.data.lastName}
                    name="lastName"
                    onChange={props.handleChange}
                /><br />
                <input 
                    placeholder="Age"
                    type="text" 
                    value={props.data.age}
                    name="age"
                    onChange={props.handleChange}
                /><br />
                
                <h3>Gender</h3>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    >
                    </input> Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    >
                    </input> Female
                </label>
                <br />
                
                <h3>Location</h3>
                <label>Select your location</label>
                <br />
                    <select
                        name="destination"
                        value={props.data.destination}
                        onChange={props.handleChange}
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
                        onChange={props.handleChange}
                        checked={props.data.isVegetarian}
                    /> Vegetarian
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.isVegan}
                    /> Vegan
                </label>
                <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> Lactose free
                </label>
                
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>
                Your dietary restrictions: 
                <br />
                {props.data.isVegetarian ? "Vegetarian" : ""}
                <br />
                {props.data.isVegan ? "Vegan" : ""}
                <br />
                {props.data.isLactoseFree ? "Lactose Free" : ""}
            </p>
        </main>
    )
}

export default FormComponent