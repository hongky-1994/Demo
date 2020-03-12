import React, { Component } from 'react';

class Td extends Component {
    state = {  }
    render(props) { 
        return ( 
        <td className="data">{this.props.value}</td>
         );
    }
}
 
export default Td;