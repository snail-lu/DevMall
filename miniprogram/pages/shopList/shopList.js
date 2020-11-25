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
    this.getShopList();
  },

  // 获取门店列表
  async getShopList(){
    let res = await DatabaseService.query('shops');
    this.setData({
      shopList: res
    })
  },


  // 导航
  shopNavigate(e){
    const { latitude,longitude } = e.currentTarget.dataset.shop;
    if(latitude&&longitude){
      wx.openLocation({
        latitude,
        longitude,
        scale: 14
      });
    }
  },

  // 致电
  makePhoneCall(e){
    const { phone } = e.currentTarget.dataset;
    wx.showModal({
      title: '拨打咨询电话',
      content: phone,
      success: (result) => {
        if(result.confirm){
          wx.makePhoneCall({
            phoneNumber: phone
          });
        }
      }
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