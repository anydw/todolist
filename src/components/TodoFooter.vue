<template>
  <footer class="footer" >
    <span class="todo-count">剩余<strong>{{123}}</strong></span>
    <ul class="filters">
      <li>
        <a class="selected" >全部{{total}}</a>
      </li>
      <li>
        <a href="javascript:;" >未完成</a>
      </li>
      <li>
        <a href="javascript:;">已完成{{doneTotal}}</a>
      </li>
    </ul>
    <button class="clear-completed"  @click="handleClick">清除已完成</button>
  </footer>
</template>

<script>
import {mapGetters,mapMutations} from "vuex";
export default {
  components:{},
   computed:{
        ...mapGetters(["total","doneTotal","isAllChecked"])
    },
    methods:{
     ...mapMutations({
            handleChange:"CHECK_ALL_TODO",
            handleClick:"CLEAR_ALL_TODO_DONE"
        })
  }
}
</script>
