import React from 'react';
import { Spin } from 'antd';

const Loader = ({ isLoading, error }) => {
    if (isLoading) {
        return (
            <div style={{ width: '100%', textAlign: 'center' }}>
                <Spin size="large" />
            </div>
        );
    } else if (error) {
        return <p>Failed Load.</p>
    }
    return null;
};

export default Loader;