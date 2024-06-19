import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {

    state = {
        listUders: [
            { id: 1, name: 'Nguyên', age: 26 },
            { id: 2, name: 'Phong', age: 27 },
            { id: 3, name: 'Trường', age: 25 },
            { id: 4, name: 'Duy', age: 20 },
            { id: 5, name: 'Phú', age: 28 },
        ],
    }
    handleUserInfor = (userObject) => {
        this.setState({
            listUders: [userObject,...this.state.listUders],
        });

        // This is bad code
        
        // let listUdersNew = this.state.listUders;
        // listUdersNew.unshift(userObject);
        // this.setState({
        //     listUders: listUdersNew,
        // });
    }
    //JSX
    render() {
        return (
            <div>
                <UserInfor handleUserInfor={this.handleUserInfor} />
                <DisplayInfor listUders={this.state.listUders} />
            </div>
        );
    }
}
export default MyComponent