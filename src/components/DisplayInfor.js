import React from 'react';
import './DisplayInfor.scss'
// class DisplayInfor extends React.Component {


//     render() {
//         console.log('render');
//         const { listUders } = this.props;
//         return (
//             <div className='display-infor-container'>
//                 {
//                     true && <>
//                         {
//                             listUders.map((item) => {
//                                 return (<><div key={item.id} className={item.age >= 26 ? 'red' : 'green'}>My name is {item.name} and {item.age} </div>
//                                     <button className='btnDel' onClick={() => this.props.handleDeleteUser(item.id)}>Delete</button>
//                                     <hr /></>)
//                             })
//                         }

//                     </>
//                 }
//                 {/* {
//                     listUders.map((item) => {
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
            const { listUders } = props;
        return (
            <div className='display-infor-container'>
                {
                    true && <>
                        {
                            listUders.map((item) => {
                                return (<><div key={item.id} className={item.age >= 26 ? 'red' : 'green'}>My name is {item.name} and {item.age} </div>
                                    <button className='btnDel' onClick={() => props.handleDeleteUser(item.id)}>Delete</button>
                                    <hr /></>)
                            })
                        }
                    </>
                }
            </div>
        );
}
export default DisplayInfor;