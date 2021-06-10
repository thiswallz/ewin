import '~/test/vue-init'
import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import OfferFilter from '~/components/offers/filter'

const filters = ['FRA', 'USA']

const mountOptions = {
  mocks: {
    $route: {},
  },
  propsData: {
    filters,
  },
}

describe('Offer > Filter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(OfferFilter, mountOptions)
  })

  test('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('should show  an empty list', () => {
    wrapper = shallowMount(OfferFilter, {
      ...mountOptions,
      propsData: { ...mountOptions.propsData, filters: [] },
    })
    const list = wrapper.findAll(
      `[data-test-id="filter-group"] *[data-test-id^="filter-"]`
    )
    expect(list.length).toBe(0)
  })

  test('should show the filters list', () => {
    const list = wrapper.findAll(
      `[data-test-id="filter-group"] *[data-test-id^="filter-"]`
    )
    expect(list.length).toBe(filters.length)
  })

  test('should emit an event when it selects a filter', () => {
    // Given
    const firstFilter = wrapper.find(`[data-test-id="filter-0"]`)

    // When
    firstFilter.trigger('click')

    // Then
    expect(wrapper.emitted().select).toBeTruthy()
    expect(wrapper.emitted().select).toMatchObject([[firstFilter.text()]])
  })

  test('should clean the filter', async () => {
    // Given
    const firstFilter = wrapper.find(`[data-test-id="filter-0"]`)
    firstFilter.trigger('click')
    await flushPromises()

    const clean = wrapper.find(`[data-test-id="clean"]`)

    // When
    clean.trigger('click')
    await flushPromises()

    // Then
    expect(wrapper.emitted().select).toBeTruthy()
    expect(wrapper.emitted().select).toMatchObject([[firstFilter.text()], ['']])
  })

  test('should have an active state when a filter is selected', async () => {
    // Given
    const firstFilter = wrapper.find(`[data-test-id="filter-0"]`)

    // When
    firstFilter.trigger('click')
    await wrapper.vm.$nextTick()

    // Then
    expect(wrapper.find('[data-test-id="filter-0"]').classes('active')).toBe(
      true
    )
  })

  test('clean option should be hidden by default', () => {
    // Given
    const clean = wrapper.find(`[data-test-id="clean"]`)

    // Then
    expect(clean.exists()).toBe(false)
  })

  test('clean option should be visible after filtering', async () => {
    // Given
    const firstFilter = wrapper.find(`[data-test-id="filter-0"]`)
    firstFilter.trigger('click')
    await flushPromises()

    // When
    const clean = wrapper.find(`[data-test-id="clean"]`)

    // Then
    expect(clean.exists()).toBe(true)
  })

  test('should clean filter after clicking the same filter', async () => {
    // Given
    const firstFilter = wrapper.find(`[data-test-id="filter-0"]`)
    firstFilter.trigger('click')
    await flushPromises()

    firstFilter.trigger('click')
    await flushPromises()

    // Then
    expect(wrapper.emitted().select).toBeTruthy()
    expect(wrapper.emitted().select).toMatchObject([[firstFilter.text()], ['']])
    expect(wrapper.find('[data-test-id="filter-0"]').classes('active')).toBe(
      false
    )
    expect(wrapper.vm.selected).toEqual('')
  })
})
