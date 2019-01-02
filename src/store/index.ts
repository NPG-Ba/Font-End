import Vue from 'vue';
import Vuex from 'vuex';
import { PersonFormModule } from './modules/person/PersonFormModule';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        personForm: new PersonFormModule(),
    },
});
