//Importamos herramientas de testeo como shallowMount y variable local vue 
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
//Se importa componente a testear de la carpeta Actions
import Actions from '../../src/components/Actions.vue'
//Creamos una constante localvue con una instancia de CreateLocalVue
const localVue = createLocalVue()
//Esta constante usara Vuex
localVue.use(Vuex)
//Empezamos nuestro test, con una descripción 
describe('Actions.vue', () => {
//Se crean variables locales 
  let actions
  let store
//Antes de cada test le damos a las variables locales nuestros actionClick y actionInput con nombre
//parecidos a los de mi store general y le damos valores fantasmas ( las activamos sin devolver nada )
  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
//Creamos un store local que tendra un objeto state y actions que seran las mismas que instanciamos anteriormente
    store = new Vuex.Store({
      state:{},
      actions
    })
  })
//Al empezar la prueba, debemos de colocarle un nombre describtivo
  it('dispatches "actionInput" when input event value is "input"', () => {
    //A nuestra constante wrapper le daremos nuestro shallowMount que tendra el componente a testear, el store y nuestro localVue
    const wrapper = shallowMount(Actions, { store, localVue })
    //Crearemos un input buscando en nuestro wrapper un elemento input
    //Se le da un valor 'input'
    //Se activa el disparador y se verifica si la función actionInput fue llamada/usada
    const input = wrapper.find('input')
    input.element.value = 'input'
    input.trigger('input')
    expect(actions.actionInput).toHaveBeenCalled()
  })

  //Se crea una prueba para setear un valor erroneo a nuestro input con el valor 'not input'
  //luego dispararemos nuestro input con el valor ya seteado
  //nuestra respuesta esperada es que la funcion actioninput nunca fue usada/llamada porque es false. input es diferente de not input
  it('does not dispatch "actionInput" when event value is not "input"', () => {
    const wrapper = shallowMount(Actions, { store, localVue })
    const input = wrapper.find('input')
    input.element.value = 'not input'
    input.trigger('input')
    expect(actions.actionInput).not.toHaveBeenCalled()
  })
/* En esta prueba llamamos al mismo componente Actions y le damos el mismo store y localVue
A nuestro wrapper le seteamos un boton , buscandolo con la función 'find'
luego disparamos el evento click de este boton con la función 'trigger'
esperamos que la funcion actionClick haya sido llamada/usada 
*/
  it('calls store action "actionClick" when button is clicked', () => {
    const wrapper = shallowMount(Actions, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.actionClick).toHaveBeenCalled()
  })
})
