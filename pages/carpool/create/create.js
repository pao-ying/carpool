// pages/carpool/create/create.js
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    create: false,
    contactInputFocus: false,
    remarkInputFocus: false,
    slideButtons: [{
      type: 'warn',
      text: '删除',
      extClass: 'icon-del'
    }],
    addressArray: [
      ['学校', '太平国际机场', '哈尔滨站', '哈尔滨西站', '哈尔滨东站', '哈尔滨北站'],
      ['太平国际机场', '哈尔滨站', '哈尔滨西站', '哈尔滨东站', '哈尔滨北站']
    ],
    addressIndex: [0, 0],
  },

  bindMultiChange: function(e) {
    this.setData({
      addressIndex: e.detail.value
    })
  },

  bindMultiColumnChange: function(e) {
    var 
        column = e.detail.column,
        value = e.detail.value,
        index = this.data.addressIndex,
        array = this.data.addressArray;
    index[column] = value;
    if (column === 0) {
      if (value === 0) {
        array[1] = ['太平国际机场', '哈尔滨站', '哈尔滨', '哈尔滨西站', '哈尔滨东站', '哈尔滨北站']
      } else {
        array[1] = ['学校']
      }
    }
    this.setData({
      addressArray: array,
      addressIndex: index
    })
  },

  setDateTime: function(e) {
    var 
        that = this,
        data = this.data;
    wx.navigateTo({
      url: 'datetime/datetime?minDate=' + data.minDate + "&minTime=" + data.minTime 
      + "&maxDate=" + data.maxDate + "&maxTime=" + data.maxTime + "&nowNumbers",
      events: {
        acceptDateTime: function(e) {
          that.setData({
            minDate: e.minDate,
            minTime: e.minTime,
            maxDate: e.maxDate,
            maxTime: e.maxTime
          })
        }
      }
    })
  },

  getRemarkSum: function(e) {
    this.setData({
      remark: e.detail.value,
      remarkSum: e.detail.value.length
    })
  },

  setContact: function(e) {
    this.setData({
      contact: e.detail.value
    })
  },

  getInputFocus: function(e) {
    var id = e.currentTarget.dataset.id;
    if (id === "number") {
      this.setData({
        numberInputFocus: true
      })
    } else if(id === "contact") {
      this.setData({
        contactInputFocus: true
      })
    } else {
      this.setData({
        remarkInputFocus: true
      })
    }

  },

  numbersChange: function(e) {
    this.setData({
      numberInput: true,
      numbersIndex: e.detail.value
    })
  },

  slideButtonTap: function(e) {
    console.log(e.currentTarget.dataset.id)
    var 
        index = e.currentTarget.dataset.id,
        otherUserID = this.data.members[index].userID,
        that = this;
    console.log(otherUserID)
    wx.getStorage({
      key: 'userID',
      success(res) {
        var userID = res.data;
        wx.showModal({
          title: '提示',
          content: '您确定请出该参与者？',
          success(res) {
            if (res.confirm) {
              wx.request({
                url: 'http://39.100.192.205:5000/user/move',
                header: {
                  'Content-Type': 'application/json'
                },
                data: {
                  leaderID: userID,
                  memberID: otherUserID
                },
                success: function(res) {
                  var 
                  info = res.data, title;
                  if (!info.status) {
                    if (info.error === "leader have no team") {
                      title= '您无队伍';
                    } else if (info.error === "member have no team") {
                      title = "参与人已退出"
                    } else if (info.error === "img is not exists") {
                      title = "未授权";
                    } else {
                      title = "其他错误";
                    }
                    wx.showToast({
                      title: title,
                      image: '../../icon/error.png'
                    })
                  } else {
                    var members = that.data.members;
                    members.splice(index, 1);
                    that.setData({
                      members: members
                    })   
                  }
                }
              })
            }

          }
        })

      }
    })
  },

  createTeam: function(e) {
    var data = this.data, 
        channel = this.getOpenerEventChannel();
    console.log(data.contact + "")
    if (!data.numberInputFocus) {
      wx.showToast({
        title: '需求人数未填',
        image: '../../icon/error.png'
      })
    } else if (data.contact == undefined) {
      wx.showToast({
        title: '联系方式未填',
        image: '../../icon/error.png'
      })
    } else {
      return new Promise(function (resolve, reject) {
        wx.getStorage({
          key: 'userID',
          success(res) {
            var userID = res.data;
            var info = {};
            info.startAddress = data.addressArray[0][data.addressIndex[0]];
            info.endAddress = data.addressArray[1][data.addressIndex[1]];
            info.startTime = util.lineDate(data.minDate) + " " + data.minTime;
            info.endTime = util.lineDate(data.maxDate) + " " + data.maxTime;
            info.numbers = data.numbersArray[data.numbersIndex];
            info.contact = data.contact;
            info.remark = data.remark;
            info.userID = userID;
            wx.request({
              url: 'http://39.100.192.205:5000/team/add',
              header: {
                'Content-Type': 'application/json'
              },
              data: info,
              success: function(res) {
                console.log(res.data)
                channel.emit('acceptData');
                wx.navigateBack({
                  delta: 1
                });
              }
            })
          }
        })
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var 
        isTeam = JSON.parse(options.isTeam),
        startAddress, endAddress, minDate, maxDate, minTime, maxTime, remark, numbersIndex = 0;
    if (isTeam) {
      var 
          team = JSON.parse(options.team),
          members = JSON.parse(options.members),
          sDate = new Date(team.startTime + "+08:00"),
          eDate = new Date(team.endTime + "+08:00"),
          startAddress = team.startAddress,
          endAddress = team.endAddress,
          contact = team.contact,
          remark = team.remark,
          nowNumbers = team.nowNumbers,
          numbers = team.numbers,
          [minDate, minTime] = util.divideDate(sDate),
          [maxDate, maxTime] = util.divideDate(eDate),
          numbersArray = [];
      if (nowNumbers == 4) {  
        numbersArray.push(4);
        numbersIndex = 0;
      } else {
        for (var index = (nowNumbers == 1? 2: nowNumbers); index <=4; index ++) {
          if (index == numbers) {
            numbersIndex = numbersArray.length;
          }
          numbersArray.push(index);
        }
      }
      this.setData({
        team: team,
        startAddress: startAddress,
        endAddress: endAddress,
        contact: contact,
        nowNumbers: nowNumbers,
        numbers: numbers,
        remark: remark,
        remarkSum: remark.length,
        minDate: minDate,
        minTime: minTime,
        maxDate: maxDate,
        maxTime: maxTime,
        members: members,
        isTeam: isTeam,
        numbersIndex: numbersIndex,
        numbersArray: numbersArray,
        numberInput: true
      })
    } else {
      this.setData({
        startAddress: '学校',
        endAddress: '太平国际机场',
        remark: '快来加入我们吧',
        remarkSum: 7,
        minDate: util.divideDate(new Date())[0],
        minTime: util.divideDate(new Date())[1],
        maxDate: util.divideDate(new Date())[0],
        maxTime: util.divideDate(new Date())[1],
        numbersArray: [2, 3, 4],
        numbersIndex: 0,
        isTeam: false,
        numberInput: false
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
    var data = this.data,
        channel = this.getOpenerEventChannel();
    if (data.isTeam) {
      return new Promise(function (resolve, reject) {
        wx.getStorage({
          key: 'userID',
          success(res) {
            var userID = res.data;
            var info = {};
            if (data.addressArray[0][data.addressIndex[0]] != data.team.startAddress || 
                data.addressArray[1][data.addressIndex[1]] != data.team.endAddress) {
              info.startAddress = data.addressArray[0][data.addressIndex[0]];
              info.endAddress = data.addressArray[1][data.addressIndex[1]];
            }
            if (new Date(util.lineDate(data.minDate) + " " + data.minTime).getTime() != new Date(data.team.startTime + "+08:00").getTime() ||
                new Date(util.lineDate(data.maxDate) + " " + data.maxTime).getTime() != new Date(data.team.endTime + "+08:00").getTime()) {
              info.startTime = util.lineDate(data.minDate) + " " + data.minTime;
              info.endTime = util.lineDate(data.maxDate) + " " + data.maxTime;
            }
            if (data.numbersArray[data.numbersIndex] != data.team.numbers) {
              info.numbers = data.numbersArray[data.numbersIndex];
            }
            if (data.contact != data.team.contact) {
              info.contact = data.contact;
            }
            if (data.remark != data.team.remark) {
              info.remark = data.remark;
            }
            info.userID = userID;
            wx.request({
              url: 'http://39.100.192.205:5000/team/modify',
              header: {
                'Content-Type': 'application/json'
              },
              data: info,
              success: function(res) {
                channel.emit('acceptData')
                console.log(res.data)
              }
            })
          }
        })
      })
    }
    
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