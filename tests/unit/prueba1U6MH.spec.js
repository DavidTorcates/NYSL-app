import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const App = {
    template: `
      <router-link to="/posts">Go to posts</router-link>
      <router-view />
    `
  }

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

test('routing', () => {
    const wrapper = shallowMount(App, {
        localVue,
        router
      })
    expect(wrapper.html()).toContain('Go to posts')
  })