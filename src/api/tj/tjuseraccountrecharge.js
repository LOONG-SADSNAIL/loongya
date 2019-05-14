import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjuseraccountrecharge/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjuseraccountrecharge/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjuseraccountrecharge/del.json',
    data: data
  })
}
