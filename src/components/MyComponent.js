import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Nguyen',
        address: "Ben Tre",
        age: 26
    };
    handleClick = (event) => {
        console.log("Click me button");
        console.log(event);
    }
    handleOnMoveOver(event){
        console.log(event);
    }
    //JSX
    render() {
        return (
            <div>
              My name is {this.state.name} form {this.state.address}
              <br></br>
            <button onClick={this.handleClick} on onMouseOver={this.handleOnMoveOver}>click me</button>
            </div>
        );
    }
}
export default MyComponent