import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        readableNames: true,
        customCursors: true,
        
        esmSkyrim: true,
        esmHearthfire: false,
        esmDragonborn: false,
        esmDawnguard: false
    },
    mutations: {

    },
    actions: {

    }
})
