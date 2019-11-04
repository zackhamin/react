import React from "react";


class App extends React.Component {
    render() {
        return(
            <div className="App">
                <Counter count={5} />
            </div>
        )
    }
}

class Counter extends React.Component {
    state = {
        count:42
    }
    render() {
        return (<button>{this.state.count}</button>)
    }
}
export default App;