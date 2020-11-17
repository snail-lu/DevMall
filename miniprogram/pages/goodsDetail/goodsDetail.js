// pages/goodsDetail/goodsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsGallery: [
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_00.jpg',
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_30.jpg',
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_31.jpg',
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_32.jpg',
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_33.jpg',
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_34.jpg'
    ],
    currentTabIndex: 0,
    goodsDescList: [
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_00.jpg',
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_30.jpg',
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_31.jpg',
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_32.jpg',
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_33.jpg',
      'https://pic.bonwebuy.com/sources/images/goods/MB/294974/294974_34.jpg'
    ],
    goodsSpecList: [
      {
        id: 0,
        label: '包装清单',
        type: 'text',
        content: '机器*1 电源线*1 合格证*1 保修卡*1'
      },
      {
        id: 1,
        label: '商品参数',
        type: 'table',
        content: [
          {
            title: '显示',
            subContent: [
              {
                key: '亮度',
                value: '400cd/m2'
              },
              {
                key: '点距',
                value: '其他'
              },
              {
                key: '色数',
                value: '其他'
              },
            ]
          },
          {
            title: '主体',
            subContent: [
              {
                key: '型号',
                value: 'LAB-S01'
              }
            ]
          },
          {
            title: '接口',
            subContent: [
              {
                key: 'VGA',
                value: '1个'
              },
              {
                key: '音频/耳机输出',
                value: '1个'
              },
              {
                key: 'HDMI',
                value: '1个'
              },
              {
                key: 'USB扩展/充电',
                value: '2个'
              }
            ]
          },
          {
            title: '规格',
            subContent: [
              {
                key: '产品尺码（mm）',
                value: '详询客服'
              },
              {
                key: '壁挂规格',
                value: '其他'
              },
              {
                key: '是否支持壁挂',
                value: '其他'
              },
              {
                key: '电源',
                value: '外接电源适配器'
              },
              {
                key: '产品净重（kg）',
                value: '约30kg'
              }
            ]
          },
          {
            title: '其他',
            subContent: [
              {
                key: '商品编号',
                value: '1010101010101'
              }
            ]
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  switchTab(e){
    const { index } = e.currentTarget.dataset;
    this.setData({
      currentTabIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})