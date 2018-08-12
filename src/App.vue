<template>
  <div id="app">
    <app-header @changeActive="selectComponent"></app-header>
    <keep-alive>
      <component :is="selectedComponent">
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Gallery from './components/Gallery.vue'
import Info from './components/Info.vue'
import Carousel from './components/Carousel.vue'

export default {


  data () {
    return {
      selectedComponent: 'app-carousel'
    }
  },
  methods:{
    selectComponent(event){
      this.selectedComponent = 'app-' + event;
    }
  },
  components:{
    appHeader:Header,
    appGallery:Gallery,
    appInfo:Info,
    appCarousel:Carousel
  }
}
</script>

<style>
#app {
  font-family: 'Ubuntu', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.light-theme{
  background-color: white;
}

.dark-theme{
  background-color: #373737;
}

</style>
