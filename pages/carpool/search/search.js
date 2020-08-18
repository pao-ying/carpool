// pages/carpool/search/search.js
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: util.nowTime(new Date()),
    swiperIndex: 0,
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

  goTeam: function(e) {
    wx.getStorage({
      key: 'userID',
      success(res) {
        var userID = res.data;
        wx.request({
          url: 'http://39.100.192.205:5000/user/team',
          header: {
            'Content-Type': 'application/json'
          },
          data: {
            userID: userID
          },
          success: function(res) {
            console.log(res.data)
            if (!res.data.isTeam) {
              wx.navigateTo({
                url: '../team/team?isTeam=0'
              });
            } else {
              wx.navigateTo({
                url: '../team/team?team=' + JSON.stringify(res.data.team) + 
                      '&members=' + JSON.stringify(res.data.members) + 
                      '&notices=' + JSON.stringify(res.data.notices) + 
                      '&isTeam=1'
              })
            }

          }
        })
      }
    })
  },

  goNotice: function(e) {
    wx.navigateTo({
      url: '../notice/notice'
    })
  },

  bindSwiperChange: function(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
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

  searchTeam: function(e) {
    var data = this.data;
    var 
        direction = data.direction,
        index = data.swiperIndex,
        stationName = data.stationInfo[0],
        minTime = data.minSelectedTime,
        maxTime = data.maxSelectedTime,
        minDate = data.minSelectedDate,
        maxDate = data.maxSelectedDate;
    var
        startAddress = direction? "学校": stationName[index],
        endAddress = direction? stationName[index]: "学校";
    
    var 
        startTime = minDate + " " + minTime,
        endTime = maxDate + " " + maxTime
    
    if (new Date(startTime).getTime() > new Date(endTime).getTime()) {
      wx.showToast({
        title: '日期或时间错误',
        image: '../../icon/error.png'
      })
    } else {
      wx.request({
        url: 'http://39.100.192.205:5000/team/search',
        header: {
          'Content-Type': 'application/json'
        },
        data: {
          startAddress: startAddress,
          endAddress: endAddress,
          startTime: startTime,
          endTime: endTime
        },
        success: function(res) {
          var info = res.data;
          console.log(info)
          if (info.status) {
            wx.navigateTo({
              url: '../result/result?info=' + JSON.stringify(info.team)
            })
          } else {
            wx.showToast({
              title: '格式出错',
              image: '../../icon/error.png'
            })
          }
          
          
        }
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