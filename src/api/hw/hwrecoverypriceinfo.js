import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwrecoverypriceinfo/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwrecoverypriceinfo/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwrecoverypriceinfo/del.json',
    data: data
  })
}
