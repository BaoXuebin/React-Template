import React, { Component } from 'react';
import Wrapper from '../base/_Wrapper';

class Module1 extends Component {
    render() {
        return (
            <p>模块三</p>
        );
    }
}

export default Wrapper(Module1);
