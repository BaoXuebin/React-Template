import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initMatchPath } from '../../redux/actions/CommonAction';

const mapDispatchToProps = dispatch => ({
    initMatchPath: bindActionCreators(initMatchPath, dispatch)
});

export default ChildComponent => connect(null, mapDispatchToProps)(
    class extends Component {
        componentWillMount() {
            const{ location } = this.props;
            // console.log(location);
            this.props.initMatchPath(location);
        }
    
        render() {
            return (
                <ChildComponent params={this.props.match.params} { ...this.props } />
            );
        }
    }
);