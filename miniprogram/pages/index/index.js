import { getNavigationBarHeight } from '../../utils/index'
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigationBarHeight: 40,
    statusBarHeight: 20,
    hotWords: ['iPhone','荣耀手机','充电宝','毛呢大衣'],
    menuList: [
      {
        id: '1',
        label: '超市',
        icon: '',
      },
      {
        id: '2',
        label: '家电',
        icon: '',
      },
      {
        id: '3',
        label: '服饰',
        icon: '',
      },
      {
        id: '4',
        label: '手机',
        icon: '',
      },
      {
        id: '5',
        label: '手机',
        icon: '',
      },
      {
        id: '6',
        label: '财富',
        icon: '',
      },
      {
        id: '7',
        label: '生鲜',
        icon: '',
      },
      {
        id: '8',
        label: '领券',
        icon: '',
      },
      {
        id: '9',
        label: '免费水果',
        icon: '',
      },
      {
        id: '10',
        label: '全部频道',
        icon: '',
      },
    ],
    tabList: [
      {
        label: '精选',
        desc: '猜你喜欢',
        id: '101'
      },
      {
        label: '自营',
        desc: '急速配送',
        id: '102'
      },
      {
        label: '海购',
        desc: '全球采买',
        id: '103'
      },
      {
        label: '特价',
        desc: '正品低价',
        id: '104'
      }
    ],
    currentTabId: 101,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { navigationBarHeight, statusBarHeight } = getNavigationBarHeight();
    this.setData({
      navigationBarHeight,
      statusBarHeight
    })
    console.log(navigationBarHeight)
  },

  switchTab(e){
    const { id } = e.currentTarget.dataset;
    this.setData({
      currentTabId: id
    })
  },

  // 跳转搜索页面
  toSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  // 跳转商品详情页
  toGoodsDetail(){
    wx.navigateTo({ url: '/pages/goodsDetail/goodsDetail' });
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