import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MyComponent from '../../src/components/MyComponent'
import myModule from '../../src/store/myModule'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('MyComponent.vue', () => {
  let actions
  let state
  let store

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

  it('calls store action "moduleActionClick" when button is clicked', () => {
    const wrapper = shallowMount(MyComponent, { store, localVue })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(actions.moduleActionClick).toHaveBeenCalled()
  })

  it('renders "state.clicks" in first p tag', () => {
    const wrapper = shallowMount(MyComponent, { store, localVue })
    const p = wrapper.find('p')
    expect(p.text()).toBe(state.clicks.toString())
  })
})