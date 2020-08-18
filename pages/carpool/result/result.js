var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // info: [
    //     {"teamID": 1, "leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 0, "female": 1, "remark": "快来玩吧!快来玩吧!快来玩吧!快来玩吧!快来玩吧!快来玩吧!快来玩吧!快来玩吧!快来玩吧!快来玩吧!"},
    //     {"teamID": 2,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 1, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 3,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 4,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 5,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 6,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 7,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 8,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},       
    //     {"teamID": 9,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 10,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 11,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 12,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 13,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"},        
    //     {"teamID": 14,"leaderImgUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ92vuknlfSNqyuZMP0ZN2zEL0lvgV8vOsZ17ricNZwy9aevPPXOiaoGSqhIV6zxjhZlMDibWloV7I7Q/132", 
    //     "sTime": "16:00", "eTime": "18:00", "sDate": "2020.08.01", "eDate": "2020.08.02", "male": 2, "female": 1, "remark": "快来玩吧!"}
    //   ],
    // show: new Array(14).fill(false),
    // iconAni: new Array(14),
    // markAni: new Array(14),
    infoIndex: 0,
  },

  joinTeam: function(e) {
    console.log(e)
    var that = this;
    return new Promise(function() {
      var teamID = that.data.info[e.currentTarget.dataset.index].teamID;
      wx.getStorage({
        key: 'userID',
        success(res) {
          var userID = res.data;
          wx.showModal({
            title: '加入队伍',
            content: '您确定加入该队伍嘛？',
            success(res) {
              if (res.confirm) {
                wx.request({
                  url: 'http://39.100.192.205:5000/team/join',
                  header: {
                    'Content-Type': 'application/json'
                  },
                  data: {
                    userID: userID,
                    teamID: teamID
                  },
                  success: function(res) {
                    var 
                        info = res.data,
                        title = "";
                    if (!info.status) {
                      if (info.error === "user had team") {
                        title = "已有队伍";
                      } else if (info.error === "team is not exists") {
                        title = "队员已满";
                      } else {
                        title = "其他错误";
                      }
                      wx.showToast({
                        title: title,
                        image: '../../icon/error.png'
                      })
                    } else {
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
                    
                  }
                })
              }
            }
          })
        }
      })
    })

  },

  setShow: function(e) {
    var 
        show = this.data.show,
        index = e.currentTarget.dataset.index;
    console.log(index)
    var 
        turn =wx.createAnimation({
          timingFunction: 'linear',
          delay: 0,
          transformOrigin: '50% 50% 0'
        }),
        fold = wx.createAnimation({
          timingFunction: 'linear',
          delay: 0,
          transformOrigin: '50% 50% 0'
        })
    var
      iconAniIndex = 'iconAni[' + index + ']',
      showIndex = 'show[' + index + ']',
      markAniIndex = 'markAni[' + index + ']';

    if (show[index]) {
      turn.rotateZ(0).step({duration: 500});
      fold.height(0).opacity(0).step({duration: 300});
      this.setData({
        [markAniIndex]: fold.export(),
        [iconAniIndex]: turn.export()
      });
      setTimeout(() => {
        this.setData({
          [showIndex]: !show[index]
        })
      }, 300)
    } else {
      turn.rotateZ(45).step({duration: 500});
      fold.opacity(0).step({duration: 0});
      this.setData({
        [markAniIndex]: fold.export(),
        [iconAniIndex]: turn.export(),
        [showIndex]: !show[index]
      })
      setTimeout(() => {
        fold.height("270rpx").opacity(1).step({duration: 500});
        this.setData({
          [markAniIndex]: fold.export()
        })
      }, 50)
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var 
        teams = JSON.parse(options.info),
        lengths = teams.length,
        info = [];
    for (var index in teams) {
      var 
          dic = {},
          team = teams[index];
      dic.teamID = team.teamID;
      dic.female = team.female;
      dic.male = team.male;
      dic.nowNumbers = team.nowNumbers;
      dic.numbers = team.numbers;
      dic.remark = team.remark;
      dic.leaderImgUrl = team.leaderImgUrl;
      [dic.sDate, dic.sTime] = util.divideDate(new Date(team.startTime));
      [dic.eDate, dic.eTime] = util.divideDate(new Date(team.endTime));
      info.push(dic);
    }
    console.log(info)
    this.setData({
      info: info,
      show: new Array(lengths).fill(false),
      iconAni: new Array(lengths),
      markAni: new Array(lengths)
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