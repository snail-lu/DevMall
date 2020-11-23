// pages/addAddress/addAddress.js
import DatabaseService from '../../services/db';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEdit: false,  // 当前为编辑/新增
    addressInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let { id } = options;
    let title = "新增收货地址";
    if(id){
      let addressInfo = await DatabaseService.query('address', { _id: id }, {_id: false});
      title = "编辑收货地址";
      this.setData({
        id,
        addressInfo: addressInfo[0],
        isEdit: true
      })
    }

    wx.setNavigationBarTitle({
      title
    })
  },

  bindInput(e){
    const { addressInfo } = this.data;
    const { type } = e.currentTarget.dataset;
    const value = e.detail.value;

    addressInfo[type] = value;
    this.setData({
      addressInfo
    })
  },

  // 保存
  async onSave(){
    const { isEdit, addressInfo, id } = this.data;
    if(isEdit){
      let res = await DatabaseService.update('address',id, addressInfo);
      console.log(res)
    }
  },

  // 删除地址
  async deleteAddress(e){

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