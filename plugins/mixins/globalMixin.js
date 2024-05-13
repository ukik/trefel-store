import { Screen } from 'quasar'

// Screen.gt.md
// Screen.md
// Screen.name ('xs', 'sm', ...)

// define a mixin object
export default {
    // created: function () {
    //     this.hello()
    // },
    methods: {
        // hello: function () {
        //     console.log('hello from mixin!')
        //     return 3333333
        // },
        ScreenName() {
            return Screen.name            
        },
        isXS() {
            return Screen.name == 'xs'
        },
        isSM() {
            return Screen.name == 'sm'
        },
        isMD() {
            return Screen.name == 'md'
        },
        isLG() {
            return Screen.name == 'lg'
        },
        isXL() {
            return Screen.name == 'xl'
        },
    }
}