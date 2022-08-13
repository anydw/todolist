<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="item in todos" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" :checked="item.done" @change="handleChange(item.id)"/>
        <label>{{item.name}}</label>
        <button class="destroy" @click="handleClick(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import {mapMutations} from "vuex";
export default {
  data() {
    return {
    }
  },
  computed:{
        todos(){
         return this.$store.state.todos
      } 
   },
   mounted(){
     console.log(this.todos);

   },
   methods:{
     ...mapMutations({
            handleChange:"CHECK_TODO"
        }),
        handleClick(id){
            if(confirm("确定删除吗？")){
                this.$store.commit("DELETE_TODO",id);
            }
        }
    } 
}
</script>
