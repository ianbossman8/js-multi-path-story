const { v4: uuidv4 } = require('uuid')

const firstKey = uuidv4()

// in memory story for the story journey
const sentenciesStore = {
  [firstKey]: {
    starting: 'Once upon a time, there was a big bad wolf',
  },
}

exports.firstKey = firstKey
exports.sentenciesStore = sentenciesStore
