<template lang="html">
<div class="wrapper">
  <h2 class="current-title" :class="dark ? 'dark-theme-text' : 'light-theme-text'">{{ currentTitle }}</h2>
  <div class="jumbo-wrapper">
    <transition name="fade" mode="out-in">
    <div v-show="show" class="jumbotron" :class="[orientation === 'landscape' ? 'landscape' : 'portrait', dark ? 'dark-theme-shadow' : 'light-theme-shadow']">
        <img :src="currentImage" />
    </div>
    </transition>
      <button :class="dark ? 'dark-theme-buttons' : 'light-theme-buttons'" class='next-button jumbo-buttons' @click="next">Next</button>
      <button class='prev-button jumbo-buttons' :class="dark ? 'dark-theme-buttons' : 'light-theme-buttons'" @click="previous">Prev</button>
  </div>
    <div class="hidden-controls">
      <button class='hidden-buttons hidden-prev' :class="dark ? 'dark-theme-buttons' : 'light-theme-buttons'" @click="previous">Prev</button>
      <button :class="dark ? 'dark-theme-buttons' : 'light-theme-buttons'" class='hidden-buttons hidden-next' @click="next">Next</button>
    </div>
  <div class="toggle-wrapper">
    <button class="toggle-gallery-button" :class="dark ? 'dark-theme-buttons' : 'light-theme-buttons'" @click="showGallery = !showGallery">Toggle Gallery</button>
  </div>
  <div class="thumbnails" v-if="showGallery">
    <div 
    v-for="(slide, index) in slides"
    :key="slide.id"
    class='slide'
    :class="dark ? 'dark-theme-shadow' : 'light-theme-shadow'"
    @click="selectImage(index)"
    >
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
      dark:false,
      showGallery:false,
      show:true,
      slides: [],
      activeImage:0,
      orientation:'portrait'
    }
  },
  methods:{
    selectImage(index){
      this.show = false
      this.show = true
      this.activeImage = index
      this.ori(this.slides[this.activeImage])
    },
    ori(bilde){
      if(bilde.orientation === 'portrait')
        this.orientation = 'portrait'
      else {
        this.orientation = 'landscape'
      }
    },
    next(){
      var active = this.activeImage+1;

      if(active >= this.slides.length){
        active = 0;
      }
      this.selectImage(active);
    },
    previous(){
      var active = this.activeImage-1;

      if(active < 0){
        active = this.slides.length - 1;
      }
      this.selectImage(active)
    },
  },
  computed:{
    currentImage(){
      return this.slides[this.activeImage].imagePath;
    },
    currentTitle(){
      return this.slides[this.activeImage].title;
    }
  },
  created(){
    this.slides = Eventbus.slides;

    Eventbus.$on('colorWasChanged', ()=>{

      var body = document.getElementById("body");

      if(this.dark){
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        this.dark = false;
      }else{
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        this.dark = true;
      }
    });
  },
}
</script>

<style lang="css" scoped>

  .hidden-controls{
    display:none;
  }

  .wrapper{
    width:100%;
    margin-left:auto;
    margin-right:auto;
  }

  .dark-theme-text{
    color:white;
  }

  .light-theme-text{
    color:#373737;
  }

  .light-theme-buttons{
    color:black;
    border-bottom:1px solid black!important;
  }

  .light-theme-buttons:hover{
    border:1px solid black!important;
  }

  .dark-theme-buttons{
    color:white;
    border-bottom:1px solid white!important;
  }

  .dark-theme-buttons:hover{
    border:1px solid white!important;
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


  .current-title{
    text-align:center;
    margin-top:40px;
  }

/*------------- Carousel start ---------------------*/

  .jumbo-wrapper{
    display:flex;
    align-items:center;
    justify-content: center;
    margin-bottom:20px;
    margin-top:10px;
  }

  .jumbo-buttons{
    height:40px;
    width:50px;
    border-bottom:1px solid black;
  }

  .jumbo-buttons:hover{
    border:1px solid black;
  }

  .prev-button{
    order:1;
  }

  .jumbotron{
    width:50rem;
    height:35rem;
    margin-left:10px;
    margin-right:10px;    
    display:flex;
    order:2;
  }

  .next-button{
    order:3;
  }

  .jumbotron > img{
    width:100%;
  }

  .toggle-wrapper{
    display:flex;
    justify-content: center;
  }

  .toggle-gallery-button{
    border-bottom:1px solid black;
    outline:none;
    width:100px;
    height:40px;
    padding:2px;
    margin-bottom:20px;
  }

  .toggle-gallery-button:hover{
    border:1px solid black;
  }
  
  .thumbnails{
    display:flex;
    flex-wrap:wrap;
    width:50%;
    margin-top:15px;
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

  .portrait {
    width:30rem!important;
    height:35rem!important;
  }

  .landscape {
    width:50rem!important;
    height:35rem!important;
  }


/*------------- Carousel end ---------------------*/

@media screen and (max-width: 900px) {
  .hidden-controls{
    display:flex;
    justify-content: center;
    margin-bottom:40px;
  }

  .jumbo-buttons{
    display:none;
  }

  .jumbotron{
    height:24rem;
    width:70%;
  }

  .thumbnails {
    width:455px;
  }

  .hidden-buttons{
    height:40px;
    width:50px;
    border-bottom:1px solid black;
  }

  .hidden-next{
    margin-left:10px;
  }

  .hidden-prev{
    margin-right:10px;
  }
}

@media screen and (min-width:900px) {
  .thumbnails {
    width:600px;
  }
}

@media screen and (max-width:700px) {
  .jumbotron{
    height:22rem;
    width:80%;
  }
}

@media screen and (max-width:500px) {
  .jumbotron{
    height:20rem;
    width:95%;
  }
  .thumbnails {
    width:300px;
  }
}

@media screen and (max-width:380px) {
  .jumbotron{
    height:17rem;
    width:97%;
  }
}

@media screen and (max-width:310px) {
  .thumbnails {
    width:151px;
  }
}

/* -------------------- animasjon ------------ */

.fade-enter-active {
   animation: enter .2s;
}
.fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
   animation: leave .2s;
}

    @keyframes enter {
      0% {
        opacity: 0;
        transform: scale(1);
      }
      100% {
        opacity: 1;
        transform: scale(0);
      }
    }
    @keyframes leave {
      0% {
        opacity: 1;
        transform: scale(0);
      }
      100% {
        opacity: 0;
        transform: scale(1);
      }
    }
</style>
