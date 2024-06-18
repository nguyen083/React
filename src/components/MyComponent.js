import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {

    //JSX
    render() {
        const user=
        {
            name: 'Nguyên',
            age: '22',
        }
        return (
            <div>
                <UserInfor/>
                <DisplayInfor user = {user}/>
            </div>
        );
    }
}
export default MyComponent