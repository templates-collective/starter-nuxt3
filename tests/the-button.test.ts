import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheButton from '../app/components/TheButton.vue'

const text = 'Button'

describe('test use for TheButton.vue', () => {
  it('create', () => {
    const wrapper = mount(TheButton, {
      slots: {
        default: text,
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toEqual(text)
  })
})
