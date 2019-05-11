import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/nrgoodsinfo/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/nrgoodsinfo/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/nrgoodsinfo/del.json',
    data: data
  })
}
