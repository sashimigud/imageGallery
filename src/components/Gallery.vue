<template lang="html">
<div id="wrapper">
  <div class="thumbnails">
    <div v-for="(slide, index) in slides" :key="slide.id" class='slide' :class="dark ? 'dark-theme-shadow' : 'light-theme-shadow'"
      @click="selectImage(index)">
      <img class="carousel-image" :src="slide.imagePath" />
    </div>
  </div>
</div>
</template>

<script>
import { Eventbus } from '../eventbus.js'

export default {
  data(){
    return {
      slides:[]
    }
  },
  created(){
    this.slides = Eventbus.slides;
  }
}
</script>

<style lang="css" scoped>

  .wrapper{
    margin-top:60px;
  }

  .dark-theme-text{
    color:white;
  }

  .light-theme-text{
    color:#373737;
  }

  .light-theme-shadow{
    -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
  }


  .dark-theme-shadow{
    -webkit-box-shadow: 0px 0px 13px 4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 13px 4px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 13px 4px rgba(0,0,0,0.75);
  }

  .thumbnails{
    display:flex;
    flex-wrap:wrap;
    width:80%;
    margin-top:70px;
    margin-bottom:10px;
    margin-left:auto;
    margin-right:auto;
  }

  .slide{
    width:140px;
    margin:5px; 
    height:110px;   
  }

  .slide img{
    width:100%;
    height:100%;
    cursor:pointer;
  }

  @media screen and (max-width:600px) {
    .thumbnails{
      width:97%;
      margin-top:40px;
    }

    .slide{
      width:132px;
    }
  }
</style>
