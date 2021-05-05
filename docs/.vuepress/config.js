const pluginConf = require('./pluginConf.js');
const head = require('./config/head.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    base: process.env.NODE_ENV === 'production' ? '/devTools/' : '/',
    title: 'OldNine的前端life',
    description: '总结收集一些前端功能开发, 记录生活点点滴滴。',
    dest: "public",
    theme: require.resolve('../../theme-reco-vdoing'),
    head,
    themeConfig,
    plugins: pluginConf
}
