//Importamos herramientas de testeo como shallowMount y variable local vue 
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
//Importamos nuestro componente a testear de nuestra carpeta components
import Getters from '../../src/components/Getters'
//Creamos una constante localvue con una instancia de CreateLocalVue
const localVue = createLocalVue()
//Esta constante usara Vuex
localVue.use(Vuex)
//Empezamos nuestro test, con una descripción 
describe('Getters.vue', () => {
  let getters
  let store
/* Antes de realizar cada prueba le daremos a nuestras variables locales getters y store valores definidos
para getters le datemos dos valores, click que tiene una función landa que devuelve 2 e inputValue que tambien 
tiene una función landa que devuelve 'input' 
  Estos valores son solo para realizar las pruebas unitarias  
A su vez, nuestro store sera instanciado como un nuevo Vuex, para poder usarlo en nuestra prueba anutaria y le 
setearemos nuestro getters.
*/
  beforeEach(() => {
    getters = {
      clicks: () => 2,
      inputValue: () => 'input'
    }

    store = new Vuex.Store({
      getters
    })
  })
/* Esta prueba probara valores en el primer parrafo de nuestro componente 'Getters'
Probaremos que el valor llamado en la primera etiqueta p de nuestro componente a probar sea
igual a el valor que devuelve el getter.inputValue definido mas arriba, el cual se le asignó el valor 'input'
*/
  it('Renders "store.getters.inputValue" in first p tag', () => {
    const wrapper = shallowMount(Getters, { store, localVue })
    const p = wrapper.find('p')
    expect(p.text()).toBe(getters.inputValue())
  })
/* En esta prueba probaremos que el valor llamado en la segunta etiqueta p de nuestro componente Getters
sea igual al valor obtenido del getters.clicks que hemos definido con anterioridad, el cual es 2
lo compararemos convirtiendolo en string , con la función 'toString()'
*/
  it('Renders "store.getters.clicks" in second p tag', () => {
    const wrapper = shallowMount(Getters, { store, localVue })
    const p = wrapper.findAll('p').at(1)
    expect(p.text()).toBe(getters.clicks().toString())
  })
})