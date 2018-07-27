<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <RegistrationForm />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import RegistrationForm from './components/RegistrationForm.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    RegistrationForm
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,700');
  
  body {
    margin: 0;
    padding: 0;
    background-color: #e9eff2;
  }
  
  #app {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
  }
</style>
