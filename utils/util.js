const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 2020 01 08   ->    2020-01-08
const formatDate = date => {
  const year = formatNumber(date.getFullYear())
  const month = formatNumber(date.getMonth() + 1)
  const day = formatNumber(date.getDate())
  return [year, month, day].map(formatNumber).join('-')
}


// Date()     ->   年，月，日...
const nowTime = date => {
  var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    return {
    year : date.getFullYear(),
    month : formatNumber(date.getMonth() + 1),
    day : formatNumber(date.getDate()),
    week: weeks[date.getDay()],
    hour : formatNumber(date.getHours()),
    minute : formatNumber(date.getMinutes()),
    second : formatNumber(date.getSeconds())
  }
}

//Date()     ->    小时:分钟
const formatSelectedTime = date => {
  var hour = formatNumber(date.getHours())
  var minute = formatNumber(date.getMinutes())
  return [hour, minute].map(formatNumber).join(":")
}


// 2020-01-08      ->    2020.01.08
const dotDate = date => {
  return date.split("-").join(".")
}

//2020.01.08  -> 2020-01-08
const lineDate = date => {
  return date.split(".").join("-")
}

// Date()      ->     2020.08.01 和 16:04
const divideDate = date => {
  return [
    [date.getFullYear(), formatNumber(date.getMonth() + 1), formatNumber(date.getDate())].join("."),
    [formatNumber(date.getHours()), formatNumber(date.getMinutes())].join(":")
  ]
}


const removeYear = date => {
  return [formatNumber(date.getMonth() + 1), formatNumber(date.getDate())].join(".") + ' ' + [formatNumber(date.getHours()), formatNumber(date.getMinutes())].join(":")
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  nowTime: nowTime,
  formatDate: formatDate,
  formatSelectedTime: formatSelectedTime,
  dotDate: dotDate,
  divideDate: divideDate,
  removeYear: removeYear,
  lineDate: lineDate
}
