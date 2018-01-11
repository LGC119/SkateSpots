function doRequest(url, data, method, callback) {
    wx.request({
      url: 'http://skate/' + url, //仅为示例，并非真实的接口地址
      data: data,
      header: {
          'content-type': 'application/json' // 默认值
      },
      method: method,
      success: callback
    })
}

module.exports = {
    doRequest: doRequest
}
