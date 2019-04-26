import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysDept/list.json',
    data: data
  })
}

export function treeList (data) {
  return request({
    url: '/sysDept/treeList.json',
    data: data
  })
}
