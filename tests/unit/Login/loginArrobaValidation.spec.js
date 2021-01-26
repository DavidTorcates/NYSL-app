import {BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import SignUp from '../../../src/views/SignUp.vue'

const localVue = createLocalVue();

localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

const wrapper = shallowMount(SignUp, { 
    localVue,
    stubs: ['router-link','router-view'] });

describe('Casos de Prueba para SignUp', ()  => {

  test('Comprobar si el username tiene @', () =>{
    //si tiene el @
    wrapper.setData({email : "user@user.com"})
      expect(wrapper.find('.arrobaValidation').exists()).toBe(false);   
  })

  
});


/*
// Import the mount() method from Vue Test Utils
import { shallowMount } from '@vue/test-utils'

// The component to test
const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

test('displays message', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = shallowMount(MessageComponent, {
    propsData: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})
*/