import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysmenu/list.json',
    data: data
  })
}
export function edit (data) {
  return request({
    url: '/sysmenu/edit.json',
    data: data
  })
}
export function del (data) {
  return request({
    url: '/sysmenu/del.json',
    data: data
  })
}

export function treeList (data) {
  return request({
    url: '/sysmenu/treeList.json',
    data: data
  })
}
export function treeAllList (data) {
  return request({
    url: '/sysmenu/treeAllList.json',
    data: data
  })
}

export function getMenuListByRoleId (data) {
  return request({
    url: '/sysmenu/getMenuListByRoleId.json',
    data: data
  })
}
