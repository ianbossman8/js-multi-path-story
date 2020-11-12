const { v4: uuidv4 } = require('uuid')
const { sentenciesStore, firstKey } = require('../store/sentenciesStore')

// need the first key for initial rendering
exports.getFirstKey = function getFirstKey() {
  return firstKey
}

exports.getSentence = function getSentence(key, position) {
  return sentenciesStore[key][position]
}

exports.storeSentence = function storeSentence(key, position, sentence) {
  const id = uuidv4() // generate an unique id for each sentence submited from client

  sentenciesStore[key][position] = {
    sentence,
    id,
  }

  return sentenciesStore
}

// making the clicked sentence as the starting point
exports.storeUpdatedStory = function storeUpdatedStory(key, prevStoryId, position) {
  sentenciesStore[key] = typeof sentenciesStore[key] === 'undefined' && {
    starting: sentenciesStore[prevStoryId][position].sentence,
  }
}

exports.isStoryStored = function isStoryStored(key) {
  return Boolean(sentenciesStore[key])
}
