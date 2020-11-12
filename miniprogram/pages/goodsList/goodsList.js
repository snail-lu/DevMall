// pages/goodsList/goodsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words: "",
    sortList: [
      { prop: 'sales', label:'销量' },
      { prop: 'date', label: '上市时间' }, 
      { prop: 'price', label: '价格' }
    ],
    currentField: 'sales',  // 当前排序字段
    fieldValue: 1,          // 当前排序值 1：降序   2： 升序
    listMode: 1,            // 列表模式   1: 单列   2：双列
    goodsList: ['1','2','3','4','5','6','7']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { words } = options;
    wx.setNavigationBarTitle({ title: words })
    this.getGoodsList(words)
  },

  // 获取商品列表
  getGoodsList(words) {
    console.log(words, 'words')
  },

  // tab栏切换
  changeSortField(e){
    const { field, type } = e.currentTarget.dataset;
    this.setData({
        currentField: field,
        fieldValue: type==1? 2 : 1
    })
  },

  switchListMode(e) {
    const { mode } = e.currentTarget.dataset;
    this.setData({
      listMode: mode==1 ? 2 : 1
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