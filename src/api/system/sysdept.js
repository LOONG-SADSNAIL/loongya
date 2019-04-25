import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysdept/list.json',
    data: data
  })
}

export function treelist (data) {
  return request({
    url: '/sysdept/treelist.json',
    data: data
  })
}
