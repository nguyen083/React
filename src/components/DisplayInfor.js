import React from 'react';
class DisplayInfor extends React.Component {
    render() {
        const { listUders } = this.props;
        return (
            <div>
                {
                    listUders.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>My name is {item.name} and {item.age}</p>
                            </div>
                        );
                    })
                }
                {/* My name is {name} and {age} */}
            </div>
        );
    }
}
export default DisplayInfor;