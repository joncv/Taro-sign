export const host = 'http://localhost:8227/api'
export const prodUrl = 'https://www.niushaoda.club:8080'
let url
if (true) {
    url = host
} else {
    url = prodUrl
}


// export const GET_STUDNET_USERINFO_URL = `${prodUrl}/getOpenid`
// 通过code获取绑定信息
export const GET_STUDNET_USERINFO_URL = `${url}/getuserinfo`
export const BOUND_STUDNET_USERINFO_URL = `${url}/bind`

// 老师发起签到
export const CREAT_QRCODE_URL = `${url}/signIn`
// 学生扫码签到
export const SIGN_RECORD_URL = `${url}/signRecord`
// 查询老师所有签到
export const GET_ALL_SIGN_URL = `${url}/allSign`
// 根据sid查询某一次签到的所有人员
export const GET_SIGN_DETAIL_URL = `${url}/searchStudent`