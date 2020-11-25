// pages/shopList/shopList.js
import DatabaseService from '../../services/db';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [], //店铺列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation();
    this.getShopList();
  },

  /**
   * 定位
   */
  getLocation(){
    wx.getLocation({
      type: 'wgs84',
      altitude: false,
      success: (res)=>{
        // console.log(result)
        const latitude = res.latitude
        const longitude = res.longitude
        // wx.openLocation({
        //   latitude,
        //   longitude,
        //   scale: 18
        // })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  async getShopList(){
    let res = await DatabaseService.query('shops');
    this.setData({
      shopList: res
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