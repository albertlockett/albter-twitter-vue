import Vue from 'vue';
import AppHeader from '../../src/components/AppHeader.vue';

describe('(Component) AppHeader', () => {
  
  it('should render with the correct message', () => {
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        test: AppHeader
      }
    }).$mount();
    expect(vm.$el.querySelector('h1').textContent).toBe('Albert Twitter 2.0');
  });

});
