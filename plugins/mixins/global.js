import globalMixin from './mixins/globalMixin'

export default ({ app }, inject) => {
    // Inject $CustomStore() in Vue, context and store.
    inject('globalMixin', globalMixin)
  }