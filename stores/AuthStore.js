// trevolia-api/v1/auth/login

// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RyZWZlbHRvdXIubGFic25pcC5jb20vdHJldm9saWEtYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE3MTU5NDE1MjgsImV4cCI6MTcxNjAyNzkyOCwibmJmIjoxNzE1OTQxNTI4LCJqdGkiOiJTOXhoeUFQQVNLTmdieGF1Iiwic3ViIjoiMSIsInBydiI6Ijc2MWRiYTgwMDA5OGY0NjM2ZWQwYTg1Zjk2M2U5OTcyNjUyOGNmZjEifQ.yofnWDAeOk5mh-_WyGlg9osRe3Y8DfEAGGyuE-46yKY

// no need to import defineStore and acceptHMRUpdate
export const useAuthStore = defineStore('AuthStore', {
    id: 'AuthStore',

    state: () => ({
        form_login: {
            "email": "admin@gmail.com",
            "password": "megaman"
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
            fetchLoginAuth: false,
            fetchInitAuth: false,
        }
    }),

    getters: {
        getAuth: state => state.auth
    },

    actions: {
        async fetchInitAuth() {
            if (this.loading?.fetchInitAuth) return false;

            this.loading.fetchInitAuth = true;

            const accessToken = useCookie("accessToken");

            // // console.log('AuthStore fetchInitAuth')
            // const { data } = await useFetch('https://trefeltour.labsnip.com/trevolia-api/v1/dashboard', {
            //     method: 'get',
            //     headers: {
            //         authorization: `Bearer ${accessToken.value}`,
            //     },
            // });

            // this.loading.fetchInitAuth = false

            // if (data) {
            //     // this.auth = data;
            //     // accessToken.value = this.auth.data?.accessToken
            //     console.log('AuthStore fetchInitAuth', data)
            // }


            useFetch('https://trefeltour.labsnip.com/trevolia-api/v1/dashboard', {
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
                } else {
                    console.log('AuthStore fetchInitAuth Success', data)
                }
            }, error => {
                console.log('exception...')
                console.log(error)
            })
            this.loading.fetchInitAuth = false
            return true
        },
        async fetchLoginAuth() {
            if (this.loading?.fetchLoginAuth) return false;

            this.loading.fetchLoginAuth = true;

            const accessToken = useCookie("accessToken");

            // console.log('AuthStore fetchLoginAuth')
            const { data, pending, error, refresh } = await useFetch('https://trefeltour.labsnip.com/trevolia-api/v1/auth/login', {
                method: 'post',
                body: {
                    email: this.form_login.email,
                    password: this.form_login.password,
                }
            });

            this.loading.fetchLoginAuth = false

            if (data) {
                this.auth = data;
                accessToken.value = this.auth.data?.accessToken
                console.log('AuthStore fetchLoginAuth', accessToken.value)
            }

            return true
        },
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}

// https://trefeltour.labsnip.com/trevolia-api/v1/auth/login