module.exports = {
    title: '程序猿GG的日常',
    description: 'Just playing around',
    // 主题配置
    themeConfig: {
        lastUpdated: '上次更新',
        // 所有页面禁用导航栏
        // navbar: false,
        
        // 导航栏logo
        //logo: '/img/logo.png',
        
        // 导航栏
        nav: [
            {text: '首页', link: '/'},
            // 下拉列表
            {
              text: '每日编程',
              ariaLabel: 'Language Menu',
              items: [
                { text: 'leetcode', link: '/algorithm/leetcode/' },
                //{ text: '剑指offer', link: '/algorithm/剑指offer/' }
              ]
            },
            //{text: 'MySQL', link: '/mysql/'},
            {text: 'Linux', link: '/linux/'},
        ],

        // 0: 禁用了某页面的标题链接
        sidebarDepth: 0,
        sidebar: {
          '/linux/':[
            '聊聊老板让我删除日志文件那些事儿'
          ],
          '/algorithm/leetcode/':[
            {
              title:'简单',
              children: [
              '21', '53', '104', '121', '136',
              '169', '198', '206', '225', '234',
              '283', '448', '543', '1013'
              ]
            },
            {
              title:'中等',
              children: ['15','24', '338', '394', ]
            },
            {
              title:'困难',
              children: ['41']
            }
          ]
        },

        displayAllHeaders: true,

        // Git 仓库和编辑链接 https://vuepress.vuejs.org/zh/theme/default-theme-config.html#git-%E4%BB%93%E5%BA%93%E5%92%8C%E7%BC%96%E8%BE%91%E9%93%BE%E6%8E%A5
        repo: 'tiantianshuo/tiantianshuo.github.io',
        repoLabel: '查看源码'
        
    },

    // 插件配置
    plugins: [
      ['mathjax'],
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            moment.locale(lang)
            return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
          }
        }
      ]
    ]

}

