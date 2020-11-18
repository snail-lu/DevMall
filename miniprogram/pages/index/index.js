import { getNavigationBarHeight } from '../../utils/index';
import DatabaseService from '../../services/db';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigationBarHeight: 40,
    statusBarHeight: 20,
    hotWords: [],
    menuList: [],
    tabList: [],
    currentTabId: 101,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const { navigationBarHeight, statusBarHeight } = getNavigationBarHeight();
    const panelData = await DatabaseService.query('configs', {"key": "index-panel"});
    const words = await DatabaseService.query('configs', {"key": "hot-words"});
    const { menuList, bannerList, tabList } = panelData[0];
    const hotWords = words[0].value;
    
    this.setData({
      navigationBarHeight,
      statusBarHeight,
      bannerList,
      menuList,
      tabList,
      currentTabId: tabList[0].id,
      hotWords
    })
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