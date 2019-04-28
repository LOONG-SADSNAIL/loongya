import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysmenu/list.json',
    data: data
  })
}

export function treeList (data) {
  return request({
    url: '/sysmenu/treeList.json',
    data: data
  })
}
