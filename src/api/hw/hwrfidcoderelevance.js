import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwrfidcoderelevance/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwrfidcoderelevance/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwrfidcoderelevance/del.json',
    data: data
  })
}
