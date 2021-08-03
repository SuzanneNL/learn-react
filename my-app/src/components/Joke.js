import React from 'react';

function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3><span style={{display: props.question ? "inline-block" : "none"}}>Answer: </span><span> {props.punchLine}</span></h3>
            <hr></hr>
        </div>
    )
}


export default Joke