module.exports = {
    title: '测试',
    description: '对开发和学习过程中遇到的问题进行记录总结',
    base: process.env.NODE_ENV === 'production' ? '/devTools/' : '/',
    // 侧边栏
    themeConfig: {
        // displayAllHeaders: true,
        sidebarDepth: 0,
        sidebar: [
            { title: 'demo', path: '/' },
        ]
    }
}
