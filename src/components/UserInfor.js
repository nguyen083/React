import React from "react";
class UserInfor extends React.Component {
    state = {
        name: 'Nguyên',
        address: "Bến Tre",
        age: '22',
    };

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    handleonSubmit = (event) => {
        event.preventDefault();// ngăn chặn sự kiện mặc định load lại trang
        console.log(this.state);
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <br></br>
                <form onSubmit={(event => { this.handleonSubmit(event) })}>
                    <input type="text" value={this.state.name} onChange={(event) => { this.handleOnChange(event) }} />
                    <button type="submit">Submit</button>
                </form></div>
        );
    }
}
export default UserInfor;