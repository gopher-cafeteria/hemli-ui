import { mount } from '@vue/test-utils'
import HelloWorld from '../../components/HelloWorld.vue'


// @vitest-environment jsdom

test('mount component', async () => {
  expect(HelloWorld).toBeTruthy()

  const wrapper = mount(HelloWorld, {
    props: {
      msg: "hello",
    },
  })

  expect(wrapper.text()).toContain('hello')
  expect(wrapper.html()).toMatchSnapshot()

})