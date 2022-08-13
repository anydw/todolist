import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    todos: [
      {
  name: '吃饭',
  done: false,
  id: 1,},
 {
  name: '睡觉',
  done: false,
  id: 2,
 },
 {
  name: '打豆豆',
  done: false,
  id: 3,
  },
 ]
    },
  getters: {
    total(state){
      return state.todos.length;
  },
  doneTotal(state){
      return state.todos.reduce((pre,todo) => { return pre + (todo.done ? 1 : 0)}, 0)
  },
  isAllChecked(state,getters){
      return  getters.total > 0  && getters.total === getters.doneTotal
  }
  },
  mutations: {
    // 添加
    ADD_TODO(state, todoObj) {
      state.todos.unshift(todoObj);
    },
    //检查完成状态
    CHECK_TODO(state, id) {
      state.todos.forEach(todo => {
        if (todo.id === id) todo.done = !todo.done;
      })
    },
    // 删除事项
    DELETE_TODO(state,id){
      state.todos = state.todos.filter(todo => todo.id !== id);
    },

    // 清除所有完成
    CLEAR_ALL_TODO_DONE(state){
      state.todos = state.todos.filter(todo => !todo.done);
  }
  },
  modules : {   
    },
  plugins: [
      createPersistedState({
      reducer(state) {
              return {
                todos:state.todos
              };
          },
      storage:localStorage
        }),
      ]
})