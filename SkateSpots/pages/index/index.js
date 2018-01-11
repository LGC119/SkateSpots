//index.js
const app = getApp()
const utils = require("../../utils/util.js");

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
  getList() {
      utils.sendRequest("spot", [{count: 100}], "GET", this.handleGetPointsSucc.bind(this))
  },

  handleGetPointsSucc(res) {
    console.log(res)
    var spots = res.data.spots
    var arr = []
    for (var i = spots.length - 1; i >= 0; i--) {
      let item = spots[i];
      var iconPath = (item.type == 1) ? "/resources/park-icon.png" : "/resources/street-icon.png";
      arr.push({
          iconPath: iconPath,
          id: item.id,
          latitude: item.latitude,
          longitude: item.longitude,
          width: 35,
          height: 35
      })
    }
    this.setData({
      markers: arr
    })
  },
})
