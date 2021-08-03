import React from 'react';

import Joke from './components/Joke'
import jokesData from './components/jokesData'

function JokeApp() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            {jokeComponents}
        </div>
    )
}
export default JokeApp