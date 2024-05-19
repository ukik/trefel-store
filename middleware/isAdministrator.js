// middlewares/isAdministrator
export default defineNuxtRouteMiddleware(nuxt => {
    // isAdmin() is an example method verifying if an user is authenticated
    // if (isAdmin() === false) {
    //     logout();
    //     return navigateTo('/login')
    // }
    console.log('middlewares/isAdministrator', nuxt)
})

// export default function({store, redirect }) {
//     const isAuthenticated = store.state.auth.loggedIn ? true : false
//     if (!isAuthenticated) {
//       redirect("/login")
//     }
//     else{
//       console.log("stay on the same page");
//     }
//   }