import React, { Component } from 'react';

class Th extends Component {
    render() { 
        return ( 
        <th className={this.props.class}>{this.props.value}</th>
         );
    }
}
 
export default Th;