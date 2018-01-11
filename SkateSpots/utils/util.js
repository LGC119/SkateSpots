// ajax
function sendRequest(path, data, method, callback) {
    wx.request({
        url: 'http://192.168.16.23:8000/api/' + path , 
        data: data,
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method: method,
        success: callback
    })
}

module.exports = {
    sendRequest: sendRequest,
}
