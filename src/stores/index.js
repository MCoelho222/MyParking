import { createStore } from 'vuex'
import register from './modules/register.js'

const store = createStore({
    modules: {
        register
    }
})

export default store