import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Nguyen',
        address: "Ben Tre",
        age: 26
    };
    render() {
        return (
            <div>
              My name is {this.state.name} form {this.state.address}
            </div>
        );
    }
}
export default MyComponent