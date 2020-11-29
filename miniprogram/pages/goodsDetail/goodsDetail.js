// pages/goodsDetail/goodsDetail.js
import DatabaseService from '../../services/db';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTabIndex: 0, // 当前商品详情tab index
    goodsGallery: [],   // 顶部轮播数据
    goodsDescList: [],  // 商品介绍数据
    goodsSpecList: [    // 规格参数数据
      {
        id: 0,
        label: '包装清单',
        type: 'text',
        content: '机器*1 电源线*1 合格证*1 保修卡*1'
      },
      {
        id: 1,
        label: '商品参数',
        type: 'table',
        content: [
          {
            title: '显示',
            subContent: [
              {
                key: '亮度',
                value: '400cd/m2'
              },
              {
                key: '点距',
                value: '其他'
              },
              {
                key: '色数',
                value: '其他'
              },
            ]
          },
          {
            title: '主体',
            subContent: [
              {
                key: '型号',
                value: 'LAB-S01'
              }
            ]
          },
          {
            title: '接口',
            subContent: [
              {
                key: 'VGA',
                value: '1个'
              },
              {
                key: '音频/耳机输出',
                value: '1个'
              },
              {
                key: 'HDMI',
                value: '1个'
              },
              {
                key: 'USB扩展/充电',
                value: '2个'
              }
            ]
          },
          {
            title: '规格',
            subContent: [
              {
                key: '产品尺码（mm）',
                value: '详询客服'
              },
              {
                key: '壁挂规格',
                value: '其他'
              },
              {
                key: '是否支持壁挂',
                value: '其他'
              },
              {
                key: '电源',
                value: '外接电源适配器'
              },
              {
                key: '产品净重（kg）',
                value: '约30kg'
              }
            ]
          },
          {
            title: '其他',
            subContent: [
              {
                key: '商品编号',
                value: '1010101010101'
              }
            ]
          }
        ]
      }
    ],
    goodsInfo: {},  // 商品数据
    goodsAttr: [],  // 商品属性
    skuInfo: [],    // sku数据
    showAttrBox: true, // 商品属性弹窗显示控制
    isBuy: false, //立即购买标志
    selectedAttr: {}, // 已选择的商品属性
    selectedAttrText: "",
    selectedSku: {},  // 根据选择的商品属性匹配到的sku
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { sn } = options;
    this.getGoodsDetail(sn);
  },

  // 获取商品详情
  async getGoodsDetail(sn){
      let res = await DatabaseService.query('goods', { sn });
      if(res[0]){
        const { goodsGallery, goodsDescList, goodsAttr, skuInfo } = res[0];
        this.setData({
          goodsGallery,
          goodsDescList,
          goodsAttr,
          goodsInfo: res[0],
          skuInfo
        })
      }
  },

  // 商详tab切换
  switchTab(e){
    const { index } = e.currentTarget.dataset;
    this.setData({
      currentTabIndex: index
    })
  },

  // 轮播图片预览
  previewImage(e){
    const { url } = e.currentTarget.dataset;
    const { goodsGallery } = this.data;
    wx.previewImage({
      current: url,
      urls: goodsGallery
    });
  },

  // 属性弹窗显示控制
  showGoodsAttrBox(e){
    const { isBuy } = e ? e.currentTarget.dataset : false;
    const { showAttrBox } = this.data;
    this.setData({
      isBuy: isBuy ? true : false,
      showAttrBox: !showAttrBox
    })
  },

  // 选择商品属性
  bindSelectGoodsAttr(e){
    const { attrKey, attrCode } = e.currentTarget.dataset;
    let { skuInfo, goodsAttr, selectedAttr, selectedAttrText, selectedSku } = this.data;

    // 属性选择,重复的移除，非重复的存储
    if(selectedAttr[attrKey] && selectedAttr[attrKey]==attrCode){
      delete selectedAttr[attrKey]
    } else {
      selectedAttr[attrKey] = attrCode;
    }

    // 根据选择的属性到skuInfo中查找相应的sku数据
    let selectedSkuList = [...skuInfo];
    for(let key in selectedAttr){
      selectedSkuList = selectedSkuList.filter((item)=>item[key+'Code']==selectedAttr[key]);

      goodsAttr.forEach((item)=>{
        if(item.attrKey==key){
          let attr = item.list.filter(attr=>attr.code==selectedAttr[key]);
          selectedAttrText = attr[0].value + ",";
        }
      })
    }

    this.setData({
      selectedAttr,
      selectedAttrText,
      selectedSku: selectedSkuList.length==1 ? selectedSkuList[0] : selectedSku
    })
  },

  // 属性弹窗确认按钮
  addCartConfirm(){
    const { isBuy } = this.data;
    if(isBuy){
      this.showGoodsAttrBox();
      wx.navigateTo({
        url: '/pages/createOrder/createOrder'
      })
    } else {
      wx.showToast({
        title: '加入购物车成功！',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false,
        complete: ()=>{
          this.showGoodsAttrBox()
        }
      });
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