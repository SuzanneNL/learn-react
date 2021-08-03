import React from 'react';

function FunctionBasedApp(props){
    return (
        <div>
            <h1>Name = {props.name}</h1>
        </div>
    )
}

class ClassBasedApp extends React.Component {

    myMethodHere() {
        
    }

    render() {
        const style = this.myMethodHere()
        return (
            <div>
                <h1>Code here{this.props.name}</h1>
            </div>
        )
    }
}

export default ClassBasedApp