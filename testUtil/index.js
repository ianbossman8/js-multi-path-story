const { firstKey, sentenciesStore } = require('../store/sentenciesStore')
const { SENTENCE_POSITION } = require('../constant')

exports.clean = function clean() {
  delete sentenciesStore[firstKey][SENTENCE_POSITION.TOP]
  delete sentenciesStore[firstKey][SENTENCE_POSITION.BOTTOM]
  delete sentenciesStore[firstKey][SENTENCE_POSITION.LEFT]
  delete sentenciesStore[firstKey][SENTENCE_POSITION.RIGHT]

  Object.keys(sentenciesStore).map((key) => {
    if (key !== firstKey) {
      delete sentenciesStore[key]
    }
  })
}
