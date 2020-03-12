import React, { Component } from 'react';

class Input extends Component {
    state = {  }
    render() { 
        return ( 
            <input
                    type="text"
                    className="form-control"
                    value={this.props.value}
                    name={this.props.name}
                    onChange={this.props.onChange}
                  />
         );
    }
}
 
export default Input;