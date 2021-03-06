"use strict";
/**
 * @file Vuex 状态封装
 * @author DJ
 */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  //数据源申明
  state: {
    userInfo: {},
    userType: 0, // 用户身份: 1、工程、合作； 2、供应商
    loginInfo: {},
    tabActive: 0,
    taskModel: "",
    projectModel: "",
    taskParams: {},
    goodsParams: {},
    servePath: "",
    tabsShow: true
  },
  //写入缓存并同步state
  mutations: {
    userInfo: (state, val) => {
      state.userInfo = val;
    },
    userType: (state, val) => {
      state.userType = val;
    },
    loginInfo: (state, val) => {
      state.loginInfo = val;
    },
    tabActive: (state, val) => {
      state.tabActive = val;
    },
    taskModel: (state, val) => {
      state.taskModel = val;
    },
    projectModel: (state, val) => {
      state.projectModel = val;
    },
    taskParams: (state, val) => {
      state.taskParams = val;
    },
    goodsParams: (state, val) => {
      state.goodsParams = val;
    },
    servePath: (state, val) => {
      state.servePath = val;
    },
    tabsShow: (state, val) => {
      state.tabsShow = val;
    }
  }
});