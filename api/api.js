/**
 * api封装
 * @description 对uni.request进行了封装
 * @param params {{url:String,method:String,data:JSON,success:Function,fail:Function,complete:Function}}
 * @version 0.0.2
 * @author landmine 2023.02.25
 */
const api = async (params) => {
    let URL = 'https://www.mortar.top/'
    return new Promise((resolve, reject) => {
        uni.showLoading({
            title: 'Loading...',
            mask: true,
        })
        uni.request({
            url: URL + params.url,
            method: params.method || "GET",
            data: params.data || null,
            success: (res) => {
                if (typeof params.success === 'function') {
                    if (res.statusCode === 200) {
                        params.success(res)
                    } else {
                        uni.showModal({
                            title: '错误:',
                            content: res.data.error + '\n' + res.data.status +
                                '\n' +
                                params.url,
                            showCancel: false,
                            confirmColor: 'red'
                        })
                    }
                }
            },
            fail: (e) => {
                console.log(e);
                if (typeof params.fail === 'function') {
                    params.fail(e)
                }
                uni.showModal({
                    title: '错误:',
                    showCancel: false,
                    content: e.errMsg,
                    confirmColor: 'red',
                })
            },
            complete: (e) => {
                if (typeof params.complete === 'function') {
                    params.complete(e)
                }
                uni.hideLoading()
            }
        })
    })
}

export default api
