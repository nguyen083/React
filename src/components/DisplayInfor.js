import React from 'react';
class DisplayInfor extends React.Component {
    state = {
        check: true,
    }
    handleOnClick = (event) => {
        this.setState({
            check: !this.state.check,
        });
    }
    render() {
        const { listUders } = this.props;
        return (
            <div>
                <span onClick={(event) => { this.handleOnClick(event) }} style={{color: 'blue',textDecoration: 'underline'}}>{this.state.check? 'Hide': 'Show'}</span>
                {
                    this.state.check && <div>
                        {
                            listUders.map((item) => {
                                return (<div key={item.id} class= {item.age >= 26 ? 'red': 'green'}>My name is {item.name} and {item.age} <hr /></div>)
                            })
                        }
                    </div>
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