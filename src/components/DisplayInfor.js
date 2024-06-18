import React from 'react';
class DisplayInfor extends React.Component {
    render() {
        const {name, age} = this.props.user;
        return (
        <div>My name is {name} and {age}</div>
    );
    }
}
export default DisplayInfor;