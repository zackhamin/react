import React from "react";

const Person = (props) => {
    return (
        <div>
            <h1>My name is {props.name}</h1>
        </div>
    )
}

class App extends React.Component {
    state = {
        persons: [
            {name: "Alex", age: 18, pet: "Molly"},
            {name: "Ben", age: 21, pet: "Sammi"},
            {name: "Charlie", age: 25, pet: "Tommy"},            
        ]
    }
    switchNameHandler = (newName) => {
        this.setState(
            {
                persons:[
                    {name: newName, age:"10", pet:"Polly"},
                    {name:"Ben", age:"16", pet:"Sami"},
                    {name:"Charlie", age:"22", pet:"Tommy"},
                ]
            }
        )
    }
    render(){
        return(
            <div>
                <Person name = {this.state.persons[0].name} age = {this.state.age} />
                <Person name = {this.state.persons[1].name} />
                <Person name = {this.state.persons[2].name} />
                <button onClick = {() => this.switchNameHandler("Brian")}>Click me</button>
            </div>
        )
    }
}

export default App;


