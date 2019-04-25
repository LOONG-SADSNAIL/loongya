import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '../plugins/auth'
import { login, logout, getUserInfo } from '../api/index/login'
import { getMenuData } from '../api/index/menu'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: getToken(),
    userName: '',
    roleName: '',
    headImg: '',
    userInfo: {},
    roles: [],
    menu_data: [],
    active_menu_index: 0,
    isCollapse: false,
    subMunuIndex: ''
  },
  getters: {
    getMenuItem: (state) => {
      return state.menu_data.find(item => item.menuid === state.active_menu_index)
    },
    subMunuIndex: (state) => { return state.subMunuIndex }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_NAME: (state, userName) => {
      state.userName = userName
    },
    SET_ROLE_NAME: (state, roleName) => {
      state.roleName = roleName
    },
    SET_HEAD_IMG: (state, headImg) => {
      state.headImg = headImg
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USERINFO: (state, action) => {
      state.userInfo = action
    },
    SET_MENU: (state, data) => {
      state.menu_data = data
    },
    SET_ACTIVE_MENU_INDEX: (state, index) => {
      state.active_menu_index = index
    },
    SET_ACTIVE_SUB_MENU_INDEX: (state, subMunuIndex) => {
      state.subMunuIndex = subMunuIndex
    },
    SET_IS_COLLAPSE: (state, isCollapse) => {
      state.isCollapse = isCollapse
    }

  },
  actions: {
    // 登录
    Login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data).then(response => {
          setToken(response.data.id)
          commit('SET_USERINFO', response.data)
          commit('SET_TOKEN', response.data.id)
          commit('SET_USER_NAME', response.data.username)
          commit('SET_ROLE_NAME', response.data.roleName)
          commit('SET_HEAD_IMG', response.data.headImg | '')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          if (response.roles && response.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', response.roles)
          } else {
            // reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_USER_NAME', response.data.username)
          commit('SET_HEAD_IMG', response.data.headImg | '')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then((response) => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_USERINFO', {})
          commit('SET_USER_NAME', '')
          commit('SET_HEAD_IMG', '')
          removeToken()
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取菜单
    setMenuData ({ commit, state }) { // 获取用户菜单
      return new Promise((resolve, reject) => {
        getMenuData(state.token).then(response => {
          if (response.errcode === 0) {
            let arr = []
            response.data.forEach(el => {
              arr.push(el)
            })
            if (arr.length === 0) {
              resolve({
                arr: [],
                type: -1
              })
              return resolve
            }
            commit('SET_MENU', arr)
            commit('SET_ACTIVE_MENU_INDEX', arr[0].menuid)
            commit('SET_ACTIVE_SUB_MENU_INDEX', arr[0].childlist[0].url)
            if (arr[0].childlist.length > 0) {
              commit('SET_ACTIVE_SUB_MENU_INDEX', arr[0].childlist[0].url)
            }
            // if (!state.active_menu_index) {
            //   commit('SET_ACTIVE_MENU_INDEX', arr[0].menuid)
            // }
            // if (!state.subMunuIndex && arr[0].childlist.length > 0) {
            //   commit('SET_ACTIVE_SUB_MENU_INDEX', arr[0].childlist[0].url)
            // }
            resolve({
              arr: arr,
              type: 1
            })
          } else {
            resolve({
              arr: [],
              type: -1
            })
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 设置当前活动菜单项
    setActiveMenuIndex ({ commit }, payload) {
      commit('SET_ACTIVE_MENU_INDEX', payload.index)
    }, // 设置子菜单当前活动选项
    setActiveSubMenuIndex ({ commit }, payload) {
      commit('SET_ACTIVE_SUB_MENU_INDEX', payload.subMunuIndex)
    }, // 设置左侧菜单是否展开
    setIsCollapse ({ commit }, isCollapse) {
      commit('SET_IS_COLLAPSE', isCollapse)
    }
  }
})

export default store
