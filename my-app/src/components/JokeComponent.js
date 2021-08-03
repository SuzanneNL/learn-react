import React from 'react';

function JokeComponent(props) {
    return (
        <div>
            <h3 style={{display: props.joke.question ? "block" : "none"}}>Question: {props.joke.question}</h3>
            <h3><span style={{display: props.joke.question ? "inline-block" : "none"}}>Answer: </span><span> {props.joke.punchLine}</span></h3>
            <hr></hr>
        </div>
    )
}


export default JokeComponent