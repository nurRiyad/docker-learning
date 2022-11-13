<script setup lang="ts">
import {onMounted, ref} from "vue";

let lists = ref([{title: "No post available",body: "-"}]);

onMounted(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => lists.value = json)
})


</script>

<template>
  <div class="center">
    <div>
    <h1>List of Post</h1>
    <ul v-for="(list,idx) in lists" :key="idx">
      <li>
        <div>
          <h4>{{list.title}}</h4>
          <p>{{list.body}}</p>
        </div>
      </li>

    </ul>
  </div>
  </div>
</template>

<style scoped>

.center{
  display: flex;
  justify-content: center;
  align-items: center;
 
  
}
</style>