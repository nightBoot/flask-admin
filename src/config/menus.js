const menus = [
  {
    id: 0,
    title: '主页 - 仪表盘',
    type: 'item',
    icon: 'Home',
    url: '/'
  },
  {
    id: 1,
    title: '销售 - 销售订单管理',
    type: 'group',
    icon: 'AccountBalance',
    url: '/order',
    children: [
      {
        id: 2,
        title: '显示销售订单',
        type: 'item',
        url: '/order/test'
      },
      {
        id: 3,
        title: '创建销售订单',
        type: 'item',
        url: '/order/create'
      },
      {
        id: 4,
        title: '跟踪销售订单',
        type: 'group',
        icon: 'ColorLens',
        children: [
          {
            id: 99,
            title: '序列号',
            type: 'group',
            url: '/order/series'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: '销售 - 销售分析',
    icon: 'AddHome',
    type: 'group',
    children: [
      {
        id: 6,
        title: '销售量',
        type: 'item',
        url: ''
      },
    ]
  },
  {
    id: 7,
    title: '销售 - 开票凭证',
    type: 'group',
    icon: 'Analytics',
    children: [
      {
        id: 8,
        title: '显示开票凭证',
        type: 'item',
        url: ''
      },
      {
        id: 9,
        title: '创建开票凭证',
        type: 'item',
        url: ''
      }
    ]
  },
  {
    id: 20,
    title: '图书馆 - 图书管理',
    type: 'group',
    icon: 'Book',
    url: '/book',
    children: [
      {
        id: 21,
        title: '显示书籍',
        type: 'item',
        url: '/book/list'
      },
      {
        id: 22,
        title: '创建书籍',
        type: 'item',
        url: '/book/create'
      }
    ]
  },
  {
    id: 10,
    title: '总账 - 报表',
    type: 'group',
    icon: 'Assistant',
    children: [
      {
        id: 11,
        title: '现金流量表',
        type: 'item',
        url: ''
      },
      {
        id: 12,
        title: '现金日记账',
        type: 'item',
        url: ''
      }
    ]
  },
  {
    id: 13,
    title: '总账 - 分析',
    type: 'group',
    icon: 'Assessment',
    children: [
      {
        id: 14,
        title: '显示总账科目余额',
        type: 'item',
        url: ''
      },
      {
        id: 15,
        title: '日记账分录分析器',
        type: 'item',
        url: ''
      }
    ]
  },
  {
    id: 16,
    title: '生产计划 - MRP 运行',
    type: 'group',
    icon: 'BedroomChild',
    url: ''
  },
  {
    id: 17,
    title: '生产计划 - 产能评估',
    type: 'group',
    icon: 'Build',
    url: ''
  },
  {
    id: 18,
    title: '生产计划 - 需求预测',
    type: 'group',
    icon: 'CameraAlt',
    url: ''
  }
];

export default menus;