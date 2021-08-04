import React, {Component} from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    

    componentDidMount() {
        // GET the data I need to correctly display something (f.e. API call)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever)
        // do something important here
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }

    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // f.e. remove event listener
    }

    render () {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App
