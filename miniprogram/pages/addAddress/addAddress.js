// pages/addAddress/addAddress.js
import DatabaseService from '../../services/db';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEdit: false,  // 当前为编辑/新增
    addressInfo: {},
    region: [],   // 省市区信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let { id } = options;
    let title = "新增收货地址";
    if(id){
      let addressInfo = await DatabaseService.query('address', { _id: id }, {_id: false, _openid: false});
      title = "编辑收货地址";
      this.setData({
        id,
        addressInfo: addressInfo[0],
        region: addressInfo[0].region,
        isEdit: true
      })
    }

    wx.setNavigationBarTitle({ title })
  },

  // 文本框输入
  bindInput(e){
    const { addressInfo } = this.data;
    const { type } = e.currentTarget.dataset;
    const value = e.detail.value;

    addressInfo[type] = value;
    this.setData({
      addressInfo
    })
  },

  // 省市区选择器
  bindRegionChange(e){
    let { addressInfo } = this.data;
    let region = e.detail.value;
    this.setData({
      "addressInfo.region": region,
      region,
    })
  },

  // 保存
  async onSave(){
    const { isEdit, addressInfo, id } = this.data;

    // 修改
    if(isEdit){
      let res = await DatabaseService.update('address', id, addressInfo);
      let title = "修改失败！";
      if(res.updated>0){
        title = "修改成功！"
        setTimeout(()=>{
          wx.navigateBack({
            delta: 1
          });
        },1500) 
      }
      wx.showToast({
        title: title,
        icon: 'none',
        duration: 1500
      });
    } else {  // 新增
      let res = await DatabaseService.add('address', addressInfo);
      let title = "修改失败！";

      if(res._id){
        title = "新增成功！"
        setTimeout(()=>{
          wx.navigateBack({
            delta: 1
          });
        },1500) 
      }
      wx.showToast({
        title: title,
        icon: 'none',
        duration: 1500
      });
    }
  },

  // 删除地址
  async onDelete(e){
    const { id } = this.data;
    wx.showModal({
      title: '删除',
      content: '确认要删除该收货地址？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: async (result) => {
        if(result.confirm){
          let res = await DatabaseService.remove('address', id);
          let title = "删除失败！";
          if(res.removed>0){
            title = "删除成功！";
            setTimeout(()=>{
              wx.navigateBack({
                delta: 1
              });
            },1500) 
          }

          wx.showToast({
            title,
            icon: 'none',
            duration: 1500,
          });
        }
      },
      fail: ()=>{},
      complete: ()=>{}
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