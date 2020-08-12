// pages/carpool/search/search.js
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: util.nowTime(new Date()),
    minSelectedTime: util.formatSelectedTime(new Date()),
    maxSelectedTime: util.formatSelectedTime(new Date()),
    minSelectedDate: util.formatDate(new Date()),
    maxSelectedDate: util.formatDate(new Date()),
    nowDate: util.formatDate(new Date()),
    thirtyDaysDate: util.formatDate(new Date(new Date().setDate(new Date().getDate() + 30))),
    direction: true,
    station: ['icon-feiji', 'icon-train', 'icon-Wtrain', 'icon-Etrain', 'icon-Ntrain'],
    stationInfo: [
      ["太平国际机场", "哈尔滨站", "哈尔滨西站", "哈尔滨东站", "哈尔滨北站"],   //Name
      [
        "哈尔滨市道里区迎宾一路", "哈尔滨市南岗区铁路街1号",  //area
        "南岗区哈尔滨大街501号", "道外区桦树街1号", "江北利民大道"
      ],
      [23, 45, 67, 56, 46],   //distance
      [23, 12, 34, 33, 77],   //time
    ],
  },

  bindDateChange: function(e) {
    var id = e.currentTarget.dataset.id;
    if (id === "min") {
      this.setData({
        minSelectedDate: e.detail.value
      });
    } else {
      this.setData({
        maxSelectedDate: e.detail.value
      });
    }
  },

  bindTimeChange: function(e) {
    var id = e.currentTarget.dataset.id;
    if (id === "min") {
      this.setData({
        minSelectedTime: e.detail.value
      });
    } else {
      this.setData({
        maxSelectedTime: e.detail.value
      })
    }
  },

  changeDirection: function() {
    var iconAni = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0'
    });
    var leftWordsAni = wx.createAnimation({
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0'
    });
    var rightWordsAni = wx.createAnimation({
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0'     
    })
    var direction = this.data.direction;
    if (direction) {
      iconAni.rotateZ(180).step();
      leftWordsAni.opacity(0).step({duration: 500});
      rightWordsAni.opacity(1).step({duration: 1000});
      this.setData({
        iconAni: iconAni.export(),
        leftWordsAni: leftWordsAni.export()
      });
      setTimeout(() => {
        this.setData({
          direction: !direction
        })
      }, 500)
      setTimeout(() => {
        this.setData({
          rightWordsAni: rightWordsAni.export()
        })
      }, 550)
    } else {
      iconAni.rotateZ(0).step();
      leftWordsAni.opacity(1).step({duration: 1000});
      rightWordsAni.opacity(0).step({duration: 500});
      this.setData({
        iconAni: iconAni.export(),
        rightWordsAni: rightWordsAni.export()
      });
      setTimeout(() => {
        this.setData({
          direction: !direction
        })
      }, 500)
      setTimeout(() => {
        this.setData({
          leftWordsAni: leftWordsAni.export()
        })
      }, 550)
    }    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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