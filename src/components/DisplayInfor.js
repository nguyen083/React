import React from 'react';
import './DisplayInfor.scss'
class DisplayInfor extends React.Component {
    constructor(props) {
        console.log('constructor: 1');
        super(props);
        this.state = {
            check: true,
        }
    }

    componentDidMount() {

        console.log('componentDidMount');
        setTimeout(() => {
            document.title = "DisplayInfor"
        }, 3000)
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
    }
    handleOnClick = (event) => {
        this.setState({
            check: !this.state.check,
        });
    }
    render() {
        console.log('render');
        const { listUders } = this.props;
        return (
            <div className='display-infor-container'>
                {/* <img src={logo} alt="logo" /> */}
                <span onClick={(event) => { this.handleOnClick(event) }} style={{ color: 'blue', textDecoration: 'underline' }}>{this.state.check ? 'Hide' : 'Show'}</span>
                {
                    this.state.check && <>
                        {
                            listUders.map((item) => {
                                return (<><div key={item.id} className={item.age >= 26 ? 'red' : 'green'}>My name is {item.name} and {item.age} </div>
                                    <button className='btnDel' onClick={() => this.props.handleDeleteUser(item.id)}>Delete</button>
                                    <hr /></>)
                            })
                        }

                    </>
                }
                {/* {
                    listUders.map((item) => {
                        // return item.age >= 26 ? (
                        //     <div key={item.id} class="red">My name is {item.name} and {item.age} <hr /></div>
                        // ) : (<div key={item.id} class="green">My name is {item.name} and {item.age}<hr /></div>);
                        return (<div key={item.id} class= {item.age >= 26 ? 'red': 'green'}>My name is {item.name} and {item.age} <hr /></div>)
                            
                        
                    })
                } */}
            </div>
        );
    }
}
export default DisplayInfor;