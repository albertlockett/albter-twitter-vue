import Vue from 'vue';
import TweetList from '../../src/components/TweetList.vue';

describe('(Component) TweetList', () => {
  it('Renders right number of tweets', () => {
    const tweets = [
      'test 1', 'test 2'
    ];
    const vm = new Vue({
      template: '<div><test :tweets="tweets"></test></div>',
      components: {
        test: TweetList
      },
      data: {
        tweets
      }
    }).$mount();

    expect(vm.$el.querySelectorAll('.tweet').length).toBe(2);
  });
});
