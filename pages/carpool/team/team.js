// pages/carpool/team/team.js
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: 0
    // isTeam: 0,
    // startAddress: '太平国际机场',
    // endAddress: '学校',
    // minDate: '2018.08.14',
    // minTime: '16:40',
    // maxDate: '2018.08.15',
    // maxTime: '02:20',
    // contact: 2367994014,
    // remark: '加入我们！加入我们！加入我们！加入我们！加入我们！加入我们！加入我们！加入我们！加入我们！加入我们！',
    // nowNumbers: 4,
    // numbers: 4,
    // female: 3,
    // male:1,
    // members: [
    //   {name: '李大大', sex: '男', isLeader: true, imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'},
    //   {name: '李小小', sex: '女', isLeader: false, imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'},
    //   {name: 'Johe Jackson', sex: '男', isLeader: false, imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'},
    //   {name: '李中中', sex: '女', isLeader: false, imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'}
    // ],
    // notices: [
    //   {type: 0, createTime: '08.01 12:33', imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'},
    //   {type: 1, createTime: '08.01 12:33',imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'},
    //   {type: 2, createTime: '08.01 12:33',imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'},
    //   {type: 3, createTime: '08.01 12:33',imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'},
    //   {type: 4, createTime: '08.01 12:33',imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'},
    //   {type: 5, createTime: '08.01 12:33',imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'},
    //   {type: 6, createTime: '08.01 12:33',imgUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132'}
    // ]
  },

  exitTeam: function(e) {
    wx.getStorage({
      key: 'userID',
      success(res) {
        var userID = res.data;
        wx.request({
          url: 'http://39.100.192.205:5000/team/leave',
          header: {
            'Content-Type': 'application/json'
          },
          data: {
            userID: userID
          },
          success: function(res) {
            var 
                info = res.data,
                title = "";
            if (!info.status) {
              if (info.error === 'user have no team') {
                title = "已无队伍";
              } else if (info.error === 'img is not exists') {
                title = "未授权"
              } else {
                title = "其他错误"
              }
              wx.showToast({
                title: title,
                image: '../../icon/error.png',
                mask: true,
                duration: 1000,
                success() {
                  if (title === "已无队伍") {
                    setTimeout(() => {
                      wx.startPullDownRefresh();
                    }, 1000);
                  }
                }
              })
            } else {
              wx.showModal({
                title: '退出队伍',
                content: '您确定退出嘛？(队长退出将解散队伍)',
                success(res) {
                  if (res.confirm) {
                    title = "退出成功"
                    wx.showToast({
                      title: title,
                      icon: 'success',
                      mask: true,
                      duration: 1000,
                      success() {
                        setTimeout(() => {
                          wx.reLaunch({
                            url: '../search/search'
                          })
                        }, 1000)    
                      }
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

  setTeamInfo: function(e) {
    var that = this;
    wx.getStorage({
      key: 'userID',
      success(res) {
        var userID = res.data;
        wx.request({
          url: 'http://39.100.192.205:5000/user/isLeader',
          header: {
            'Content-Type': 'application/json'
          },
          data: {
            userID: userID
          },
          success: function(res) {
            if (res.data.status) {
              wx.navigateTo({
                url: '../create/create?team=' + JSON.stringify(this.data.team)
                + '&members=' + JSON.stringify(this.data.members) +
                '&isTeam=' + JSON.stringify(true),
                events: {
                  acceptData: function(data) {
                    console.log('acceptData') 
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
                            var options = res.data,
                                isTeam = options.isTeam;
                            // console.log(options)
                            if (isTeam == 1) {
                              var 
                                team = options.team,
                                members = options.members,
                                notices = options.notices,
                                info = {};
                              info.startAddress = team.startAddress;
                              info.endAddress = team.endAddress;
                              info.contact = team.contact;
                              info.female = team.female;
                              info.male = team.male;
                              info.remark = team.remark;
                              info.nowNumbers = team.nowNumbers;
                              info.numbers = team.numbers;
                              [info.minDate, info.minTime] = util.divideDate(new Date(team.startTime + "+08:00"));
                              [info.maxDate, info.maxTime] = util.divideDate(new Date(team.endTime + "+08:00"));
                              for (let index in members) {
                                members[index].createTime = util.removeYear(new Date(members[index].createTime + "+08:00"));
                              }
                              for (let index in notices) {
                                notices[index].createTime = util.removeYear(new Date(notices[index].createTime + "+08:00"));
                              }
                              // console.log(info, members, notices);
                              that.setData({
                                team: team,
                                info: info,
                                members: members,
                                notices: notices
                              });  
                            }
                            that.setData({
                              isTeam: isTeam
                            });            
                          }
                        })
                      }
                    })          
                  }
                }
              })
            } else {
              wx.showToast({
                title: '没有权限',
                image: '../../icon/error.png'
              })
            }
          }
        })
      }
    })
    
    
  },

  createTeam: function(e) {
    var that = this;
    wx.navigateTo({
      url: '../create/create?isTeam=' + JSON.stringify(false),
      events: {
        acceptData: function(data) {
          console.log('acceptData') 
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
                  var options = res.data,
                      isTeam = options.isTeam;
                  // console.log(options)
                  if (isTeam == 1) {
                    var 
                      team = options.team,
                      members = options.members,
                      notices = options.notices,
                      info = {};
                    info.startAddress = team.startAddress;
                    info.endAddress = team.endAddress;
                    info.contact = team.contact;
                    info.female = team.female;
                    info.male = team.male;
                    info.remark = team.remark;
                    info.nowNumbers = team.nowNumbers;
                    info.numbers = team.numbers;
                    [info.minDate, info.minTime] = util.divideDate(new Date(team.startTime + "+08:00"));
                    [info.maxDate, info.maxTime] = util.divideDate(new Date(team.endTime + "+08:00"));
                    for (let index in members) {
                      members[index].createTime = util.removeYear(new Date(members[index].createTime + "+08:00"));
                    }
                    for (let index in notices) {
                      notices[index].createTime = util.removeYear(new Date(notices[index].createTime + "+08:00"));
                    }
                    // console.log(info, members, notices);
                    that.setData({
                      team: team,
                      info: info,
                      members: members,
                      notices: notices
                    });  
                  }
                  that.setData({
                    isTeam: true
                  });            
                }
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
    console.log('load')
    console.log(options)
    var isTeam = options.isTeam;
    // console.log(options)
    if (isTeam == 1) {
      var 
        team = JSON.parse(options.team),
        members = JSON.parse(options.members),
        notices = JSON.parse(options.notices),
        info = {};
      info.startAddress = team.startAddress;
      info.endAddress = team.endAddress;
      info.contact = team.contact;
      info.female = team.female;
      info.male = team.male;
      info.remark = team.remark;
      info.nowNumbers = team.nowNumbers;
      info.numbers = team.numbers;
      [info.minDate, info.minTime] = util.divideDate(new Date(team.startTime + "+08:00"));
      [info.maxDate, info.maxTime] = util.divideDate(new Date(team.endTime + "+08:00"));
      for (let index in members) {
        members[index].createTime = util.removeYear(new Date(members[index].createTime + "+08:00"));
      }
      for (let index in notices) {
        notices[index].createTime = util.removeYear(new Date(notices[index].createTime + "+08:00"));
      }
      // console.log(info, members, notices);
      this.setData({
        team: team,
        info: info,
        members: members,
        notices: notices
      });
      
    }
    this.setData({
      isTeam: isTeam
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('backReady')
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
    var that = this;
    wx.getStorage({
      key: 'userID',
      success(res) {
        var userID = res.data;
        console.log(userID)
        wx.request({
          url: 'http://39.100.192.205:5000/user/team',
          header: {
            'Content-Type': 'application/json'
          },
          data: {
            userID: userID
          },
          success: function(res) {
            var options = res.data,
                isTeam = options.isTeam;
            console.log(options)
            if (isTeam == 1) {
              var 
                team = options.team,
                members = options.members,
                notices = options.notices,
                info = {};
              info.startAddress = team.startAddress;
              info.endAddress = team.endAddress;
              info.contact = team.contact;
              info.female = team.female;
              info.male = team.male;
              info.remark = team.remark;
              info.nowNumbers = team.nowNumbers;
              info.numbers = team.numbers;
              [info.minDate, info.minTime] = util.divideDate(new Date(team.startTime + "+08:00"));
              [info.maxDate, info.maxTime] = util.divideDate(new Date(team.endTime + "+08:00"));
              for (let index in members) {
                members[index].createTime = util.removeYear(new Date(members[index].createTime + "+08:00"));
              }
              for (let index in notices) {
                notices[index].createTime = util.removeYear(new Date(notices[index].createTime + "+08:00"));
              }
              console.log(info, members, notices);
              that.setData({
                info: info,
                members: members,
                notices: notices
              });
              
            }
            that.setData({
              isTeam: isTeam
            });            
          }
        })
      }
    })
    
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