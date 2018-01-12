//index.js
const app = getApp()
const utils = require("../../utils/util.js");

console.log(app.globalData);
Page({
    data:{
        "longitude":"113.324520",
        "latitude":"23.099994",
        "markers":[],
        "controls": [{
            id: 1,
            iconPath: '/resources/center.png',
            position: {
                left: 20,
                top: app.globalData.deviceHeight - 82,
                width: 24,
                height: 24
            },
            clickable: true
        }]
    },

    onShow() {
        this.getLocation();
        this.getList();
    },

    onReady: function (e) {
        this.mapCtx = wx.createMapContext('myMap');
    },

    getLocation() {
        wx.getLocation({
            type: 'gcj02',
            success: this.handlePosSucc.bind(this)
        })
    },

    handlePosSucc(res) {
        this.setData({
            "longitude": res.longitude,
            "latitude": res.latitude
        })
    },

    controlTap() {
        this.mapCtx.moveToLocation()
    },


    getList() {
        var data = {
            count: 100
        }
        utils.sendRequest("spot", data, "GET", this.handleGetPointsSucc.bind(this))
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
