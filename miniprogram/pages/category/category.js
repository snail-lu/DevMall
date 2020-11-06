// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // mock数据
    categoryList: [
      {
        id: '0',
        label: '热搜推荐'
      },
      {
        id: '1',
        label: '食品酒水'
      },
      {
        id: '2',
        label: '生鲜果蔬'
      },
      {
        id: '3',
        label: '美妆护肤'
      },
      {
        id: '4',
        label: '个护清洁'
      },
      {
        id: '5',
        label: '精品男装'
      },
      {
        id: '6',
        label: '精品女装'
      },
      {
        id: '7',
        label: '内衣配饰'
      },
      {
        id: '8',
        label: '鞋靴箱包'
      },
      {
        id: '9',
        label: '手机数码'
      },
      {
        id: '10',
        label: '家用电器'
      },
      {
        id: '11',
        label: '电脑办公'
      },
      {
        id: '12',
        label: '运动户外'
      },
      {
        id: '13',
        label: '母婴童装'
      },
      {
        id: '14',
        label: '玩具乐器'
      },
      {
        id: '15',
        label: '家具厨具'
      },
      {
        id: '16',
        label: '计生情趣'
      },
      {
        id: '17',
        label: '图书音像'
      },
      {
        id: '18',
        label: '钟表珠宝'
      },
      {
        id: '19',
        label: '奢侈品'
      },
      {
        id: '20',
        label: '京东国际'
      },
      {
        id: '21',
        label: '家具建材'
      },
      {
        id: '22',
        label: '礼品鲜花'
      },
      {
        id: '23',
        label: '生活充值'
      }
    ],
    currentCateIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  //
  async changeCate(e){
    const { index } = e.currentTarget.dataset;
    this.setData({
      currentCateIndex: index
    })

    let systemInfo = wx.getSystemInfoSync()
    console.log(systemInfo)
  }, 

  swiperCate(e){
    this.setData({
      currentCateIndex: e.detail.current
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