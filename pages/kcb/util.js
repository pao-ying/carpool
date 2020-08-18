//格式化时间
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')

}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function accesskey(){
  let tm = new Date().getTime()
  console.log(tm)
  tm = tm.toString()
  let tim1 = Number(tm.slice(0,3))
  let tim2 = Number(tm.slice(3, 6))
  let tim3 = Number(tm.slice(6, 8))
  let tim4 = Number(tm.slice(8, 10))
  let tma = tim1 * 10 + tim2
  let tmb = tim3 * 10 + tim4
  if (tma == 0)
    tma += 8
  if (tmb == 0)
    tmb += 3
  let res = (tma % tmb) * 10 + tmb % 33
  res = base64.encode(String(res))
  console.log('key: '+tm.slice(0,10) +res)
  return (tm.slice(0, 11) + res)
}

//判断是否为纯粹对象
function isPlainObject(obj){
    if(!obj || obj.toString() !== "[object Object]" || obj.nodeType || obj.setInterval){
        return false;
    }
    if(obj.constructor && !obj.hasOwnProperty("constructor") && !obj.constructor.prototype.hasOwnProperty("isPrototypeOf")){
        return false;
    }
    for(var key in obj){}
    return key === undefined || obj.hasOwnProperty(key);
}
function cloneObj(obj){
    //if(!isPlainObject(obj)){ return false; }
    return JSON.parse(JSON.stringify(obj));
}

//md5&base64
var md5 = require('md5.min.js'), base64 = require('base64.min.js'),
sign = function(data) {
  var _data = cloneObj(data);
  _data['\x74\x6f\x6b\x65\x6e'] = base64.decode(getApp()['\x5f\x74']);
  return md5(JSON.stringify(_data));
},
key = function(data) {
  if(!isPlainObject(data)){ return false; }
  data.timestamp = parseInt(new Date().getTime().toString().substr(0,10));
  data.sign = sign(data);
  return {
    key: base64.encode(JSON.stringify(data))
  };
}
function getDates(days, todate) {
  var dateArry = [];
  for (var i = 0; i < days; i++) {
    var dateObj = dateLater(todate, i);
    dateArry.push(dateObj)
  }
  return dateArry;
}
function dateLater(dates, later) {
  let dateObj = {};
  let show_day = new Array('日', '一', '二', '三', '四', '五', '六');
  let date = new Date(dates);
  date.setDate(date.getDate() + later);
  let day = date.getDay();
  let yearDate = date.getFullYear();
  let month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);
  let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  dateObj.time = yearDate + '-' + month + '-' + dayFormate;
  dateObj.week = show_day[day];
  dateObj.week_id = day;
  return dateObj;
}
module.exports = {
  md5: md5,
  base64: base64,
  key: key,
  getDates: getDates,
  formatDate: formatDate,
  accesskey: accesskey,
  cloneObj:cloneObj,
}