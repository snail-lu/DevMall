// pages/points/points.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pointsList:[ // mock data
      {
        date: '2020年11月',
        list: [
          {
            change_type: '订单结算送积分',
            change_date: '11月12日 19:01',
            change_point: '+30'
          },
          {
            change_type: '订单结算送积分',
            change_date: '11月01日 19:32',
            change_point: '+30'
          }
        ]
      },
      {
        date: '2020年10月',
        list: [
          {
            change_type: '订单结算送积分',
            change_date: '10月12日 19:01',
            change_point: '+30'
          },
          {
            change_type: '订单结算送积分',
            change_date: '10月01日 19:32',
            change_point: '+30'
          }
        ]
      }
    ],
    page: 1,
    pageSize: 20,
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getPointsList(1,20)
  },

  async getPointsList(Page_Index, Page_Size){
    var reqTask = wx.request({
      url: '',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        this.setData({
          pointsList: this.data.pointsList.concat(this.dataTransform(result.RESULTS)),
          total: result.TOTAL
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  dataTransform(data){
    if(data && data.length>0){
      data = data.map(item=>{
        let newItem = {};
        for(let key in item){
          if(key=="CHANGE_DATE"){
            newItem[key.toLocaleLowerCase()] = item[key].replace('T',' ');
          }else{
            newItem[key.toLocaleLowerCase()] = item[key];
          }
        }
        return newItem;
      })
      return data;
    }else{
      return [];
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
    let { page,pageSize,total } = this.data;
    if(page*pageSize<total){
      page++;
      this.getPointsList(page,pageSize);
      this.setData({ page })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})