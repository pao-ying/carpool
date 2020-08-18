var util = require("util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tmpclass:{"kbbz": "商务谈判(单立岩 4周),职业素质养成(卓越网课 ),计算机组成原理课程设计(陈岩 17-18周),算法设计与分析课程设计(刘美玲 15周),", "kblist": [[[{"className": "nan"}], [{"className": "计算机组成原理", "weekday": 1, "kcsj": "0304", "classroom": "成栋楼334", "teacherName": "陈岩讲师（高校）", "orgweek": "1-15(周)", "parseweek": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "weektag": 0}], [{"className": "计算机组成原理", "weekday": 1, "kcsj": "0506", "classroom": "丹青楼911", "teacherName": "陈岩讲师（高校）", "orgweek": "11-14(周)", "parseweek": [11, 12, 13, 14], "weektag": 0}], [{"className": "数据库系统原理", "weekday": 1, "kcsj": "0708", "classroom": "丹青楼309", "teacherName": "王阿川教授", "orgweek": "1-17(周)", "parseweek": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "weektag": 0}], [{"className": "nan"}], [{"className": "nan"}]], [[{"className": "高级英语翻译", "weekday": 2, "kcsj": "0102", "classroom": "锦绣楼304", "teacherName": "冯宇玲讲师（高校）", "orgweek": "1-13(周)", "parseweek": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "weektag": 0}], [{"className": "Java程序设计", "weekday": 2, "kcsj": "0304", "classroom": "成栋楼311", "teacherName": "刁宏志副教授", "orgweek": "1-9(周)", "parseweek": [1, 2, 3, 4, 5, 6, 7, 8, 9], "weektag": 0}], [{"className": "算法设计与分析", "weekday": 2, "kcsj": "0506", "classroom": "丹青楼610", "teacherName": "李艳娟讲师（高校）", "orgweek": "11-18(周)", "parseweek": [11, 12, 13, 14, 15, 16, 17, 18], "weektag": 0}], [{"className": "中国近现代史纲要", "weekday": 2, "kcsj": "0708", "classroom": "锦绣楼T102", "teacherName": "刘琳副教授", "orgweek": "1-9(周)", "parseweek": [1, 2, 3, 4, 5, 6, 7, 8, 9], "weektag": 0}, {"className": "算法设计与分析", "weekday": 2, "kcsj": "0708", "classroom": "丹青楼916", "teacherName": "李艳娟讲师（高校）", "orgweek": "13,15,17,18(周)", "parseweek": [13, 15, 17, 18], "weektag": 0}], [{"className": "Linux系统及Shell编程", "weekday": 2, "kcsj": "0910", "classroom": "成栋楼311", "teacherName": "卢洋", "orgweek": "1-9(周)", "parseweek": [1, 2, 3, 4, 5, 6, 7, 8, 9], "weektag": 0}], [{"className": "nan"}]], [[{"className": "nan"}], [{"className": "数据库系统原理", "weekday": 3, "kcsj": "0304", "classroom": "丹青楼905", "teacherName": "王阿川教授", "orgweek": "9,10,11,16(周)", "parseweek": [9, 10, 11, 16], "weektag": 0}], [{"className": "nan"}], [{"className": "nan"}], [{"className": "nan"}], [{"className": "nan"}]], [[{"className": "中国近现代史纲要", "weekday": 4, "kcsj": "0102", "classroom": "锦绣楼T102", "teacherName": "刘琳副教授", "orgweek": "1-9(周)", "parseweek": [1, 2, 3, 4, 5, 6, 7, 8, 9], "weektag": 0}], [{"className": "Java程序设计", "weekday": 4, "kcsj": "0304", "classroom": "成栋楼311", "teacherName": "刁宏志副教授", "orgweek": "1-9(周)", "parseweek": [1, 2, 3, 4, 5, 6, 7, 8, 9], "weektag": 0}, {"className": "算法设计与分析", "weekday": 4, "kcsj": "0304", "classroom": "丹青楼610", "teacherName": "李艳娟讲师（高校）", "orgweek": "11-18(周)", "parseweek": [11, 12, 13, 14, 15, 16, 17, 18], "weektag": 0}], [{"className": "nan"}], [{"className": "Linux系统及Shell编程", "weekday": 4, "kcsj": "0708", "classroom": "成栋楼311", "teacherName": "卢洋", "orgweek": "1-9(周)", "parseweek": [1, 2, 3, 4, 5, 6, 7, 8, 9], "weektag": 0}], [{"className": "nan"}], [{"className": "nan"}]], [[{"className": "nan"}], [{"className": "数据库系统原理", "weekday": 5, "kcsj": "0304", "classroom": "丹青楼309", "teacherName": "王阿川教授", "orgweek": "1-17(双周)", "parseweek": [2, 4, 6, 8, 10, 12, 14, 16], "weektag": 2}], [{"className": "计算机组成原理", "weekday": 5, "kcsj": "0506", "classroom": "丹青楼512", "teacherName": "陈岩讲师（高校）", "orgweek": "1-15(周)", "parseweek": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "weektag": 0}], [{"className": "nan"}], [{"className": "nan"}], [{"className": "nan"}]], [[{"className": "nan"}], [{"className": "nan"}], [{"className": "数字逻辑系统设计", "weekday": 6, "kcsj": "0506", "classroom": "丹青楼905", "teacherName": "陈岩讲师（高校）", "orgweek": "8-12(周)", "parseweek": [8, 9, 10, 11, 12], "weektag": 0}], [{"className": "数字逻辑系统设计", "weekday": 6, "kcsj": "0708", "classroom": "丹青楼905", "teacherName": "陈岩讲师（高校）", "orgweek": "8-12(周)", "parseweek": [8, 9, 10, 11, 12], "weektag": 0}], [{"className": "nan"}], [{"className": "nan"}]], [[{"className": "Linux系统及Shell编程", "weekday": 7, "kcsj": "0102", "classroom": "丹青楼913", "teacherName": "卢洋", "orgweek": "6-9(周)", "parseweek": [6, 7, 8, 9], "weektag": 0}], [{"className": "Linux系统及Shell编程", "weekday": 7, "kcsj": "0304", "classroom": "丹青楼913", "teacherName": "卢洋", "orgweek": "6-9(周)", "parseweek": [6, 7, 8, 9], "weektag": 0}], [{"className": "nan"}], [{"className": "nan"}], [{"className": "nan"}], [{"className": "nan"}]]]},
    allterm: "2019-2020-2",
    _days: ["一", "二", "三", "四", "五", "六", "日"],
    _weeks: ["学期课表", "第一周", "第二周", "第三周", "第四周", "第五周", "第六周", "第七周", "第八周", "第九周", "第十周", "第十一周", "第十二周", "第十三周", "第十四周", "第十五周", "第十六周", "第十七周", "第十八周", "第十九周", "第二十周"],
    _weeks2:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    term: "2019-2020-2",
    toweek_zh:"第一周",
    remark:'',
    classlist:[],
    detailed_class:[],
    blur:0,
    blurnum:0
  },
  click_me: function (e) {
    let id = e.currentTarget.dataset.id
    let str = "flagclick[" + id + "]"
    let value = this.data.flagclick[id] ^ 1
    this.setData({
      [str]: value
    })
  },
  bindPickerChange_term_week:function(e){
    this.setData({
      now_term_week:e.detail.value
    })
  },
  changeWeek: function (e) {
    var _this = this
    this.setData({
      nowterm: e.detail.value,
      toweek_zh: _this.data._weeks[e.detail.value]
    })
    

    this.tablechange(Number(e.detail.value))
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
    this.tablechange(1)
  },
  tablechange: function(e){
    let json1 = this.data.tmpclass
    this.setData({
      remark: json1.kbbz
    })
    if (e === 0){
      this.setData({
        classlist:json1.kblist
      })
    }
    else{
      let xskb = json1.kblist; let week_now = e
      var _this = this
      var classlist = new Array()
      for (var i = 0; i < 7; i++) {
        var weeklist = new Array(6)
        for (var j = 0; j < 6; j++) {
          weeklist[j] = new Array()
          if (xskb[i][j].length === 1) {
            if (xskb[i][j][0].className == 'nan') {
              weeklist[j].push({})
            }
            else {
              if (xskb[i][j][0].parseweek.indexOf(week_now) != -1) {
                weeklist[j].push(xskb[i][j][0])
              }
              else {
                weeklist[j].push({})
              }
            }
          }
          else {
            var flag = 0;
            for (var k = 0; k < xskb[i][j].length; k++) {
              if (xskb[i][j][k].parseweek.indexOf(week_now) != -1) {
                weeklist[j].push(xskb[i][j][k])
                flag++
              }
            }
            if (flag == 0) {
              weeklist[j].push({})
            }
          }
        }
        classlist.push(weeklist)
      }
      //this.classlist = classlist
      //console.log(classlist)
      this.setData({
        classlist: classlist
      })
    }
    
  },

  showDetail: function (t) {
    var n = t.currentTarget.dataset
    var detailClass = util.cloneObj(this.data.classlist[n.day][n.sector])
    if (detailClass[0].className && detailClass[0].className != 'nan')
    {
      this.setData({
      detailed_class:detailClass,
      blur:!0,
      blurnum:4
    })
    }
  },
  hideDetail: function(){
    this.setData({
      blur:0,
      blurnum:0
    })
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