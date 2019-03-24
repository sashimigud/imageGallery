import Vue from 'vue'

export const Eventbus = new Vue({
    data(){
        return {
            slides: [
                {
                  title: 'Flink pike',
                  imagePath: '/static/flinkpike.png',
                  id:4,
                  orientation:'portrait'
                },
                {
                  title: 'Pagliacci',
                  imagePath: '/static/pagliacci2.jpg',
                  id: 1,
                  orientation:'landscape'
                },
                {
                  title: 'Form Ferd',
                  imagePath: '/static/THelmff.jpg',
                  id: 2,
                  orientation:'landscape'
                },
                {
                  title: 'Danger - Life',
                  imagePath: '/static/danger-life.jpeg',
                  id: 3,
                  orientation:'landscape'
                },
                {
                  title: 'Astro Naut',
                  imagePath: '/static/astronaut.jpg',
                  id: 0,
                  orientation:'landscape'
                }
              ]
        }
    }
});
