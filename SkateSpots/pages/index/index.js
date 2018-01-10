//index.js
//获取应用实例
const app = getApp()

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
    // Do something when page show.
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
  }
})
