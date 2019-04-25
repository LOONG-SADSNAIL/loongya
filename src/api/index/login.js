import request from '../../plugins/axios'

export function login (data) {
  return request({
    url: '/login/login.json',
    data: data
  })
}

export function logout () {
  return request({
    url: '/login/logout.json',
    method: 'post'
  })
}

export function getUserInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
