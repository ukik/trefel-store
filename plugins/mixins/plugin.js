// import globalMixin from './mixins/globalMixin'

// // export default defineNuxtPlugin((nuxtApp) => {
// //   nuxtApp.vueApp.use(globalMixin)
// // })


// // import Vue from 'vue';
// // // import Auth from './mixins/Auth';

// // Vue.mixin({
// //   methods: {
// //     currentUser() {
// //       return 11111
// //       // return window.currentUser;
// //     },
// //   },
// // }); 

// // export default {
// //   methods: {
// //       callme() {
// //           console.log("not running")
// //       },
// //   },
// // }

// import simple_nuxt_plugin from "./simple_nuxt_plugin"
import Vue from 'vue'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.prototype.$hello = 'world'
})




