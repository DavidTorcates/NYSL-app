//Importamos herramientas de testeo como shallowMount y variable local vue 
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
//Importamos nuestros componentes a probar desde las carpetas components y store respectivamente.
import MyComponent from '../../src/components/MyComponent'
import myModule from '../../src/store/myModule'
//Creamos una constante localvue con una instancia de CreateLocalVue
const localVue = createLocalVue()
//Esta constante usara Vuex
localVue.use(Vuex)
//Empezamos nuestra prueba con una descripción de la misma.
//Los let definido mas abajo en las lineas de código son variables locales que serviran para poder usarlas
//en esta prueba sin alterar los archivos originales.
describe('MyComponent.vue', () => {
  let actions
  let state
  let store
/* Antes de cada prueba le daremos valor a cada variable local para usarlos en el store.
Dentro del store , usamos getters en el cual llamamos los getters dentro del modulo 'myModule' que ya hemos imortado
*/
  beforeEach(() => {
    state = {
      clicks: 2
    }

    actions = {
      moduleActionClick: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        myModule: {
          state,
          actions,
          getters: myModule.getters
        }
      }
    })
  })
/* En esta prueba verificaremos si al hacer click en el boton dentro de nuestro componente a testear 'MyComponent'
este llama a la action 'moduleActionClick'
*/
  it('calls store action "moduleActionClick" when button is clicked', () => {
    const wrapper = shallowMount(MyComponent, { store, localVue })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(actions.moduleActionClick).toHaveBeenCalled()
  })
/* En esta prueba verificaremos si el valor dentro de la primera etiqueta p de nuestro componente 'MyComponent'
es igual a el valor ya definido con anterioridad de la variable state.clicks y se compararan convirtiendo este valor 
en strink con la función 'toString'
*/
  it('renders "state.clicks" in first p tag', () => {
    const wrapper = shallowMount(MyComponent, { store, localVue })
    const p = wrapper.find('p')
    expect(p.text()).toBe(state.clicks.toString())
  })
})