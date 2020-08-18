// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: 1
  },
  
  go: function(e) {
    var that = this;
    wx.navigateTo({
      url: 'test0/test0',
      events: {
        accept: function(e) {
          wx.request({
            url: 'http://127.0.0.1:5000',
            header: {
              'Content-Type': 'application/json'
            },
            success: function(res) {
              that.setData({
                a: 2
              })
            }
          })
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
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