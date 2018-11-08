module.exports = {
    path: 'memos',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/memos'))
      })
    }
  }
  