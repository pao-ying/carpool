// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  login: function(e) {
    console.log(e)
  },

  bindGetUserInfo: function(e) {
    wx.getStorage({
      key: 'userID',
      success (res) {
        console.log(1)
        var userId = res.data;
        wx.request({
          url: 'http://39.100.192.205:5000/user/img',
          data: {
            imgUrl: e.detail.userInfo.avatarUrl,
            userID: userId
          },
          success (res) {
            console.log(2)
            var re = res.data;
            if (re === "add img success") {
              wx.navigateTo({
                url: '../carpool/search/search'
              })
            }
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          that.setData({
            authorized: true
          })
        } else {
          that.setData({
            authorized: false
          })
        }
      }
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