
// import { boot } from 'quasar/wrappers'
// import axios from 'axios'

// import { Loading, Notify, Cookies, Platform, Screen } from 'quasar'

// // import { host } from 'src/boot/common'
// import domains from '@/settings/domains'
// const { apiDomain } = domains()

// const api = axios.create({ baseURL: apiDomain })
// // import { useAuthStore } from 'src/stores/auth/auth';
// // import { useRouterStore } from 'src/stores/router-store'

// export default boot(async ({ app, ssrContext, router, store, urlPath }) => {

//     Loading.show()
//     // for use inside Vue files (Options API) through this.$axios and this.$api
//     //   const auth = useAuthStore(store)
//     //   const route = useRouterStore(store)

//     app.config.globalProperties.$axios = axios
//     // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
//     //       so you won't necessarily have to import axios in each vue file

//     // app.config.globalProperties.$api = api
//     // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
//     //       so you can easily perform requests against your app's API

//     let cookies = null
//     let token = null
//     let csrf = null

//     const is_cookie_secure = {
//         secure: process.env.PROD ? true : false,
//         path: '/' // wajib
//     }

//     //   axios.defaults.baseURL = apiDomain

//     axios.interceptors.request.use(function (config) {

//         cookies = process.env.SERVER
//             ? Cookies.parseSSR(ssrContext)
//             : Cookies // otherwise we're on client

//         // if(cookies.has('accessToken')) {
//         token = cookies.get('accessToken')
//         config.headers.common['Authorization'] = `Bearer ${token}`
//         // }

//         if (cookies.has('imajora_csrf')) {
//             csrf = cookies.get('imajora_csrf')
//             config.headers.common['imajora_csrf'] = csrf
//         }

//         config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//         config.headers.post['Content-Type'] = 'multipart/form-data'
//         config.headers.post['Content-Type'] = 'application/json'
//         // config.headers.post['Content-Type'] = 'application/pdf';

//         console.log('axios', config)

//         return config

//     }, function (error) {
//         // Loading.hide()
//         console.log(error.response)

//         const message = err?.response?.data?.meta?.message

//         Notify.create({
//             color: 'negative',
//             position: 'top',
//             message: 'Loading failed',
//             caption: message,
//             icon: 'report_problem'
//         })
//         // if(message) {
//         //   if(message == "could_not_create_token") {
//         //     cookies.remove('accessToken')
//         //     cookies.remove('imajora_csrf')
//         //   }
//         // }

//         return Promise.reject(error)
//     })


//     axios.interceptors.response.use(async function (response) {
//         console.log('axios.interceptors.response.use', response)

//         Loading.hide()

//         // console.log('axios.interceptors.response.use', response?.data?.meta?.message, route.getName)

//         switch (response?.data?.meta?.message) {
//             case 'login':
//                 await cookies.set('imajora_csrf', response.data.payload.csrf, is_cookie_secure)
//                 await cookies.set('accessToken', response.data.payload.token, is_cookie_secure)
//                 break;
//         }

//         switch (response?.data?.payload) {
//             case 'logout':
//                 await cookies.remove('accessToken')
//                 await cookies.remove('imajora_csrf')

//                 // router.replace({ name:'home' })
//                 break;
//         }

//         // if(route.getName != 'auth_login') {
//         //   if(response?.data?.init) {
//         //     await auth.setInit(response?.data?.init)
//         //   }
//         // }

//         return response

//     })


// }, function (error) {
//     // Loading.hide()
//     console.log(error?.response)

//     try {
//         if (error.response.data) { }
//     } catch (err) { }

//     return Promise.reject(error.response)
// })


// export { axios, api }

import { boot } from 'quasar/wrappers'
import axios from 'axios'

const api = axios.create({ baseURL: 'http://127.0.0.1:8000' })

export default boot(({ app }) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api

    app.config.globalProperties.$axios = axios
    // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
    //       so you won't necessarily have to import axios in each vue file

    app.config.globalProperties.$api = api
    // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
    //       so you can easily perform requests against your app's API

    // app.interceptors.response.use(async function (response) {
    //     console.log('axios.interceptors.response.use', response)

    //     // Loading.hide()

    //     // // console.log('axios.interceptors.response.use', response?.data?.meta?.message, route.getName)

    //     // switch (response?.data?.meta?.message) {
    //     //     case 'login':
    //     //         await cookies.set('imajora_csrf', response.data.payload.csrf, is_cookie_secure)
    //     //         await cookies.set('accessToken', response.data.payload.token, is_cookie_secure)
    //     //         break;
    //     // }

    //     // switch (response?.data?.payload) {
    //     //     case 'logout':
    //     //         await cookies.remove('accessToken')
    //     //         await cookies.remove('imajora_csrf')

    //     //         // router.replace({ name:'home' })
    //     //         break;
    //     // }

    //     // if(route.getName != 'auth_login') {
    //     //   if(response?.data?.init) {
    //     //     await auth.setInit(response?.data?.init)
    //     //   }
    //     // }

    //     return response

    // })

})

export { axios, api }