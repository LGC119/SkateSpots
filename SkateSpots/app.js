//app.js
App({
  globalData: {
    deviceHeight: 0,
    deviceWidth: 0,
    distinct: "xiannvminmin"
  },

  onLaunch() {
    this.getDeviceInfo();
  },
  
  onShow: function(options) {
      // Do something when show.
  },
  onHide: function() {
      // Do something when hide.
  },
  onError: function(msg) {
    console.log(msg)
  },
  getDeviceInfo() {

    let deviceWidth = wx.getStorageSync("deviceWidth"); 
    let deviceHeight = wx.getStorageSync("deviceHeight"); 

    if(deviceWidth && deviceHeight) {
      //直接从本地存储读取
      this.globalData.deviceHeight = deviceHeight;
      this.globalData.deviceWidth = deviceWidth;
    }else {
      //调用api获取设备信息，同时，存入本地存储
      try {
        var res = wx.getSystemInfoSync();
        this.globalData.deviceHeight = res.windowHeight;
        this.globalData.deviceWidth = res.windowWidth;
        wx.setStorageSync('deviceHeight', res.windowHeight);
        wx.setStorageSync('deviceWidth', res.windowWidth);
      } catch (e) {}
    }
    
  }
})