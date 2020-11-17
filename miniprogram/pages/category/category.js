// pages/category/category.js
import { getNavigationBarHeight } from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigationBarHeight: 40,
    statusBarHeight: 20,
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
    currentCateIndex: 0,
    scrollHeight: 0,  // 左侧菜单需要滚动的高度
    scrollTop: 0,   // 右侧菜单滚动归零
    hotWords: ['iPhone','荣耀手机','充电宝','毛呢大衣']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { navigationBarHeight, statusBarHeight } = getNavigationBarHeight();
    this.setData({
      navigationBarHeight,
      statusBarHeight
    })
  },

  //点击切换分类
  async changeCate(e){
    const { index } = e.currentTarget.dataset;
    this.setData({
      currentCateIndex: index,
      scrollTop: 0
    })

    // 分类滚动至中间位置
    let systemInfo = wx.getSystemInfoSync();
    let { windowHeight, windowWidth } = systemInfo;
    const { navigationBarHeight,statusBarHeight } = this.data;
    const radio = 750/windowWidth;
    const { offsetTop } = e.currentTarget;
    const cateHeight = 100/radio;
    const scrollHeight = offsetTop + cateHeight/2 - (windowHeight-navigationBarHeight-statusBarHeight)/2
    if(scrollHeight > 0) {
      this.setData({
        scrollHeight: parseInt(scrollHeight),
      })
    }
  },

  // 跳转搜索页面
  toSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },


  // 滑动切换分类
  swiperCate(e){
    this.setData({
      currentCateIndex: e.detail.current
    })
  },

  // 跳转商品列表
  toGoodsList(){
    wx.navigateTo({ url: '/pages/goodsList/goodsList' });
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