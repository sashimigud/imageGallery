<template lang="html">
  <div class="wrapper">
    <div class="text-box">
    <!--  <button class="bullshit-button" :class="dark ? 'dark-theme-border' : 'light-theme-border'" @click="bullshit = !bullshit">Toggle bullshit</button>
      <div class="toggle-bullshit" v-if="bullshit">
      <h2 class="bullshit-title">Abandon hope all ye who enter here!</h2>

      <p class="para">So you've stumbled across this tiny node on the internet, and you're wondering what the hell you're looking at.
         To be honest this info section isn't gonna help you get a whole lot wiser. If getting wiser is your goal, you'd might enjoy clicking the "random page"
         button on wikipedia a couple of times. It starts of innocently enough, it allways does. "Look at me being all quirky, reading random wikiepdia articles" you think yourself.
         The next step is curiosity, "Wait a minute, this is actually interesting". This is where they get you. Enslaved by the need to satiate your seemingly endless
         hunger for more articles, you travel onward, like the fine soldier of uninportant information that you are. I mean, look at you! You go girl.
         The next time you're able to rip your eyes of the moniter showing a riveting article about the 2013 Samoa Cup, your wife has left you. Your kids? They're grown ups now.
         They haven't seen you in so long, they don't even recognize you anymore. You find yourself bursting with questions. How long where you gone? It couldn't have been more then a couple of articles. Could it? 
         And what about your family? Will you ever see your wife again? But most importantly how could Napoleon forget the harshness of the Russian winter?
      </p>
      </div> --> 
      <h4 class="real-title">Some actual info</h4>
      <p class="para">
         Welcome to my corner of the internet! 
         I'm a Norwegian student, currently working on my master thesis in computer science. 
         In addition to being a huge nerd, I really like digital art. That is essentially why this page even exists. This project is a way for me 
         to combine two of my favourite past-times. And if you're reading this, I succeded. Well done, me.
         <br>
         <br>
         I have yet to implement mobile/tablet-friendly ui. It is however, coming soon. Consider this a MVP of sorts.
      </p>
    </div>

    <div class="contact">
      <p class="contact-para">If you have any tips that could help improve either the website or the drawings, you can send me an email at <span class="email-span" v-if="showEmail">tylerhelm.arthub@gmail.com</span> </p>
      <button type="button" class="show-email" @click="showEmail = !showEmail">{{ toggle }}</button>
    </div>
  </div>
</template>

<script>
import { Eventbus } from '../eventbus.js'

export default {


  data(){
    return {
      bullshit:false,
      dark:false,
      showEmail:false,
    }
  },
  computed:{
    toggle () {
      let content = this.showEmail ? 'Hide Email' : 'Show Email'
      return content
    }
  },
  mounted () {
      Eventbus.$on('colorWasChanged', () => {
        this.dark = !this.dark
      })
    }
}
</script>

<style lang="css" scoped>

  .real-title{
    color:yellow;
  }

  .bullshit-title{
    margin-top:20px;
  }

  .bullshit-button{
    width:120px;
    height:40px;
    border-bottom:1px solid black;
  }

  .bullshit-button:hover{
    border:1px solid black;
  }

  .show-email{
    height:40px;
    width:80px;
    border-bottom: 1px solid yellow;
    color:yellow;
  }

  .show-email:hover{
    border:1px solid yellow;
  }

  .wrapper{
    width:70%;
    background-color:#66B9BF;
    margin-left:auto;
    margin-right:auto;
    padding:30px;
    margin-top:100px;
    -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.75);
  }

  .text-box{
    text-align:center;
    margin-left:auto;
    margin-right:auto;
    width:60%;
  }

  .para{
    text-align:center;
    line-height: 1.5rem;
    padding:20px;
    padding-top:5px;
    color:black;
  }

  .contact{
    text-align:center;
    margin-left:auto;
    margin-right:auto;
    margin-top:10px;
    width:60%;
    color:#380c5b;
  }

  .email-span{
    color:black;
  }

  .contact-para{
    line-height: 1.5rem;
  }

  @media screen and (max-width:666px) {
    .text-box{
      width:75%;
    }
  }

  @media screen and (max-width:552px) {
    .text-box{
      width:80%;
      margin-top:50px;
    }
  }

  @media screen and (max-width:390px) {
    .text-box{
      width:95%;
      margin-top:30px;
    }
  }

</style>
