import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/nrbooks/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/nrbooks/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/nrbooks/del.json',
    data: data
  })
}
