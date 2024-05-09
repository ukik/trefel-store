// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: false
  },  
  // head: {

  //   // // load script in your static folder
  //   // link: [
  //   //   // <!-- Custom CSS -->
  //   //   {rel: 'stylesheet', type: 'text/css', href: '/style.css'},
  //   //   // <!-- Bootstrap CSS -->
  //   //   {rel: 'stylesheet', type: 'text/css', href: '/assets/vendors/bootstrap/css/bootstrap.min.css', media:"all"},
  //   //   // <!-- jquery-ui css -->
  //   //   {rel: 'stylesheet', type: 'text/css', href: '/assets/vendors/jquery-ui/jquery-ui.min.css'},
  //   //   // <!-- fancybox box css -->
  //   //   {rel: 'stylesheet', type: 'text/css', href: '/assets/vendors/fancybox/dist/jquery.fancybox.min.css'},
  //   //   // <!-- Fonts Awesome CSS -->
  //   //   {rel: 'stylesheet', type: 'text/css', href: '/assets/vendors/fontawesome/css/all.min.css'},
  //   //   // <!-- Elmentkit Icon CSS -->
  //   //   {rel: 'stylesheet', type: 'text/css', href: '/assets/vendors/elementskit-icon-pack/assets/css/ekiticons.css'},
  //   //   // <!-- slick slider css -->
  //   //   {rel: 'stylesheet', type: 'text/css', href: '/assets/vendors/slick/slick.css'},
  //   //   {rel: 'stylesheet', type: 'text/css', href: '/assets/vendors/slick/slick-theme.css'},
  //   //   // <!-- google fonts -->
  //   //   {href: '/https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet'},
  //   //   {rel: 'stylesheet', type: 'text/css', href: '/assets/vendors/slick/slick.css'},
  //   // ],
  //   // script: [
  //   //   { src: '/assets/vendors/jquery/jquery.js', defer: true },
  //   //   { src: '/assets/vendors/waypoint/waypoints.js', defer: true },
  //   //   { src: '/assets/vendors/bootstrap/js/bootstrap.min.js', defer: true },
  //   //   { src: '/assets/vendors/jquery-ui/jquery-ui.min.js', defer: true },
  //   //   { src: '/assets/vendors/countdown-date-loop-counter/loopcounter.js', defer: true },
  //   //   { src: '/assets/vendors/counterup/jquery.counterup.min.js', defer: true },
  //   //   { src: '/https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js', defer: true },
  //   //   { src: '/assets/vendors/masonry/masonry.pkgd.min.js', defer: true },
  //   //   { src: '/assets/vendors/slick/slick.min.js', defer: true },
  //   //   { src: '/assets/vendors/fancybox/dist/jquery.fancybox.min.js', defer: true },
  //   //   { src: '/assets/vendors/slick-nav/jquery.slicknav.js', defer: true },
  //   //   { src: '/assets/js/custom.min.js', defer: true },
  //   // ]    
  // }, 
  ssr: true, // Disable Server Side rendering
  definePageMeta: {
    keepalive: true,
  },
  head: {
    title: "Nuxt 3 Gallery",
    description: "Masonry Gallery implementation with Vue Composition API and Nuxt 3",
    meta: [
      {charset: "UTF-8"},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: "theme-color", content: "#e2e2e2"},
    ],
    link: [
      {rel: "icon", href: "/public/favicon.ico", sizes: "any"},
      {rel: "icon", href: "/public/favicon.svg", type: "image/x-icon"},
      {rel: "mask-icon", href: "/public/favicon.svg", type: "image/x-icon"},
      {rel: "apple-touch-icon", href: "safari-pinned-tab.svg", color: "#24a1bc"},
      {rel: "manifest", href: "/public/site.webmanifest"},
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap",
      // },
    ],
  },

  site: {
    url: 'https://example.com',
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },      
  css: [
    '@/assets/custom.scss',
  ],
  modules: [
    'nuxt-quasar-ui',
    '@nuxtjs/seo',
    '@vesp/nuxt-fontawesome',
  ],
  // build: [
  //   '@fortawesome/free-brands-svg-icons'
  // ],
  fontawesome: {
    icons: {
      solid: ['quote-left'],
      // regular: ['user'],
      brands: ['twitter','instagram','tiktok','whatsapp','x-twitter','facebook-f'],
    }
  },  
  quasar: {
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
    // extras: {
    //   font: 'roboto-font',
    // },
    extras: [
      'roboto-font',
      'material-icons',
      // 'mdi-v7',
      // 'ionicons-v4', // last webfont was available in v4.6.3
      // 'eva-icons',
      // 'fontawesome-v6',
      // 'themify',
      // 'line-awesome',
      // 'bootstrap-icons'
    ],    
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },
  // SEO Config
  // ogImage: {
  //   enabled: false
  // },
  // sitemap: {
  //   enabled: true
  // },
  // robots: {
  //   enabled: false
  // },
  // seoExperiments: {
  //   enabled: false
  // },
  // schemaOrg: {
  //   enabled: false
  // },
  // linkChecker: {
  //   enabled: false
  // }  
});