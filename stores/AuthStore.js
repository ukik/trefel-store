// trevolia-api/v1/auth/login
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RyZWZlbHRvdXIubGFic25pcC5jb20vdHJldm9saWEtYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE3MTU5NDE1MjgsImV4cCI6MTcxNjAyNzkyOCwibmJmIjoxNzE1OTQxNTI4LCJqdGkiOiJTOXhoeUFQQVNLTmdieGF1Iiwic3ViIjoiMSIsInBydiI6Ijc2MWRiYTgwMDA5OGY0NjM2ZWQwYTg1Zjk2M2U5OTcyNjUyOGNmZjEifQ.yofnWDAeOk5mh-_WyGlg9osRe3Y8DfEAGGyuE-46yKY
import domains from '@/settings/domains'
const { apiDomain } = domains()
import { api } from '@/settings/axios'

import { Notify } from 'quasar'

// no need to import defineStore and acceptHMRUpdate
export const useAuthStore = defineStore('AuthStore', {
    id: 'AuthStore',

    state: () => ({
        isLoggedIn: true,
        form_login: {
            "email": "admin@gmail.com",
            "password": "123456"
        },
        auth: {
            "message": "",
            "errors": null,
            "data": {
                "accessToken": "",
                "tokenType": "",
                "user": {
                    "id": "",
                    "name": "",
                    "username": "",
                    "email": "",
                    "additionalInfo": "",
                    "gender": null,
                    "avatar": null,
                    "phone": null,
                    "address": null,
                    "emailVerifiedAt": "",
                    "password": "",
                    "rememberToken": null,
                    "lastSentTokenAt": null,
                    "createdAt": "",
                    "updatedAt": "",
                    "deletedAt": null
                },
                "expiresIn": 0
            }
        },
        loading: {
            fetchCSRF: false,
            fetchLoginAuth: false,
            fetchInitAuth: false,
        }
    }),

    getters: {
        getAuth: state => state.auth
    },

    actions: {
        async fetchCSRF() {
            if (this.loading.fetchCSRF) return false;

            this.loading.fetchCSRF = true;

            console.log('AuthStore fetchCSRF')

            api.get('/sanctum/csrf-cookie', {
                withCredentials: true // jika pakai ini maka onResponse tidak berjalan
            })
            .then((response) => {
                //   data.value = response.data
                console.log('fetchCSRF AXIOS', response.headers['Set-Cookie'], JSON.parse(JSON.stringify(response.headers)))
                Notify.create({
                    color: 'positive',
                    position: 'top',
                    message: 'Loading failed',
                    icon: 'report_problem'
                })
            })
            .catch(() => {
                // Notify.create({
                //     color: 'negative',
                //     position: 'top',
                //     message: 'Loading failed',
                //     icon: 'report_problem'
                // })
            })

            // digunakan untuk mengisi FORM  (CLIENT SIDE)
            // pakai axios saja, kalo pake ini request 2X gak tau kenapa
            /*
            await useFetch(apiDomain + "/sanctum/csrf-cookie", {
                credentials: "include", // jika pakai ini maka onResponse tidak berjalan
                headers: {
                    Accept: 'application/json'
                },
                raw: true,
                async onResponse({ response }) {
                  console.log('Headers', response.headers['Set-Cookie']);
                },                  
            });
            */

            this.loading.fetchCSRF = false

        },
        async fetchInitAuth() {
            if (this.loading.fetchInitAuth) return false;

            this.loading.fetchInitAuth = true;

            const accessToken = useCookie("accessToken");
            console.log('accessToken', accessToken.value)

            console.log('AuthStore fetchInitAuth')

            const resp = await useFetch(apiDomain + '/trevolia-api/v1/dashboard', {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${accessToken.value}`,
                },
                // body: {
                //   name: form.name.value,
                //   email: form.email.value,
                //   message: form.message.value
                // }
            }).then(res => {
                const data = res.data.value
                const error = res.error.value
                if (error) {
                    // dealing error
                    console.log('AuthStore fetchInitAuth Error', error)
                    return false
                } else {
                    console.log('AuthStore fetchInitAuth Success', data)
                    return true
                }
            }, error => {
                console.log('exception...')
                console.log(error)
                return false
            })
            this.loading.fetchInitAuth = false

            this.isLoggedIn = resp

            return JSON.parse(JSON.stringify(resp))
        },
        async fetchLoginAuth() {

            console.log('this.loading.fetchLoginAuth', this.loading.fetchLoginAuth)
            if (this.loading.fetchLoginAuth) return false;

            this.loading.fetchLoginAuth = true;

            console.log('AuthStore fetchLoginAuth')

            const token = useCookie("XSRF-TOKEN");
            console.log('XSRF-TOKEN', token.value)

            const { data, pending, error, refresh } = await useFetch(apiDomain + '/trevolia-api/v1/auth/login', {
                method: 'post',
                body: {
                    email: this.form_login.email,
                    password: this.form_login.password,
                },
                headers: {
                    "X-XSRF-TOKEN": token.value, // tapi undefined, katanya hanya bisa sama domain/sub domain
                }
            });


            // const data = await api.post('/trevolia-api/v1/auth/login', {      
            //     body: {
            //             email: this.form_login.email,
            //             password: this.form_login.password,
            //         },
            //     headers: {
            //         "X-XSRF-TOKEN": token.value, // tapi undefined, katanya hanya bisa sama domain/sub domain
            //     }
            // })
            // .then((response) => {
            //     Notify.create({
            //         color: 'positive',
            //         position: 'top',
            //         message: 'Loading failed',
            //         icon: 'report_problem'
            //     })
            //     return response.data
            // })
            // .catch((error) => {
            //     Notify.create({
            //         color: 'negative',
            //         position: 'top',
            //         message: 'Loading failed',
            //         icon: 'report_problem'
            //     })
            //     return error
            // })

            this.loading.fetchLoginAuth = false

            // console.log('AuthStore fetchLoginAuth ERROR', data?.value, error)
            if (!data?.value) return false

            if (data) {
                this.auth = data;

                const accessToken = useCookie("accessToken");
                accessToken.value = this.auth?.data?.accessToken

                this.isLoggedIn = true
            }

            return true
        },
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}

// https://trefeltour.labsnip.com/trevolia-api/v1/auth/login