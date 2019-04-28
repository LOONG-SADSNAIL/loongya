import request from '../../plugins/axios'

export function list (data) {
  return request({
    url: '/sysrole/list.json',
    data: data
  })
}
