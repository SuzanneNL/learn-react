import React from 'react';

function MainContent () {
    const firstPart = "This is";
    const lastPart = "my content";
    const date = new Date()
    let hours = date.getHours() 
    const styles = {
        color: "orange",
        fontSize: 30
    }
    
    if (hours > 21 || hours < 6) {
        styles.backgroundColor = "blue"
    }
    else {
        styles.backgroundColor = "yellow"
    }
    
	return (
        <div>
            <p>Version 1: {firstPart + " " + lastPart}</p>
            <p>Version 2: {`${firstPart} ${lastPart}`}</p>
            <p style={styles}>It is currently {hours}.{date.getMinutes()}h</p>
        </div>
    )
}

export default MainContent
