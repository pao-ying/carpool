const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}

const nowTime = date => {
  var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    return {
    year : date.getFullYear(),
    month : date.getMonth() + 1,
    day : date.getDate(),
    week: weeks[date.getDay()],
    hour : date.getHours(),
    minute : date.getMinutes(),
    second : date.getSeconds()
  }
}

const formatSelectedTime = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  return [hour, minute].map(formatNumber).join(":")
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  nowTime: nowTime,
  formatDate: formatDate,
  formatSelectedTime: formatSelectedTime
}
