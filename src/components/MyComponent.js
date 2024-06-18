import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Nguyên',
        address: "Bến Tre",
        age: '22',
    };
    handleClick = (event) => {
        console.log("Click me button");
        this.setState({
            name: "Nguyễn Huỳnh Nguyên",
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    handleonSubmit = (event) => {
        event.preventDefault();// ngăn chặn sự kiện mặc định load lại trang
        console.log(this.state);
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <br></br>
                <form onSubmit={(event => { this.handleonSubmit(event) })}>
                    <input type="text" value={this.state.name} onChange={(event) => { this.handleOnChange(event) }} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default MyComponent