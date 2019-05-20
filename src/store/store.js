import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '../plugins/auth'
import { login, logout, getUserInfo } from '../api/index/login'
import { getMenuData } from '../api/index/menu'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: getToken(),
    username: localStorage.getItem('username') || '',
    rolename: localStorage.getItem('rolename') || '',
    menuedit: localStorage.getItem('menuedit') || '0',
    passwordVisible: false,
    organname: localStorage.getItem('organname') || '',
    organno: localStorage.getItem('organno') || '', // 当前用户机构编号
    headimg: localStorage.getItem('headimg') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    roles: [],
    menu_data: [],
    active_menu_index: 0,
    isCollapse: false,
    subMunuIndex: '',
    paths: [{ path: '/', title: '首页' }]
  },
  getters: {
    getMenuItem: (state) => {
      return state.menu_data.find(item => item.menuid === state.active_menu_index)
    },
    subMunuIndex: (state) => { return state.subMunuIndex },
    submenu: (state) => {
      const menuItem = state.menu_data.find(item => item.menuid === state.active_menu_index)
      const subMenu = menuItem.childlist.find(e => e.url === state.subMunuIndex)
      return subMenu
    }

  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_PATH: (state, path) => {
      state.paths.push(path)
    },
    SET_PATH_LENGTH: (state, index) => {
      state.paths.length = index
    },
    SET_USER_NAME: (state, userName) => {
      localStorage.setItem('username', userName)
    },
    SET_ROLE_NAME: (state, roleName) => {
      localStorage.setItem('rolename', roleName)
    },
    SET_PASSWORD_VISIBLE: (state, passwordVisible) => {
      state.passwordVisible = passwordVisible
    },
    SET_ROLE_MENU_EDIT: (state, menuedit) => {
      localStorage.setItem('menuedit', menuedit)
    },
    SET_HEAD_IMG: (state, headImg) => {
      localStorage.setItem('headimg', headImg)
    },
    SET_ORGAN_NAME: (state, organname) => {
      localStorage.setItem('organname', organname)
    },
    SET_ORGAN_NO: (state, organno) => {
      localStorage.setItem('organno', organno)
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USERINFO: (state, action) => {
      localStorage.setItem('userInfo', JSON.stringify(action))
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
          commit('SET_ROLE_NAME', response.data.rolename)
          commit('SET_ROLE_MENU_EDIT', response.data.menuedit)
          commit('SET_ORGAN_NAME', response.data.organname)
          commit('SET_ORGAN_NO', response.data.organno)
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
          commit('SET_ROLE_NAME', '')
          commit('SET_ROLE_MENU_EDIT', '')
          commit('SET_ORGAN_NAME', '')
          commit('SET_ORGAN_NO', '')
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
            if (!state.active_menu_index) {
              commit('SET_ACTIVE_MENU_INDEX', arr[0].menuid)
            }
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
    },
    setPath ({ commit }, path) {
      commit('SET_PATH', path)
    },
    setPathLength ({ commit }, index) {
      commit('SET_PATH_LENGTH', index)
    },
    setPasswordVisible ({ commit }, passwordVisible) {
      commit('SET_PASSWORD_VISIBLE', passwordVisible)
    }
  }
})

export default store
