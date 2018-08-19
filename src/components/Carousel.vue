<template lang="html">
<div class="wrapper">
  <h2 class="current-title" :class="dark ? 'dark-theme-text' : 'light-theme-text'">{{ currentTitle }}</h2>
  <div class="jumbo-wrapper">
    <div class="jumbotron" :class="dark ? 'dark-theme-shadow' : 'light-theme-shadow'">
      <img :src="currentImage" />
    </div>
      <button :class="dark ? 'dark-theme-buttons' : 'light-theme-buttons'" class='next-button jumbo-buttons' @click="next">Next</button>
      <button class='prev-button jumbo-buttons' :class="dark ? 'dark-theme-buttons' : 'light-theme-buttons'" @click="previous">Prev</button>
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
      slides: [],
      activeImage:0
    }
  },
  methods:{
    selectImage(index){
      this.activeImage = index;
    },
    next(){
      var active = this.activeImage+1;
      if(active >= this.slides.length){
        active = 0;
      }
      this.selectImage(active);
    },
    previous(){
      console.log("clicked");
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
    width:900px;
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


/*------------- Carousel end ---------------------*/

@media screen and (max-width: 992px) {
  
}

</style>
