import { Screen } from 'quasar'

// Screen.gt.md
// Screen.md
// Screen.name ('xs', 'sm', ...)

// define a mixin object
export default {
    ScreenName() {
        return Screen.name
    },
    ScreenWidth() {
        return Screen.width
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
    }
}