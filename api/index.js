import request from '/utils/request.js'

// 登录接口
export function login(data) {
  return request({
    url: 'accountsPayable/',
    method: 'GET',
    params: data
  })
}
