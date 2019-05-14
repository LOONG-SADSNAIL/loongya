import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/hwtakegoodsinfo/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/hwtakegoodsinfo/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/hwtakegoodsinfo/del.json',
    data: data
  })
}
