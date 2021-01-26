import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

const App = {
    template: `
      <router-link to="/posts">Go to posts</router-link>
      <router-view />
    `
  }

test('routing', () => {
    const wrapper = shallowMount(App, {
        localVue
      })
    expect(wrapper.html()).toContain('Go to posts')
  })