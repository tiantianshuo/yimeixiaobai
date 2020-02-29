module.exports = {
    title: '天天説',
    description: 'Just playing around',
    // 主题配置
    themeConfig: {
        lastUpdated: '上次更新:',
        // 所有页面禁用导航栏
        // navbar: false,
        
        // 导航栏logo
        //logo: '/img/logo.png',
        
        // 导航栏
        nav: [
            {text: '首页', link: '/'},
            // 下拉列表
            {
              text: '编程题',
              ariaLabel: 'Language Menu',
              items: [
                { text: 'leetcode', link: '/algorithm/leetcode/' },
                //{ text: '剑指offer', link: '/algorithm/剑指offer/' }
              ]
            },
            {text: 'MySQL', link: '/mysql/'}
        ],

        // 0: 禁用了某页面的标题链接
        sidebarDepth: 0,
        sidebar: [
          {
            title: '编程题',   // 必要的
            children: [
              {
                title: 'Leetcode',
                children: [
                  '/algorithm/leetcode/21','/algorithm/leetcode/53','/algorithm/leetcode/104',
                  '/algorithm/leetcode/121','/algorithm/leetcode/136','/algorithm/leetcode/169',
                  '/algorithm/leetcode/198','/algorithm/leetcode/206','/algorithm/leetcode/234',
                  '/algorithm/leetcode/283','/algorithm/leetcode/338','/algorithm/leetcode/394',
                  '/algorithm/leetcode/448',
                ]
              }
            ]
          },
          {
            title: 'MySQL',
            children: [ '/mysql/MySQL中的悲观锁与乐观锁']
          }
        ],

        displayAllHeaders: true,

        // Git 仓库和编辑链接 https://vuepress.vuejs.org/zh/theme/default-theme-config.html#git-%E4%BB%93%E5%BA%93%E5%92%8C%E7%BC%96%E8%BE%91%E9%93%BE%E6%8E%A5
        repo: 'tiantianshuo/tiantianshuo.github.io',
        repoLabel: '查看源码'
        
    },

    // 插件配置
    plugins: ['mathjax']

}

