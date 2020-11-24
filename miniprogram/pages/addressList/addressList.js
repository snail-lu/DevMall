// pages/addressList/addressList.js
import DatabaseService from '../../services/db';
import Database from '../../services/db';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [], // 地址列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  // 地址新增/编辑
  addAddress(e){
    let { id } = e.currentTarget.dataset;
    let params = id ? "?id="+id : "";
    wx.navigateTo({
      url: '/pages/addAddress/addAddress'+params
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function () {
    let res = await DatabaseService.query('address');
    this.setData({
      addressList: res || []
    })
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