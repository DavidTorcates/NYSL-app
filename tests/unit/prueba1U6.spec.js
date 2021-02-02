import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
const router = new VueRouter()
localVue.use(VueRouter)

const App = {
    template: `
    <div>
      <router-link to="/posts">Go to posts</router-link>
      <router-view />
    </div>
      `
  }

test('routing', () => {
    const wrapper = shallowMount(App, {
        localVue,
        router
      })
    expect(wrapper.html()).toContain('Go to posts')
  })