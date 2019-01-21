import React, { Component } from 'react';
import Wrapper from '../../base/_Wrapper';

class Sub1 extends Component {
    render() {
        return (
            <p>子模块一</p>
        );
    }
}

export default Wrapper(Sub1);
