module.exports = {
    path: 'emails',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/emails'))
      })
    }
  }
  