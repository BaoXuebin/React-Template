import React, { Component } from 'react';
import Wrapper from '../../base/_Wrapper';

class Sub2 extends Component {
    render() {
        return (
            <p>子模块二</p>
        );
    }
}

export default Wrapper(Sub2);
