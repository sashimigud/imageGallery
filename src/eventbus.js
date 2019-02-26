import Vue from 'vue'

export const Eventbus = new Vue({
    data(){
        return {
            slides: [
                {
                  title: 'Astro Naut',
                  imagePath: '/static/astronaut.jpg',
                  id: 0
                },
                {
                  title: 'Pagliacci',
                  imagePath: '/static/pagliacci2.jpg',
                  id: 1
                },
                {
                  title: 'Form Ferd',
                  imagePath: '/static/THelmff.jpg',
                  id: 2
                },
                {
                  title: 'Danger - Life',
                  imagePath: '/static/danger-life.jpeg',
                  id: 3
                }
              ]
        }
    }
});
