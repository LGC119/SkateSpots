//index.js
const app = getApp()
const request = "../../utils/request.js"

Page({
  data: {
    controls: [
      {
        id: 1,
        iconPath: '/resources/center.png',
        position: {
          left: 20,
          top: app.globalData.deviceHeight - 80,
          width: 20,
          height: 20
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: '/resources/add_blue.png',
        position: {
          left: app.globalData.deviceWidth/2 - 40,
          top: app.globalData.deviceHeight - 130,
          width: 80,
          height: 80
        },
        clickable: true
      }
    ]
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    this.getList()
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  },
  getList: function () {
    const list = [];
    request.doRequest('spot', [{count: 100}], 'get', function (rst) {
      for (var i = rst.page_data.length - 1; i >= 0; i--) {
        let item = rst.page_data[i];
        arr.push({
            iconPath: "/resources/pin.png",
            id: item.id,
            latitude: item.latitude,
            longitude: item.longitude,
            width: 35,
            height: 35
        })
      }
      this.setData()
    })
  }
})
