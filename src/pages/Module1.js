import React, { Component } from 'react';
import Wrapper from './_Wrapper';

class Module1 extends Component {
    render() {
        return (
            <p>模块一</p>
        );
    }
}

export default Wrapper(Module1);
