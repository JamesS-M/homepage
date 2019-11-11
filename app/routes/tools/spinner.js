import Route from '@ember/routing/route'

export default class SpinnerRoute extends Route {

  model() {
    return [
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ]
  }
}
