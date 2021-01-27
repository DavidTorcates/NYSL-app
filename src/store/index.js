import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        clicks: 0,
        inputValue: null,
        chat: "Chat Room",
        msg: "BIENVENIDOS",
        submsg: "¡Somos la mejor liga de futbol!",
        inicio: "Inicio",
        Reglas: "Reglas y Políticas",
        Informacion: "Información de Juego",
        Contacto: "Contáctanos",
        Nosotros: "Sobre Nosotros",
        txtImg1: "Somos una liga de personas comprometidas con el futbol, con el desarrollo integral de nuestros niños.",
        txtImg2: "Ser la mejor liga de futbol del mundo.",
        txtImg3: "Conozca por que nuestra liga es su mejor opción para que inscribas a tu pequeño.",
        date1: "4 Agosto 2021",
        date2: "16 Agosto 2021",
        date3: "1 Septiembre 2021",
        cuerpo1: "Field NYSL Fundraiser",
        cuerpo2: "Field Season Kick-off: Meet the Teams",
        cuerpo3: "Field First Game of the Season (Check Game Schedule for details)"
    },
    mutations: {
        INCREMENT_ACTION_CLICKS(state) {
            state.clicks++
        },
        UPDATE_INPUT_VALUE(state, inputValue) {
            state.inputValue = inputValue
        }
    },
    actions: {
        actionClick({ commit }) {
            commit('INCREMENT_ACTION_CLICKS')
        },
        actionInput({ commit }, { inputValue }) {
            commit('UPDATE_INPUT_VALUE', inputValue)
        }
    },
    getters: {
        clicks: state => state.clicks,
        inputValue: state => state.inputValue,
        ObtenerChat(state) {
            return state.chat;
        },
        Obtenermsg(state) {
            return state.submsg;
        },
        ObtenerIni(state) {
            return state.inicio;
        },
        ObtenerReg(state) {
            return state.Reglas;
        },
        ObtenerInfo(state) {
            return state.Informacion;
        },
        ObtenerNoso(state) {
            return state.Nosotros;
        },
        ObtenerCont(state) {
            return state.Contacto;
        },
        ObtenerDate1(state) {
            return state.date1;
        },
        ObtenerDate2(state) {
            return state.date2;
        },
        ObtenerDate3(state) {
            return state.date3;
        },
        ObtenerComp1(state) {
            return state.cuerpo1;
        },
        ObtenerComp2(state) {
            return state.cuerpo2;
        },
        ObtenerComp3(state) {
            return state.cuerpo3;
        }
    }
})
