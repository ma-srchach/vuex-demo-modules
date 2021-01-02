import { INITIALISER_FUNCTION } from '@/store/constants'

const state = {/** */};
const getters = {/** */};
const mutations = {/** */};

const actions = {
  [INITIALISER_FUNCTION]() {
    console.log('Auth Initialized');
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
