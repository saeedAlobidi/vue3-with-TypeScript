 

<template>
  <div class="home">
    <img alt="Vue logo" src="../../../assets/logo.png" />
   <HelloWorld />
   <div>
 
     id: {{user.id}}
     <br>
     userId: {{user.userId}}
     <br>
     title: {{user.title}}
     <br>
     completed :{{user.completed}}
     

   </div>
    <br>
    <br>
    <br>
    <button @click="getData">Get Data </button>
  </div>
</template>

<script lang="ts">
import home from './home'

export default home

</script>
