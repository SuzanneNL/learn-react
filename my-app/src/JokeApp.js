import React from 'react';
import JokeComponent from './components/JokeComponent'

function JokeApp() {
    return (
        <div>
            <JokeComponent
                joke={{
                    question:"joke 1",
                    punchLine:"punchline 1"
                }}
            />
            <JokeComponent
                joke={{
                    question:"joke 2",
                    punchLine:"punchline 2"
                }}
            />
            <JokeComponent
                joke={{
                    punchLine:"punchline 3"
                }}
            />
        </div>
    )
}

export default JokeApp
