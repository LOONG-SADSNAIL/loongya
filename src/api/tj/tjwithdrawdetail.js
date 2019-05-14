import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/tjwithdrawdetail/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/tjwithdrawdetail/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/tjwithdrawdetail/del.json',
    data: data
  })
}
