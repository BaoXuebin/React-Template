const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const Config = require('./src/config/Config');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
        }], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": Config.theme },
        javascriptEnabled: true
    })(config, env);
    return config;
};