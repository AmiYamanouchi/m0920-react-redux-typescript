import React from 'react'
import ReactDOM from 'react-dom'

interface AppProps {
    color?: string
}

// interface AppState {
//     counter: number
// }

class App extends React.Component<AppProps> {
    state = { counter: 0 }
    // constructor(props: AppProps){
    //     super(props)

    //     this.state = { counter: 0 }
    // }

    onIncrement = (): void => this.setState({ counter: this.state.counter + 1 })
    onDecrement = (): void => this.setState({ counter: this.state.counter - 1 })

    render(){
        return(
            // <div>Hi There</div>
            // <div>{this.props.color}</div>
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                <br/>
                {this.state.counter}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)