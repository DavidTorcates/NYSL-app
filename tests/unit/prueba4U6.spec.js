import { shallowMount } from '@vue/test-utils'

const App = {
    template: `
      <router-link to="/some/path">Go to posts</router-link>
      <router-view />
    `
}

const $route = {
    path: '/some/path'
}
// /some/path
test('routing', () => {
    const wrapper = shallowMount(App, {
        mocks: {
            $route
        }
    })
    expect(wrapper.vm.$route.path).toContain('/some/path')
})