import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {

    state = {
        listUders: [
            { id: 1, name: 'Nguyên', age: 22 },
            { id: 2, name: 'Phong', age: 22 },
            { id: 3, name: 'Trường', age: 22 },
            { id: 4, name: 'Duy', age: 22 },
            { id: 5, name: 'Phú', age: 22 },
        ],
    }
    //JSX
    render() {
        return (
            <div>
                <UserInfor />
                <DisplayInfor listUders={this.state.listUders} />
            </div>
        );
    }
}
export default MyComponent