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
                  imagePath: '/static/pagliacci.jpg',
                  id: 1,
                  orientation:'landscape'
                },
                {
                  title: 'Formferd',
                  imagePath: '/static/formferd.jpg',
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
                },
                {
                  title: 'Brill',
                  imagePath: '/static/brill.jpg',
                  id: 5,
                  orientation:'landscape'
                },
                {
                  title: 'Tim Scully',
                  imagePath: '/static/tim_scully.png',
                  id:9,
                  orientation:'landscape'
                },
                {
                  title: 'egodød er vanskelig',
                  imagePath: '/static/egodod.jpg',
                  id:10,
                  orientation:'landscape'
                },
                {
                  title: 'chronasjer',
                  imagePath: '/static/famfoto.jpg',
                  id:11,
                  orientation:'landscape'
                }
              ]
        }
    }
});
