// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: '发了芽的土豆',
      currentPoint: 780,
      totalPoint: 1000,
      cardNo: 'WX2020101010',
      memberLabel: '钻石会员',
      orderStatusCountMap: {
        waitPayCount: 0,
        waitShipCount: 12,
        waitReceiveCount: 120,
        waitCommentCount: 19,
        refundCount: 7
      }
    },
    orderMenuList: [
      {
        label: '待付款',
        icon: 'unpay',
        countField: 'waitPayCount',
        pageTarget: '/pages/orderList/orderList'
      },
      { 
        label: '待发货',
        icon: 'unship',
        countField: 'waitShipCount',
        pageTarget: '/pages/orderList/orderList'
      }, 
      { 
        label: '待收货',
        icon: 'unreceive',
        countField: 'waitReceiveCount',
        pageTarget: '/pages/orderList/orderList'
      },
      { 
        label: '待评价',
        icon: 'uncomment',
        countField: 'waitCommentCount',
        pageTarget: '/pages/orderList/orderList'
      },
      { 
        label: '退款/售后',
        icon: 'refund',
        countField: 'refundCount',
        pageTarget: '/pages/refundOrderList/refundOrderList'
      }
    ],
    serviceMenuList: [
      {
        label: '优惠券',
        icon: 'coupon',
        pageTarget: '/pages/couponList/couponList'
      },
      { 
        label: '收藏夹',
        icon: 'favorite',
        pageTarget: '/pages/favorites/favorites'
      }, 
      { 
        label: '个人资料',
        icon: 'person',
        pageTarget: '/pages/personInfo/personInfo'
      },
      { 
        label: '地址簿',
        icon: 'address',
        pageTarget: '/pages/addressList/addressList'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  navigateTo(e) {
    const { url } = e.currentTarget.dataset;
    wx.navigateTo({
      url
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