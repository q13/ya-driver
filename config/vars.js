/**
 * Preset variables
 */
const path = require('path');
const defaultMockServerPort = 3001;
const localhost = '127.0.0.1';

module.exports = {
  // Default npm registry
  registry: 'https://registry.npm.taobao.org',
  templateUri: 'q13/ya-template-vue', // template github url
  npmOnBabel: [ // node_modules中走babel转义的包名前缀
    'ipos-',
    'air-',
    'kbpos-',
    'kbbox-',
    'ya-business',
    'ya-turbine',
    'ya-vue-antd'
  ],
  modeMap: { // Support mode list
    DEV: 'development',
    PROD: 'production',
    SDK: 'sdk'
  },
  browserslist: ['last 2 versions', 'last 3 iOS versions', 'not ie <= 8', 'Android >= 4.4'], // Support browser list
  filenameCommonPrefix: 'plus', // 输出文件前缀
  defaultDevServerPort: 8080, // Default mode == development server port
  defaultProdServerPort: 8081, // Default mode === production server port
  defaultMockServerPort, // Default mock port
  defaultProxyTable: { // 自行配置在此处
    '/mock': {
      target: `http://${localhost}:${defaultMockServerPort}`,
      pathRewrite: {
        '^/mock': '/'
      },
      changeOrigin: true
    }
  },
  localhost, // use 127.0.0.1 serve local server
  defaultTemplateName: 'ya-template-vue', // 默认模板名
  reactVersion: '15.5.4',
  serviceWorkerFilename: 'sw', // 默认service worker name
  patchjsConfig: {
    version: '2.0.2',
    dbType: 'websqldb'
  },
  presetLibs: ['react', 'react-dom', 'react-sets', 'vue', 'vuex', 'vue-router', 'vue-sets'], // 预设可能加载的所有库文件
  jsdocBin: require.resolve('jsdoc/jsdoc.js'),
  jsdocConf: path.resolve(__dirname, './jsdoc-conf.js')
};
