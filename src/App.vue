<template>
  <section>
    <router-view style="min-height:100vh;"></router-view>
    <footer><h1>Hola</h1></footer>
  </section>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.5.1/vue-resource.min.js">
</script>
<script>
import IndexScreen from './components/Index'
export default {
  name: 'App',
  components: {
    "index-screen": IndexScreen
  },
}
</script>