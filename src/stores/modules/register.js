export default {
    
    state() {
        return {
            reservations: []
        }
    },
    mutations: {
        registerNew(state, value) {
            value.id = state.reservations.length + 1
            state.reservations.push(value)
        }

    },
    actions: {

    },
    getters: {
        
    }
    
}