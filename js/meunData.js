var meunList = [
  {
    path: '/home',
    title: '首页',
    icon: 'icon-home',
  },
  {
    path: '/link',
    title: '链接',
    icon: 'icon-iconfontbi',
  },
  {
    path: '/movie',
    title: '电影',
    icon: 'icon-iconfontcomputer',
    children: [
      {
        path: '/movie/action',
        title: '动作片',
        icon: '',
      },
      {
        path: '/movie/comedy',
        title: '喜剧片',
        icon: 'icon-iconfont20',
      },
    ]
  },

  {
    path: '/game',
    title: '游戏',
    icon: 'icon-home2',
    children: [
      {
        path: '/game/online',
        title: '网络游戏',
        icon: 'icon-iconfont1',
        children: [
          {
            path: '/game/online/starsWar',
            title: '星际争霸',
            icon: 'icon-iconfontcog',
          }
        ]
      },
      {
        path: '/game/offline',
        title: '单机游戏',
        icon: '',
        children: [
          {
            path: '/game/offline/redWar',
            title: '红色警戒',
            icon: '',
          }
        ]
      },
    ]
  }

]
