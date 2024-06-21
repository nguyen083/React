import React, { useState } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {

//     state = {
//         listUders: [
//             { id: 1, name: 'Nguyên', age: 26 },
//             { id: 2, name: 'Phong', age: 27 },
//             { id: 3, name: 'Trường', age: 25 },
//             { id: 4, name: 'Duy', age: 20 },
//             { id: 5, name: 'Phú', age: 28 },
//         ],
//     }
//     handleUserInfor = (userObject) => {
//         this.setState({
//             listUders: [userObject, ...this.state.listUders],
//         });

//         // This is bad code

//         // let listUdersNew = this.state.listUders;
//         // listUdersNew.unshift(userObject);
//         // this.setState({
//         //     listUders: listUdersNew,
//         // });
//     }
//     handleDeleteUser = (userId) => {
//         let listUdersNew = this.state.listUders;
//         listUdersNew = listUdersNew.filter(item =>
//             item.id !== userId
//         );
//         this.setState({
//             listUders: listUdersNew,
//         });
//     }
//     //JSX
//     render() {
//         return (
//             <>
//                 <div className="a">
//                     <UserInfor handleUserInfor={this.handleUserInfor} />
//                     <DisplayInfor listUders={this.state.listUders}  handleDeleteUser = {this.handleDeleteUser}/>
//                 </div>
//             </>
//         );
//     }
// }
const MyComponent = (props) => {
    const [listUsers, setlistUsers] = useState([
        { id: 1, name: 'Nguyên', age: 26 },
        { id: 2, name: 'Phong', age: 27 },
        { id: 3, name: 'Trường', age: 25 },
        { id: 4, name: 'Duy', age: 20 },
        { id: 5, name: 'Phú', age: 28 },
    ]);
    const handleUserInfor = (userObject) => {
        setlistUsers(
             [userObject, ...listUsers]
        );
    }
    const handleDeleteUser = (userId) => {
        let listUsersNew = listUsers;
        listUsersNew = listUsersNew.filter(item =>
            item.id !== userId
        );
        setlistUsers(
             listUsersNew,
        );
    }
        return (
            <>
                <div className="a">
                    <UserInfor handleUserInfor={handleUserInfor} />
                    <DisplayInfor listUsers={listUsers}  handleDeleteUser = {handleDeleteUser}/>
                </div>
            </>
        );
}
export default MyComponent