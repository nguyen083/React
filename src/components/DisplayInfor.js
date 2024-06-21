import React, { useEffect, useState } from 'react';
import './DisplayInfor.scss'
// class DisplayInfor extends React.Component {


//     render() {
//         console.log('render');
//         const { listUsers } = this.props;
//         return (
//             <div className='display-infor-container'>
//                 {
//                     true && <>
//                         {
//                             listUsers.map((item) => {
//                                 return (<><div key={item.id} className={item.age >= 26 ? 'red' : 'green'}>My name is {item.name} and {item.age} </div>
//                                     <button className='btnDel' onClick={() => this.props.handleDeleteUser(item.id)}>Delete</button>
//                                     <hr /></>)
//                             })
//                         }

//                     </>
//                 }
//                 {/* {
//                     listUsers.map((item) => {
//                         // return item.age >= 26 ? (
//                         //     <div key={item.id} class="red">My name is {item.name} and {item.age} <hr /></div>
//                         // ) : (<div key={item.id} class="green">My name is {item.name} and {item.age}<hr /></div>);
//                         return (<div key={item.id} class= {item.age >= 26 ? 'red': 'green'}>My name is {item.name} and {item.age} <hr /></div>)


//                     })
//                 } */}
//             </div>
//         );
//     }
// }
const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShow, setIsShow] = useState(true);
    const handleShowHide = () => {
        setIsShow(!isShow);
    }
    useEffect(() =>{
        console.log('call useEffect');
        if(listUsers.length===0)
            {
                alert('listUsers empty');
            }
    },[listUsers]);

    console.log('render');
    return (
        <div className='display-infor-container'>
            {
                <div>
                    <button style={{color: 'blue'}} onClick={() => handleShowHide()}>{isShow ===true ? 'Hide' : 'Show'}</button>
                    {isShow && <>
                        {
                            listUsers.map((item) => {
                                return (<><div key={item.id} className={item.age >= 26 ? 'red' : 'green'}>My name is {item.name} and {item.age} </div>
                                    <button className='btnDel' onClick={() => props.handleDeleteUser(item.id)}>Delete</button>
                                    <hr /></>)
                            })
                        }
                    </>
                    }</div>
            }
        </div>
    );
}
export default DisplayInfor;