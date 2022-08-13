<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="onEnter"
    />
  </header>
</template>

<script>
import {nanoid} from "nanoid";
export default {
  data() {
    return {
    }
  },
   methods:{
     onEnter(event){
        if(!event.target.value.trim()) return alert('请输入完整信息');
        const todoObj = {
          id:nanoid(),
          name:event.target.value,
          done:false
        }
        this.$store.commit("ADD_TODO",todoObj);
        event.target.value = "";
      }
    }
}

</script>
