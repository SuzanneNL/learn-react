import React from 'react';

// Note: the condition should be in the ConditionalRenderingApp,
// and this component should only have code that is displayed when
// the condition is false

function Conditional(props) {
    return (
        <div>
            {props.isLoading ? <h1>Loading...</h1> : 
            <h1>This is the website</h1>}
        </div>
    )
    // if (props.isLoading === true) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }
    // return (
    //     <h1>This is the website</h1>
    // )  
}

export default Conditional