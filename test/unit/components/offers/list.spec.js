import '~/test/vue-init'
import { shallowMount } from '@vue/test-utils'
import OfferList from '~/components/offers/list'
import { offers } from '~/test/mocks/offers'

const mountOptions = {
  mocks: {
    $route: {},
  },
  propsData: {
    offers,
  },
}

describe('Offer > List', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(OfferList, mountOptions)
  })

  test('should render correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('should show offer list', () => {
    offers.forEach((offer) => {
      const offerFound = wrapper.find(`[data-test-id="offer-${offer.uuid}"]`)
      expect(offerFound.exists()).toBeTruthy()
    })
  })
})
