// pages/carpool/create/datetime/datetime.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: '2020.08.01',
    endDate: '2020.11.11',
    startTime: '00:00',
    endTime: '23:59',
    secondStartTime: "00:00"
  },

  firstDateChange: function(e) {
    this.setData({
      firstDate: e.detail.value
    })
  },

  firstTimeChange: function(e) {
    this.setData({
      firstTime: e.detail.value
    })
    
  },

  secondDateChange: function(e) {
    this.setData({
      secondDate: e.detail.value
    })
  },

  secondTimeChange :function(e) {
    this.setData({
      secondTime: e.detail.value
    })
  },

  confirmDate: function(e) {
    var data = this.data;
    if (new Date(data.firstDate + " " + data.firstTime) <= new Date(data.secondDate + " " + data.secondTime)) { 
      var eventChannel = this.getOpenerEventChannel();
      eventChannel.emit('acceptDateTime', {
        minDate: util.dotDate(data.firstDate),
        minTime: data.firstTime,
        maxDate: util.dotDate(data.secondDate),
        maxTime: data.secondTime
      })
      wx.navigateBack({
        delta: 1
      }); 
    } else {
      wx.showToast({
        title: '时间大小错误',
        image: '../../icon/error.png'
      })
    }  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var 
        firstDate = util.lineDate(options.minDate),
        secondDate = util.lineDate(options.maxDate),
        firstTime = options.minTime,
        secondTime = options.maxTime;
    this.setData({
      firstDate: firstDate,
      secondDate: secondDate,
      firstTime: firstTime,
      secondTime: secondTime
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