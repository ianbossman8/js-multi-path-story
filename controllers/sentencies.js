const { v4: uuidv4 } = require('uuid')
const { sentenciesStore, firstKey } = require('../store/sentenciesStore')

exports.getFirstKey = function getFirstKey() {
  return firstKey
}

exports.getSentence = function getSentence(key, position) {
  return sentenciesStore[key][position]
}

exports.storeSentence = function storeSentence(key, position, sentence) {
  const id = uuidv4()

  sentenciesStore[key][position] = {
    sentence,
    id,
  }

  return sentenciesStore
}

exports.storeUpdatedStory = function storeUpdatedStory(key, prevStoryId, position) {
  sentenciesStore[key] = typeof sentenciesStore[key] === 'undefined' && {
    starting: sentenciesStore[prevStoryId][position].sentence,
  }
}

exports.isStoryStored = function isStoryStored(key) {
  return Boolean(sentenciesStore[key])
}
