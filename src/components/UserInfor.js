import React from "react";
class UserInfor extends React.Component {

    state = {
        name: '',
        age: '',
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
            
        });
    }
    
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    }
    handleonSubmit = (event) => {
        event.preventDefault();// ngăn chặn sự kiện mặc định load lại trang
        this.props.handleUserInfor({
            id: Math.random().toString(36).substr(2, 9),
            name: this.state.name,
            age: this.state.age,
        });
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <br></br>
                <form onSubmit={(event => { this.handleonSubmit(event) })}>
                    <input type="text" value={this.state.name} onChange={(event) => { this.handleOnChangeName(event) }} />
                    <input type="text" value={this.state.age} onChange={(event) => { this.handleOnChangeAge(event) }} />
                    <button type="submit">Submit</button>
                </form></div>
        );
    }
}
export default UserInfor;