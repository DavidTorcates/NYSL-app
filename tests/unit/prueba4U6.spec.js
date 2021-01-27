import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Test from    '../../src/components/Test.vue'
const localVue = createLocalVue()

localVue.use(VueRouter)

const App = {
    template: `
        <div>
            <router-link to="/some/path">Go to posts
            </router-link>
            <router-view />
        </div>
    `
}

const $route = {
    path: '/Home'
}
// /some/path
test('routing', () => {
    const wrapper = shallowMount(Test, {
        mocks: {
            $route
        }
    })
    expect(wrapper.vm.$route.path).toContain('/Home')
})