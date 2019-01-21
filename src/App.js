import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';

import zhCN from 'antd/lib/locale-provider/zh_CN';
import './App.css';
import configureStore from './redux/ConfigureStore';
import RouterApp from './RouterApp';

class App extends Component {
	render() {
		return (
			<LocaleProvider locale={zhCN}>
				<Provider store={configureStore()}>
                    <RouterApp />
				</Provider>
			</LocaleProvider>
		);
	}
}

export default App;
