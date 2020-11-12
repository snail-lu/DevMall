//Page Object
Page({
  data: {
    hotWords: ['iphone 11', '华为Mate 40', '天猫双11', '京东双11'], // 热门搜索
    searchRecords: [],   // 最近搜索
    searchWords: "",     // 搜索内容
  },

  // 删除搜索记录
  async deleteSearchRecords(){        
    let res = await wx.showModal({ content:'确认要删除最近搜索记录吗？'});
    if(res.confirm){
        wx.removeStorageSync('searchRecord');
        this.setData({
          searchRecord: []
        })
    }                                               
  },

  // 搜索框输入
  searchInput(e){
      this.setData({                   
          searchWords: e.detail.value.trim(),
      })
  },

  // 搜索
  submitSearch(e){
    let { searchWords, searchRecord } = this.data;
    if(searchWords.length>0){

      //判断搜索历史中是否已经有该关键字
      if(searchRecord.indexOf(searchWords)<0){
        if(searchRecord.length<20){
          searchRecord.unshift(searchWords);
        }else{
          searchRecord.pop();
          searchRecord.unshift(searchWords);
        }
      }
      
      wx.setStorageSync('searchRecord', searchRecord);
      wx.navigateTo({ url: '/pages/goodsList/goodsList?words='+ searchWords})
    }else{
      wx.showToast({
        title: '请输入要搜索的关键字',
        icon: 'none',
      });
    }
    
  },

  // 最近搜索和热搜词搜索
  wordsSearch(e){
    const { value } = e.currentTarget.dataset;
    wx.navigateTo({ url: '/pages/goodsList/goodsList?words=' + value})
  },

  //options(Object)
  onLoad: function(options){
    this.setData({
      searchRecord: wx.getStorageSync("searchRecord") || []
    })
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});