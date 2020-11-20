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
    activityCutTime: "00:00:00"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const { navigationBarHeight, statusBarHeight } = getNavigationBarHeight();
    const panelData = await DatabaseService.query('configs', {"key": "index-panel"});
    const words = await DatabaseService.query('configs', {"key": "hot-words"});
    const { menuList, bannerList, tabList, activity } = panelData[0];
    const hotWords = words[0].value;
    
    this.startActivityTimer(activity);
    this.setData({
      navigationBarHeight,
      statusBarHeight,
      bannerList,
      menuList,
      tabList,
      activity,
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

  // 活动计时器
  startActivityTimer(info){
    if(info.dateInfo.leftoverTime>0){
      let leftoverTime = info.dateInfo.leftoverTime;
      this.timer = setInterval(()=> {
        let h = parseInt(leftoverTime/3600);
        let m = parseInt((leftoverTime%3600)/60);
        let s = parseInt(leftoverTime%60);
        let _h = h<10?'0'+h:h;
        let _m = m<10?'0'+m:m;
        let _s = s<10?'0'+s:s;
        this.setData({
          activityCutTime: _h+':'+_m+':'+_s
        })
        leftoverTime--;
      }, 1000)
    }
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
    clearInterval(this.timer);
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