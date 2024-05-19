// import { useAuthStore } from '@/stores/AuthStore';
import domains from '@/settings/domains'
const { api } = domains()

export default defineNuxtPlugin(async nuxt => {

    const store = useAuthStore(nuxt.$pinia);
    const { fetchCSRF, fetchLoginAuth, fetchInitAuth } = store; // have all reactive states here
    const { auth } = storeToRefs(store); // have all reactive states here

    // console.log('plugins/auth_pinia', store, nuxt.$pinia)

    if (import.meta.server) {
        await fetchInitAuth()
    }

    console.log('plugins/auth_pinia', auth)

    if (import.meta.client) {
        await fetchCSRF() // digunakan untuk mengisi FORM (CLIENT SIDE) // GAK USAHLAH
    }

    // The pinia or vuex instant is needed in order to access the store instance outside setup()

    // Triggered every route change or init
    addRouteMiddleware('global-test', async (to, from) => {
        const accessToken = useCookie("accessToken");

        // console.log(`SERVER SIDE`, auth, accessToken.value)
        console.log('this global middleware was added in a plugin and will be run on every route change', 'server ' + import.meta.server, 'client ' + import.meta.client)

        console.log('addRouteMiddleware GLOBAL', to.path, to.path === "/package-common" && store.isLoggedIn && accessToken.value)

        if(store.isLoggedIn && accessToken.value) {
        } else {
            switch(to.name) { // WAJIB ada filter ini untuk global, jika tidak akan infinite loop
                case "package-common": 
                    return navigateTo('/')
            }
        }

        // TODO:
        if (store.isLoggedIn && accessToken.value) {
            console.log('store.isLoggedIn TRUE', store.isLoggedIn)
            // if (to.params.id === '1') {
            //     return abortNavigation()
            // }            
        } else {
            console.log('store.isLoggedIn FALSE', store.isLoggedIn)
            // await fetchLoginAuth()
            // return abortNavigation()
        }
    }, { global: true });

    // for non-global middleware use this: 
    // pasang di page 
    /*
        <script setup lang="ts">
        definePageMeta({
            middleware: ["adminGuard"]
            // or middleware: 'adminGuard'
        })
        </script>
    */
    addRouteMiddleware('adminGuard', (to, from) => {
        const accessToken = useCookie("accessToken");

        console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')

        if(store.isLoggedIn && accessToken.value) {
        } else {
            // if(to.path === "/package-common") { // tidak perlu kalo middleware non-global
            //    return navigateTo('/')
            // }
            return navigateTo('/')
        }
    })

    return
    // skip middleware on server
    if (import.meta.server) return
    // skip middleware on client side entirely
    if (import.meta.client) return
    // or only skip middleware on initial client load
    const nuxtApp = useNuxtApp()
    if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return
});



