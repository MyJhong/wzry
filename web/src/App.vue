<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import Foot from './components/foot/foot'
import MyHeader from './components/header/header'
export default {
  name: 'Main',
  components: {
    Foot,
    MyHeader
  }
}
</script>

<style>

</style>
