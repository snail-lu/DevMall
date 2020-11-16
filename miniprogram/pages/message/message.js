// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideButtons: [{
      text: '标为已读'
    },
    {
      type: 'warn',
      text: '删除'
    }],
    newsList: [
      {
        id: 0,
        status: 0,
        type: 0,
        title: '优惠券到账',
        date: '2020年08月19日 19:23:12',
        desc: '中秋送礼买一送一优惠券到账'
      },
      {
        id: 1,
        status: 0,
        type: 1,
        title: '优惠券到期',
        date: '2020年08月19日 19:23:12',
        desc: '中秋送礼买一送一优惠券已过期'
      },
      {
        id: 2,
        status: 0,
        type: 2,
        title: '消费成功通知',
        date: '2020年08月19日 19:23:12',
        desc: 'A123441实付232元'
      },
      {
        id: 3,
        status: 0,
        type: 1,
        title: '您的优惠券两天后过期',
        date: '2020年08月19日 19:23:12',
        desc: '中秋送礼买一送一优惠券2天后过期'
      },
      {
        id: 4,
        status: 0,
        type: 3,
        title: '积分变更',
        date: '2020年08月19日 19:23:12',
        desc: '消费抵扣3000积分'
      },
      {
        id: 5,
        status: 0,
        type: 4,
        title: '等级变更',
        date: '2020年08月19日 19:23:12',
        desc: '恭喜您升级为钻石会员！'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 按钮事件处理
  slideButtonTap(e) {
    const newsIndex = e.currentTarget.dataset.index
    const { index } = e.detail;
    const { newsList } = this.data;

    if(index==0) { // 标为已读
      newsList[newsIndex].status = 1;
      this.setData({
        newsList
      })
    } else if(index==1) { // 删除消息
      newsList.splice(newsIndex, 1);
      this.setData({
        newsList
      })
      wx.showToast({
        title: '删除成功',
        icon: 'none',
        duration: 1000
      })
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