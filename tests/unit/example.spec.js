import { shallowMount } from '@vue/test-utils';
import Card from '@/components/atoms/Card.vue';

describe('Card.vue', () => {
  it('renders props.container when passed', () => {
    const container = {
      id: 1,
      beer: 3,
      quantity: 4,
    };
    const wrapper = shallowMount(Card, {
      container,
    });
    expect(wrapper.text()).toMatch(container);
  });
});
