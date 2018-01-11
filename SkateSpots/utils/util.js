// ajax
function sendRequest(path, data, method, callback) {
    wx.request({
        url: 'https://test.startvshow.com/v13/' + path , 
        // url: 'https://startvshow.com/v13/' + path, 
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
