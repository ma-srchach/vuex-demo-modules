import { INITIALISER_FUNCTION } from '@/store/constants'

const state = {
  userAddresses: 'State de ejemplo',
};

const getters = {/** */};

const mutations = {
  printExample() {
    console.log('BRAIN.exe has been stopped');
  },
};

const actions = {
  [INITIALISER_FUNCTION]() {
    console.log('Address initialised');
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
