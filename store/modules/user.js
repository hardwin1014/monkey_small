const key = 'USERS_KEY'
const token = uni.getStorageSync(key);

const state = {
  token: token ? JSON.parse(token) : null
}

const mutations = {
  login(state, value) {
    state.user = value
    uni.setStorageSync(key, JSON.stringify(value));
  },
  loginout(state) {
    state.user = null
    uni.removeStorageSync(key);
  }
}

export default {
  state,
  mutations
}
