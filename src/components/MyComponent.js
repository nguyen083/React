import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Nguyen',
        address: "Ben Tre",
        age: 26
    };
    handleClick(event) {
        console.log("Click me button");
        this.setState({
            name: "Nguyễn Huỳnh Nguyên",
            age: Math.floor((Math.random()*100)+1)
        })
    }
    //JSX
    render() {
        return (
            <div>
              My name is {this.state.name} and I'm {this.state.age}
              <br></br>
            <button onClick={(event) => {this.handleClick(event)}} >click me</button>
            </div>
        );
    }
}
export default MyComponent