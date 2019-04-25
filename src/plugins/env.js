// 根据不同的环境更改不同的baseUrl
let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  // baseUrl = '测试地址'
  baseUrl = '/easylinkapiadmin'
} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = '预发布地址'
  baseUrl = 'http://localhost:8085/easylinkapiadmin'
}

export {
  baseUrl // 导出baseUrl
}
