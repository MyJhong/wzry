<template>
  <div id="app">
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import Foot from './components/foot/foot'
export default {
  name: 'Main',
  components: {
    Foot
  }
}
</script>

<style>

</style>
