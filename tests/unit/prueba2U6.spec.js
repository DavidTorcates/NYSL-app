import { shallowMount } from '@vue/test-utils'

const App = {
    template: `
      <router-link to="/posts">Go to posts</router-link>
      <router-view />
    `
  }
  
  test('routing', () => {
    const wrapper = shallowMount(App, {
        stubs: ['router-link', 'router-view']
      })
    expect(wrapper.html()).toContain('Go to posts')
  })
  