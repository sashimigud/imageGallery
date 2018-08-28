<template lang="html">
<div class="wrapper">
  <nav class="nav-wrapper" :class="dark == false ? 'light-theme-shadow' : 'dark-theme-shadow'">
    <div class="logo-wrapper"><span class="brand-span">T</span>H</div>

    <div>
      <ul class="navbar-ul">
        <li class="nav-item">
          <a class="nav-link" :class="{'active-nav-link':activeLink('carousel')}" @click="activeComp('carousel')">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'active-nav-link':activeLink('gallery')}" @click="activeComp('gallery')">THUMBNAILS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'active-nav-link':activeLink('info')}" @click="activeComp('info')">INFO</a>
        </li>
        <li class="nav-item">
          <div class="lightswitch" @click="changeColor"><span :class="dark == false ? 'lightswitch-dark':'lightswitch-yellow'">LIGHT</span><span :class="dark == false ? 'lightswitch-yellow':'lightswitch-dark'">SWITCH</span></div>
        </li>
      </ul>
    </div>

    <div class="hamburger" @click="hamburger = !hamburger">
      <div class="hamburger-bar"></div>
      <div class="hamburger-bar"></div>
      <div class="hamburger-bar"></div>
    </div>

  </nav>
<transition appear type="animation" name="fade">
  <div class="hamburger-menu" v-if="hamburger">
    <ul class="hamburger-ul">
        <li class="hamburger-menu-item" @click="activeComp('carousel')">
          <a class="hamburger-link" :class="{'active-nav-link':activeLink('carousel')}">HOME</a>
        </li>
        <li class="hamburger-menu-item" @click="activeComp('gallery')">
          <a class="hamburger-link" :class="{'active-nav-link':activeLink('gallery')}">THUMBNAILS</a>
        </li>
        <li class="hamburger-menu-item" @click="activeComp('info')">
          <a class="hamburger-link" :class="{'active-nav-link':activeLink('info')}">INFO</a>
        </li>
        <li class="hamburger-menu-item" @click="changeColor">
          <div class="lightswitch"><span :class="dark == false ? 'lightswitch-dark':'lightswitch-yellow'">LIGHT</span><span :class="dark == false ? 'lightswitch-yellow':'lightswitch-dark'">SWITCH</span></div>
        </li>
      </ul>
  </div>
</transition>

</div>
</template>

<script>
import { Eventbus } from '../../eventbus.js'

export default {
  data:function(){
    return {
      dark:false,
      activeItem:'carousel',
      hamburger:false
    }
  },
  methods:{
    activeComp(comp){
      this.$emit('changeActive', comp);
      this.activeItem = comp;
    },
    changeColor(){
      Eventbus.$emit('colorWasChanged');
      this.dark = !this.dark;
    },
    activeLink(comp){
      return this.activeItem === comp;
    }
  }
}
</script>

<style lang="css" scoped>

  /* ------------------- fade -------------------------- */

  .fade-enter{
    opacity: 0;
  }

  .fade-enter-active{
    transition: opacity .4s;
  }

  .fade-leave-active{
    transition:opacity .4s;
    opacity:0;
  }

  /* ----------------- fade end ------------------------- */


  .nav-wrapper{
    background-color:#66B9BF;
    display:flex;
    flex-direction: row;
  }

  .navbar-ul{
    list-style:none;
  }

  .active-nav-link{
    color:yellow;
  }

  .light-theme-shadow{
    -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
  }

  .dark-theme-shadow{
    -webkit-box-shadow: 0px 3px 13px 4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 13px 4px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 13px 4px rgba(0,0,0,0.75);
  }

  .brand-span{
    color:yellow;
  }

  .lightswitch{
    border-bottom: 2px solid rgba(255,255,0,1);
    color: rgba(255,255,0,1);
    border-radius: 3%;
    box-sizing: border-box;
  }

  .lightswitch:hover{
    border-bottom: 2px solid rgba(255,255,0,.7);
  }


  .logo-wrapper{
    border: 2px solid yellow;
    cursor: context-menu;
    width: 40px;
    height: 30px;
    text-align: center;
    padding-top: 5px;
    margin-top: 12px;
    margin-bottom:12px;
    margin-left: 10px;
  }

  .nav-item{
    display:block;
    float:left;
    margin-top:19px;
    margin-left:20px;
    cursor:pointer;
  }

  .logo-wrapper:hover{
    background-color: rgba(255,0,0,0.5)
  }

  .lightswitch-dark{
    color:rgba(0,0,0,.7);
  }
  .lightswitch-yellow{
    color:yellow;
  }

  .hamburger{
    display:none;
  }

  .hamburger-bar{
    width:100%;
    height:5px;
    margin-top:6px;
    border-radius: 22%;
    background-color:#2e3033;
  }

  .hamburger-menu{
    width:100%;
    position:absolute;
  }

  .hamburger-ul{
    list-style: none;
    padding:0;
  }

  .hamburger-menu-item{
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid rgba(0,0,0,.4);
    cursor:pointer;
    background-color:#689fa3;
  }

  .hamburger-menu-item:hover{
    background-color: #94ccd1;
  }


  @media screen and (max-width: 420px) {
    .hamburger{
      display:block;
      width:41px;
      margin-top:8px;
      margin-bottom:7px;
      margin-right:15px;
      margin-left:20px;
      cursor:pointer;
    }

    .nav-wrapper{
      justify-content: space-between;
    }

    .navbar-ul{
      display:none;
    }
  }
</style>
