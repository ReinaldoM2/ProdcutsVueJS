<template>
  <section>
    <v-card
    color="grey lighten-4"
    flat
    height="48px"
    tile
    v-if="isLogin"
  >
    <v-toolbar dense>

      <v-toolbar-title @click="$router.push('/index')">Fusepong Marcas</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon >
        <v-icon style="color: red;" @click="logOut">mdi-logout-variant</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
    <router-view style="min-height:100vh;"></router-view>
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
  computed:{
    isLogin(){
      return this.$route.path !== '/' 
    }
  },

  methods:{
    logOut(){
      FB.logout((response) => {
        localStorage.removeItem('user')
        return this.$router.push('/')
    });
    }
  }
}
</script>