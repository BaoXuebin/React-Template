import React, { Component } from 'react';
import Wrapper from '../_Wrapper';

class Module1 extends Component {
    render() {
        return (
            <p>子模块二</p>
        );
    }
}

export default Wrapper(Module1);
