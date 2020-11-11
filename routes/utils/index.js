const { SENTENCE_POSITION } = require('../../constant')
const { getSentence, getFirstKey } = require('../../controllers/sentencies')

function sentencesGenerator(key) {
  return {
    firstId: getFirstKey(),
    id: key,
    startingPoint: getSentence(key, SENTENCE_POSITION.STARTING),
    topSentence: getSentence(key, SENTENCE_POSITION.TOP),
    leftSentence: getSentence(key, SENTENCE_POSITION.LEFT),
    rightSentence: getSentence(key, SENTENCE_POSITION.RIGHT),
    bottomSentence: getSentence(key, SENTENCE_POSITION.BOTTOM),
  }
}

exports.sentencesGenerator = sentencesGenerator
