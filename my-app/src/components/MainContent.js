import React from 'react';

function MainContent () {
    const firstPart = "This is";
    const lastPart = "my content";
    const date = new Date()
    let hours = date.getHours() 

	return (
        <div>
            <p>Version 1: {firstPart + " " + lastPart}</p>
            <p>Version 2: {`${firstPart} ${lastPart}`}</p>
            <p>It is currently {hours}.{date.getMinutes()}h</p>
        </div>
    )
}

export default MainContent
